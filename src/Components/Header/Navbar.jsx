export default function Navbar() {
    return (
        <div>
            <div className="navbar flex-col md:flex-row mt-10">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl md:text-4xl">Recipe Calories</a>
                </div>

                <div className="hidden lg:flex  flex-1">
                    <ul className="menu menu-horizontal px-1 text-[#150B2BB3]">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>

                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input rounded-3xl input-bordered  md:w-auto" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="User Img" src="https://i.ibb.co/TT5WSr0/sad-teenager-guy-background-city-generative-ai.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}