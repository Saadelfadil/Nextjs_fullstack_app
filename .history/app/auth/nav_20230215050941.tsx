
import Link from 'next/link'
import Login from "./Login"

export default async function Nav(){
    return (
        <nav className='flex justify-between items-center py-8'>
            <Link href={"/"}>
                <h1 className='font-bold text-lg'>Sent it.</h1>
            </Link>
            <ul className=''>
                <Login />
            </ul>
        </nav>
    )
}