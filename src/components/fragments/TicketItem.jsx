import { formatDistanceToNow } from "date-fns-jalali";
import { AiOutlineEdit, AiOutlineSetting } from "react-icons/ai";
import { CgChevronLeftR, CgTrash } from "react-icons/cg";
import { CiCalendarDate } from "react-icons/ci";
import { Link } from "react-router-dom";

const TicketItem = ({ title, createdAt, openModal, _id }) => {
    return (
        <div className="w-full h-20">
            <div className="flex flex-col justify-between hover:border-slate-300 hover:bg-gray-500/25 transition-all duration-300 w-full h-full p-4 rounded-md bg-yellow-100/50 shadow-lg shadow-gray-400 border-b-2 border-customPurpleTree ">
                <div className="flex justify-between items-center">
                    <div className="flex gap-x-2 items-center">
                        <CgChevronLeftR className="text-gray-500" />

                        <span className="text-sm text-gray-600">{title}</span>
                    </div>
                    <div className="flex gap-x-1 text-gray-400 items-center">
                        <CiCalendarDate />

                        <span className="text-[10px]">
                            {formatDistanceToNow(createdAt)}
                        </span>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="flex items-center gap-x-2">
                        <button
                            className="text-blue-500"
                            onClick={() => openModal(_id)}
                        >
                            <AiOutlineSetting />
                        </button>
                        <span className="border-r border-gray-300 h-full"></span>
                        <Link
                            to="#"
                            className="hover:text-red-950 text-gray-500 "
                        >
                            <CgTrash />
                        </Link>
                        <span className="border-r border-gray-300 h-full"></span>
                        <Link
                            className="hover:text-customPurpleTree text-gray-500"
                            to={`/organiition/${_id}`}
                        >
                            <AiOutlineEdit />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketItem;
