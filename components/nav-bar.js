import Link from "next/link";
import { useRouter } from "next/router";
export default function NavBar() {
    const router = useRouter();

    return (
        <nav>
            <Link href="/">
                <a style={{ color: router.pathnamd === '/' ? 'blue' : 'black'}}>Home</a>
            </Link>
            <Link href="/login">
                <a style={{ color: router.pathnamd === '/login' ? 'blue' : 'black'}}>About</a>
            </Link>
        </nav>
    )
}