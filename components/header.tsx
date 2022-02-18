import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
export default function NavBar() {
    const router = useRouter();

    return (
        <nav>
            <Image src="/vercel.svg" className="float-left" height={50} width={70} alt="logo" />
            <div className="float-right">
                <Link href="/">
                    <a className={router.pathname === '/' ? 'active' : ''}>Home</a>
                </Link>
                <Link href="/about">
                    <a className={router.pathname === '/about' ? 'active' : ''}>About</a>
                </Link>
                <Link href="/profile">
                    <a className={router.pathname === '/profile' ? 'active' : ''}>Profile</a>
                </Link>
                <Link href="/login">
                    <a className={router.pathname === '/login' ? 'active' : ''}>Login</a>
                </Link>
            </div>
            <style jsx>{`
                nav {
                    height:70px;
                    padding: 10px 20px 10px 20px;
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
                }
                a + a {
                    margin-left:10px;
                }
                nav a {
                    font-weight: 600;
                    font-size: 18px;
                }
                .active {
                    color: tomato;
                }
            `}</style>
        </nav>
    )
}