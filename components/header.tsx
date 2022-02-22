import Link from "next/link";
import { navLinks } from '../global/navLink';
import Image from "next/image";
import Router, { useRouter } from "next/router";

import { useKeycloak } from '@react-keycloak/ssr'
import type { KeycloakInstance } from 'keycloak-js'

export default function NavBar() {
    const router = useRouter();
    const { keycloak } = useKeycloak<KeycloakInstance>()

    const moveHome = () => {
        Router.push('/')
    }


    return (
        <nav>
            <Image onClick={moveHome} src="/vercel.svg" className="float-left" height={50} width={70} alt="logo" />
            <div className="float-right">
                {
                    navLinks.map((link, index) => {
                        return(
                            <Link key={index} href={link.path}>
                                <a> {link.name} </a>
                            </Link>
                        );
                    })
                }


                {/* <Link href="/">
                    <a className={router.pathname === '/' ? 'active' : ''}>Home</a>
                </Link>
                <Link href="/about">
                    <a className={router.pathname === '/about' ? 'active' : ''}>About</a>
                </Link>
                {keycloak?.authenticated ? (
                    <>
                    <button
                        type="button"
                        className="mx-2 btn btn-outline-primary"
                        onClick={() => {
                        if (keycloak) {
                            window.location.href = keycloak.createAccountUrl()
                        }
                        }}
                    >
                        My Account
                    </button>

                    <button
                        type="button"
                        className="mx-2 btn btn-outline-danger"
                        onClick={() => {
                        if (keycloak) {
                            window.location.href = keycloak.createLogoutUrl()
                        }
                        }}
                    >
                        Logout
                    </button>
                    </>
                ) : (
                    <>
                    <button
                        type="button"
                        className="mx-2 btn btn-outline-primary"
                        onClick={() => {
                        if (keycloak) {
                            window.location.href = keycloak.createRegisterUrl()
                        }
                        }}
                    >
                        Signup
                    </button>

                    <button
                        type="button"
                        className="mx-2 btn btn-outline-success"
                        onClick={() => {
                        if (keycloak) {
                            window.location.href = keycloak.createLoginUrl()
                        }
                        }}
                    >
                        Login
                    </button>
                    </>
                )} */}


            </div>
            <style jsx>{`
                nav {
                    height:70px;
                    padding: 10px 20px 10px 20px;
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
                }
                button+button, a + a {
                    margin-left:10px;
                }
                nav a, button {
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