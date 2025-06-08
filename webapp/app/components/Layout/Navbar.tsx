import Link from "next/link"
import styles from "./Navbar.module.css"

export default function Navbar() {

  return (
    <header className={styles.navbar}>
      <h1>Copper-Engine</h1>
      <Link href="/">
        <p>Home</p>
      </Link>
      <Link href="/about">
        <p>About</p>
      </Link>
      <Link href="/docs">
        <p>Documentation</p>
      </Link>
    </header>
  )

}
