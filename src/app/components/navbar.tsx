
export default function NavBar(){
    return (
        <nav className="bg-red-400 h-12 w-screen fixed flex items-center">
            <div className="container mx-auto px-4 flex flex-row justify-between">
            <h1>Developer 1.0</h1>
            <ul className="flex flex-row gap-8">
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Education</li>
                <li>Work</li>
                <li>Experience</li>
                <li>Contact</li>
            </ul>
            </div>
        </nav>
    )
}