import Link from "next/link";

export default function NavBar(){
    return (
        <nav className="bg-white h-12 w-screen fixed flex items-center">
            <div className="container mx-auto px-4 flex flex-row justify-between">
            <h1 className="font-bold text-lg">Developer 1.0</h1>
            <ul className="flex flex-row gap-8">
                <li className="hover:text-blue-400">
                    <Link href="#">Home</Link>
                </li>
                <li className="hover:text-blue-400">
                    <Link href="#">About</Link>
                </li>
                <li className="hover:text-blue-400">
                    <Link href="#">Skills</Link>
                </li>
                <li className="hover:text-blue-400">
                    <Link href="#">Education</Link>
                </li>
                <li className="hover:text-blue-400">
                    <Link href="#">Work</Link>
                </li>
                <li className="hover:text-blue-400">
                    <Link href="#">Experience</Link>
                </li>
                <li className="hover:text-blue-400">
                    <Link href="#">Contact</Link>
                </li>
            </ul>
            </div>
        </nav>
    )
}