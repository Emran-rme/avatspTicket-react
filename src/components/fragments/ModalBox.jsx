import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

import Modal from "react-modal";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
    overlay: {
        backgroundColor: "rgb(0 0 0 / 80%)",
        backdropFilter: "blur(5px)",
    },
};

const ModalBox = ({ modalIsOpen, closeModal, children }) => {
    return createPortal(
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="flex flex-col">
                    <div className="flex justify-end border-b border-gray-300 pb-4">
                        <button onClick={closeModal}>
                            <AiOutlineClose />
                        </button>
                    </div>
                    {children}
                </div>
            </Modal>
        </div>,
        document.getElementById("modal")
    );
};

export default ModalBox;
