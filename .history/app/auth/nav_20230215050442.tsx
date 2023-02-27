
import Link from 'next/link'
import Login from "./Login"

export default async function Nav(){
    return (
        <nav className='flex'>
            <Link href="/">
                <h1>Sent it.</h1>
            </Link>
            <ul className=''>
                <Login />
            </ul>
        </nav>
    )
}