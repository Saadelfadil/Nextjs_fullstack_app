
import Link from 'next/link'
import Login from "./Login"
export default async function Nav(){
    return (
        <nav>
            <Link href="/">
                <h1>Sent it.</h1>
            </Link>
        </nav>
    )
}