import ButtonLogout from '@/components/button-logout'
import { ModeToggle } from '@/components/mode-toggle'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div>
        <ul>
            <li>
                <Link href={"/auth/login"}>Login</Link>
            </li>
            <li>
                <Link href={"/auth/register"}>Register</Link>
            </li>
            <li>
                <ButtonLogout />
            </li>
        </ul>
        <ModeToggle />
    </div>
  )
}
