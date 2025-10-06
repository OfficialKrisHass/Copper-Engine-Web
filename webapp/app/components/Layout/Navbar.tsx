import Link from "next/link"
import Image from "next/image"

import styles from "./Navbar.module.css"

export default function Navbar() {

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
      </div>
      <Link href="/">
        <p>Home</p>
      </Link>
      <Link href="/about?view=overview">
        <p>About</p>
      </Link>
      <Link href="/blog">
        <p>Blog</p>
      </Link>
      <Link href="/docs">
        <p>Documentation</p>
      </Link>
    </header>
  )

}
