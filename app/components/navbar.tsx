import Image from "next/image";
export default function Navbar() {
    return(
    <nav className="navbar flex justify-between items-center p-1 bg-accent text-black">
        {/* <h1> Double L Builders</h1> */}
      <div className="bg-accent inline-block p-1 ml-2">
        <Image
          className="dark:invert"
          src="/images/logo/DoubleLB&W-Logo.png"
          alt="Double L Builders Logo"
          width={40}
          height={40}
          priority
        />
      </div>
        <ul className="flex gap-2 text-white text-sm font-semibold mr-2">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Services </li>
            <li>Projects</li>
            <li>Real Estate</li>
        </ul> 
    </nav>
    )
}