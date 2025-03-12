import Link from 'next/link'
import React from 'react'


function Header() {
    return (
        <div className='m-3'>
            <div className='flex space-bettwen'>
                <p className='pl-20'>logo</p>
                <div className='pl-100 flex'>
                    <nav className='flex gap-10'>
                        <Link href='/house'>Home</Link>
                        <Link href='/recomend'>Recomend</Link>
                    </nav>
                    <div className='flex pl-100 gap-10'>
                        <Link href='/regist'>Regist</Link>
                        <Link href='/login'>Login</Link>
                        <Link href='/profile'>Profile</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

