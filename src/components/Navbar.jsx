import logo from "../assets/images/Bucheen.png";

function Navbar() {
    return (
        <header className="w-full bg-white">
            <nav className="mx-auto flex max-w-[1140px] items-center justify-between px-6 py-6">
                <a href="#" className="flex items-center">
                    <img
                        src={logo}
                        alt="Bucheen Logo"
                        className="h-5 w-auto"
                    />
                </a>
                <ul className="hidden translate-y-[3px] items-center gap-9 text-[14px] font-medium text-[#999999] md:flex">
                    <li>
                        <a href="#" className="text-[#FF725E]">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#">Service</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Pricing</a>
                    </li>
                    <li>
                        <a href="#">Support</a>
                    </li>
                </ul>
                <div className="hidden items-center gap-4 md:flex">
                    <button className="rounded-[12px] border border-[#FF725E] px-7 py-2.5 text-[13px] text-[#FF725E]">
                        Sign In
                    </button>
                    <button className="rounded-[12px] bg-[#FF725E] px-7 py-2.5 text-[13px] text-white">
                        Sign Up
                    </button>
                </div>
                <button className="text-2xl text-[#333333] md:hidden">☰</button>
            </nav>
        </header>
    );
}

export default Navbar;