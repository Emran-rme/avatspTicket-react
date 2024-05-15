import { useState } from "react";

import userImg from "../../assets/userIMG.jpg";
import { Link } from "react-router-dom";
import { LuLogOut, LuUser2 } from "react-icons/lu";

const DropDown = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-full align-middle overflow-hidden w-10 h-10  border-2 border-orange-400"
            >
                <img src={userImg} alt="avatar" />
            </button>
            <ul
                role="menu"
                className={
                    isOpen
                        ? "absolute left-0 top-16 z-10 min-w-[180px] overflow-auto rounded-md border border-blue-gray-50 bg-slate-200 p-3 text-xs shadow-lg"
                        : "hidden"
                }
            >
                <li
                    role="menuitem"
                    className="block w-full cursor-pointer  rounded-md px-3 pt-[9px] pb-2 text-start leading-tight "
                >
                    <Link to="/profile" className="flex items-center">
                        <LuUser2 />
                        <span className="mr-2"> پروفایل</span>
                    </Link>
                </li>
                <li
                    role="menuitem"
                    className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight "
                >
                    <Link to="#" className="flex items-center">
                        <LuLogOut />
                        <span className="mr-2"> خروج</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default DropDown;
