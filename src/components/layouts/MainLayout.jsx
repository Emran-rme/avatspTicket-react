import { Outlet } from "react-router-dom";
import { Logo, RightNav } from "../Navbar";
import { DropDown } from "../fragments";

const MainLayout = () => {
    return (
        <>
            <div className="w-full px-6 bg-customPurpleTwo flex justify-between items-center relative">
                <Logo />
                <DropDown />
            </div>
            <div className="flex h-screen relative w-full">
                <div className="bg-customPurpleOne w-60 flex flex-col">
                    <RightNav />
                </div>
                <Outlet />
            </div>
        </>
    );
};

export default MainLayout;
