import Link from "next/link";

export default function NavBar() {
    const router = useRouter();

    return (
        <nav>
            <Link href="/">
                <a style={{ color: router.pathnamd === '/' ? 'blue' : 'black'}}>Home</a>
            </Link>
            <Link href="/about">
                <a style={{ color: router.pathnamd === '/about' ? 'blue' : 'black'}}>About</a>
            </Link>
        </nav>
    )
}