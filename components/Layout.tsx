import { ReactNode } from "react"
import NavBar from "./NavBar"

type Props = {
    children: ReactNode;
};

export default function Layout({children}: Props) {
    return (
        <>
        <NavBar />
        <div>{children}</div>
        </>
    )
}