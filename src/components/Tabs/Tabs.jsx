import { useState } from "react";

const Tabs = ({ children }) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label);

    const handleClick = (e, newActiveTab) => {
        e.preventDefault();
        setActiveTab(newActiveTab);
    };

    return (
        <div className="w-full">
            <div className="flex justify-between border-b border-customPurpleTree">
                {children.map((child) => (
                    <button
                        key={child.props.label}
                        className={`${
                            activeTab === child.props.label
                                ? "border-b-2 border-orange-800 text-white"
                                : "text-gray-500"
                        } flex-1 font-bold py-2`}
                        onClick={(e) => handleClick(e, child.props.label)}
                    >
                        {child.props.label}
                    </button>
                ))}
            </div>
            <div className="relative">
                {children.map((child) => {
                    if (child.props.label === activeTab) {
                        return (
                            <div key={child.props.label}>
                                {child.props.children}
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export default Tabs;
