import { useState } from "react"
import { House, Wind, Cloud, User, ChevronLeft} from "lucide-react"

const sections = [
    { name: "Dashboard", Icon: House},
    { name : "Weather", Icon: Cloud},
    { name: "AQI", Icon: Wind},
    { name: "Account", Icon: User}
]

const menuBase = "py-2 transition-all duration-400 ease-in-out flex flex-row whitespace-nowrap rounded-full items-center cursor-pointer"
const menuActive = "bg-white text-black"
const menuNormal = "hover:bg-gray-800"
const menuClosed = "px-2"
const menuOpened = "px-4"

function Sidebar(){
    const [active, setActive] = useState("Dashboard")
    const [IsOpen, setIsOpen] = useState(true)
    return(
        <nav className={`transition-all duration-500 ease-in-out overflow-hidden flex flex-col p-2.5 text-white min-h-screen border-l-0 border-solid border-3 border-black rounded-r-lg bg-black ${IsOpen === true? "w-[13rem]" : "w-[5rem]"}`}>
            <div className="flex justify-center items-center">
                <div>
                    <img src="/hirup-icon.svg" alt="Logo Hirup" className="w-15 h-15"></img>
                </div>
                <span
                    className={`overflow-hidden whitespace-nowrap transition-all duration-500 ${
                                    IsOpen
                                    ? "text-4xl max-w-40 opacity-100 ml-2 delay-250"
                                    : "max-w-0 opacity-0 ml-0"
                                }`}
                >HIRUP
                
                </span>
            </div>
            <ul className="flex flex-col pt-2.5 pl-2.5 pr-2.5 gap-2">
                    {sections.map((menu) => {
                        const Icon = menu.Icon
                        return(
                        <li
                            key={menu.name}
                            title={menu.name}
                            onClick={() => setActive(menu.name)}
                            className={`${menuBase} ${active === menu.name? menuActive : menuNormal} ${IsOpen? menuOpened : menuClosed}`}
                        >     
                            <Icon size = {20}/>                           
                            <span
                                className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${
                                    IsOpen
                                    ? "max-w-40 opacity-100 ml-2 delay-200"
                                    : "max-w-0 opacity-0 ml-0"
                                }`}
                            >
                            {menu.name}
                            </span>
                        </li>
                        )
                    })}
            </ul>
            <div className="mt-auto ml-auto">
                <button onClick={() => setIsOpen(!IsOpen)} className="border-solid border-gray-700 border-2 rounded-lg h-10 w-10 flex justify-center items-center"><ChevronLeft className={`transition-transform duration-300 ${IsOpen ? "" : "rotate-180"}`} /></button>
            </div>
        </nav>
    )
}

export default Sidebar