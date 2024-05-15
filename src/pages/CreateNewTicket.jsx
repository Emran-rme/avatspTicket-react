import { TicketForm, Main } from "../components/Main";
import { Chart, ModalBox, TicketItem } from "../components/fragments";
import { useGetTicketsQuery, useLazyGetTicketQuery } from "../api";
import { useState } from "react";
import { CiCalendarDate } from "react-icons/ci";

const CreateNewTicket = () => {
    const { data: tickets, isLoading, isSuccess } = useGetTicketsQuery();
    const [getTicket, { data: ticket }] = useLazyGetTicketQuery();
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = async (id) => {
        await getTicket(id);
        setIsOpen(true);
        console.log(data);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <div className="flex w-full">
            <div className="bg-slate-200 w-72 ">
                <TicketForm />
            </div>
            <Main>
                <div className="grid grid-cols-2 grid-rows-2 gap-2 h-[calc(100%-72px)] text-sm text-gray-700">
                    <div className="px-8 py-4 flex row-span-2 justify-between content-start flex-wrap max-h-fit overflow-auto gap-y-5">
                        {isLoading ? (
                            "لطفا صبر کنید..."
                        ) : isSuccess ? (
                            tickets.data.map((ticket) => (
                                <TicketItem
                                    customClass="w-full px-2"
                                    openModal={openModal}
                                    {...ticket}
                                />
                            ))
                        ) : (
                            <div className="h-14 w-full bg-slate-200 shadow-inner shadow-slate-400 rounded-md justify-center flex items-center text-customPurpleOne">
                                <h3 className="text-md font-bold">
                                    درخواستی وجود ندارد
                                </h3>
                            </div>
                        )}
                    </div>
                    <div className="px-8 py-4 flex justify-center items-center">
                        <Chart />
                    </div>
                </div>
                <ModalBox modalIsOpen={modalIsOpen} closeModal={closeModal}>
                    <div className="p-4">
                        <div>
                            {isLoading ? (
                                "لطفا صبر کنید..."
                            ) : isSuccess ? (
                                <div className="min-w-96 flex flex-col gap-y-4">
                                    <div className="flex flex-col ">
                                        <div className="flex py-4 px-2 justify-between gap-x-1 text-white items-center rounded-md bg-blue-500 ">
                                            <div className="flex-col ">
                                                <div className="flex justify-between gap-x-4">
                                                    <span className="flex items-center">
                                                        <CiCalendarDate />
                                                        <span className="text-[12px] ">
                                                            تاریخ ایجاد:
                                                        </span>
                                                    </span>
                                                    <span
                                                        className="text-[12px] "
                                                        dir="ltr"
                                                    >
                                                        {new Date(
                                                            ticket?.data?.createdAt
                                                        ).toLocaleString("fa")}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between gap-x-4 mt-4">
                                                    <span className="flex items-center">
                                                        <CiCalendarDate />
                                                        <span className="text-[12px] ">
                                                            آخرین بروزرسانی:
                                                        </span>
                                                    </span>
                                                    <span
                                                        className="text-[12px] "
                                                        dir="ltr"
                                                    >
                                                        {new Date(
                                                            ticket?.data?.updatedAt
                                                        ).toLocaleString("fa")}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-x-4 text-sm">
                                        <span className="font-bold">
                                            عنوان درخواست:
                                        </span>
                                        <h3>{ticket?.data?.title}</h3>
                                    </div>
                                    <div className="flex gap-x-4  bg-slate-200 p-4 text-xs shadow-inner rounded-md shadow-slate-500 min-h-32 max-h-80 overflow-auto">
                                        <p>{ticket?.data?.description}</p>
                                    </div>
                                    <div className="flex gap-x-4  bg-slate-200 p-4 text-xs shadow-inner rounded-md shadow-slate-500 min-h-32 max-h-80 overflow-auto">
                                        <input type="checkbox" name="" id="" />
                                    </div>
                                </div>
                            ) : (
                                <h2 className="text-md font-bold">
                                    درخواستی وجود ندارد
                                </h2>
                            )}
                        </div>
                    </div>
                </ModalBox>
            </Main>
        </div>
    );
};

export default CreateNewTicket;
