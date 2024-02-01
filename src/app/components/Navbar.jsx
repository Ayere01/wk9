import Link from "next/link";


export default function Navbar() {
  return (
    <nav>
        <ul className="flex justify-around px-4 py-4 h-10 bg-slate-400">
            <Link href='/'><li>Home</li></Link>
            <Link href='/about'><li>About</li></Link>
            <Link href='/contact'><li>Contact</li></Link>
        </ul>
    </nav>
  )
}
