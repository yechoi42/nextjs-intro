import { AppProps } from "next/app"
import Link from "next/link"
import { useRouter } from "next/router"

export default function NavBar() {
    const router = useRouter();
    return (
        <nav>
        <Link href="/">
            <a style={{color: router.pathname === "/" ? "red" : "black"}}>Home</a>
        </Link>
        <Link href="/about">
            <a style={{color: router.pathname === "/about" ? "red" : "black"}}>About</a>
        </Link>
        </nav>
        );
}