import { NavLink } from "react-router-dom";
import { Tab, Tabs } from "../Tabs";
import { rightNavData } from "../../services/rightNavData";
import { LuProjector, LuUser, LuBuilding2, LuSettings2 } from "react-icons/lu";
const RightNav = () => {
    const icons = [
        <LuProjector />,
        <LuUser />,
        <LuBuilding2 />,
        <LuSettings2 />,
    ];
    return (
        <div className="text-sm  p-4 flex justify-between font-bold">
            <Tabs>
                <Tab label="پروژه جدید">
                    <div className="flex flex-col py-4 text-xs gap-y-2 absolute -left-4 w-full font-display">
                        {rightNavData.map(({ href, title, icon }, index) => (
                            <NavLink
                                key={index}
                                to={href}
                                className={({ isActive, isPending }) =>
                                    isActive
                                        ? "text-white bg-orange-800 py-2 pr-2 rounded-r-md flex items-center"
                                        : "text-gray-500 pr-2 py-2 flex items-center"
                                }
                            >
                                <span className="ml-2 text-xl">
                                    {icons[index]}
                                </span>
                                <span>{title}</span>
                            </NavLink>
                        ))}
                    </div>
                </Tab>
                <Tab label="پروژه های من">
                    <div className="py-4"></div>
                </Tab>
            </Tabs>
        </div>
    );
};

export default RightNav;
