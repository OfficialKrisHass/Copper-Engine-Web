import Link from "next/link"
import styles from "./navbar.module.css"

export default function Navbar() {

  return (
    <div className={styles.navbar}>
      <h1>Copper Engine</h1>
      <Link href="/">
        <p>Home</p>
      </Link>
      <Link href="/about">
        <p>About</p>
      </Link>
      <Link href="/docs">
        <p>Documentation</p>
      </Link>
    </div>
  )

}
