"use client"

import Link from "next/link"

export default function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <Link href={"/auth/signup"}>
            signUp
          </Link>
        </li>
        <li>
          <Link href={"/auth/login"}>
            login
          </Link>
        </li>
        <li>
          <Link href={"/auth/requestPasswordReset"}>
            requestPasswordReset
          </Link>
        </li>
        <li>
          <Link href={"/user/changePassword"}>
            changePassword
          </Link>
        </li>
        <li>
          <Link href={"/example/infiniteScroll"}>
            infiniteScroll example
          </Link>
        </li>
      </ul>
    </div>
  )
}
