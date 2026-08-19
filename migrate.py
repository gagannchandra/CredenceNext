import re, os, glob

files = glob.glob('/home/claude/credence-next/components/**/*.jsx', recursive=True) + \
        glob.glob('/home/claude/credence-next/lib_src/pages/**/*.jsx', recursive=True)

for fp in files:
    with open(fp) as f:
        src = f.read()
    orig = src

    # import replacements
    def repl_import(m):
        names = [n.strip() for n in m.group(1).split(',')]
        lines = []
        if 'Link' in names:
            lines.append('import Link from "next/link";')
        nav_hooks = [n for n in names if n in ('useNavigate','useLocation','useParams')]
        if nav_hooks:
            mapped = []
            if 'useNavigate' in names: mapped.append('useRouter')
            if 'useLocation' in names: mapped.append('usePathname')
            if 'useParams' in names: mapped.append('useParams')
            lines.append(f'import {{ {", ".join(mapped)} }} from "next/navigation";')
        return "\n".join(lines)

    src = re.sub(r'import \{([^}]+)\} from "react-router-dom";', repl_import, src)

    # useNavigate -> useRouter
    src = src.replace('useNavigate()', 'useRouter()')
    src = re.sub(r'\bconst navigate = useRouter\(\)', 'const router = useRouter()', src)
    src = re.sub(r'\bnavigate\(-1\)', 'router.back()', src)
    src = re.sub(r'\bnavigate\(', 'router.push(', src)

    # useLocation -> usePathname
    src = re.sub(r'const location = usePathname\(\)', 'const pathname = usePathname()', src)
    src = re.sub(r'const \{ pathname \} = usePathname\(\)', 'const pathname = usePathname()', src)
    src = src.replace('location.pathname', 'pathname')
    src = src.replace('location.state?.selectedCategory', 'undefined')
    src = src.replace('location.state', 'undefined')
    src = re.sub(r'location\.key !== "default"', 'true', src)

    # Link to= -> href=
    src = re.sub(r'<Link\s+to=', '<Link href=', src)
    src = re.sub(r'(<Link[^>]*?)\bto=\{', r'\1href={', src)

    # <Navigate to="X" replace /> pattern - leave a marker comment; handled manually below per-file
    if '<Navigate' in src:
        src = re.sub(
            r'return \(?\s*<Navigate to="([^"]+)"[^/]*/>\s*\)?;',
            r'router.replace("\1"); return null;',
            src
        )

    if 'useParams' in orig:
        pass  # keep useParams from next/navigation, works similarly (object of string params)

    if src != orig:
        # Ensure "use client" directive at top
        if not src.lstrip().startswith('"use client"'):
            src = '"use client";\n\n' + src
        with open(fp, 'w') as f:
            f.write(src)
        print("patched:", fp)
