import { ErrorMessage, Field, Form, Formik } from "formik";
import { newTicket } from "../../validations/ticketValidations";
import { useAddNewTicketMutation } from "../../api";
import { errorMessage, successMessage } from "../../helpers";

const TicketForm = () => {
    const [addNewTicket] = useAddNewTicketMutation();

    const initialValues = {
        title: "",
        description: "",
    };

    const handleSubmit = async (values) => {
        try {
            let formData = {
                title: values.title,
                description: values.description,
            };

            let response = await addNewTicket(formData);
            if (response?.data?.code === 201) {
                successMessage(response?.data?.message);
            } else if (response?.error?.status === 422) {
                response?.error?.data.map((err) => errorMessage(err.message));
            } else if (response?.error?.status === 400) {
                errorMessage(response?.error?.data.message);
            } else {
                errorMessage("خطای ناشناخته ای رخ داده است");
            }
        } catch (error) {
            errorMessage(error.message);
        }
    };

    return (
        <div className="p-4 mt-1">
            <h1 className="font-bold text-sm text-center">تیکت جدید</h1>
            <div className="border-t border-dashed border-gray-400 my-4"></div>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                enableReinitialize={true}
                validationSchema={newTicket}
            >
                <Form className="flex flex-col gap-4 text-sm">
                    <div className="w-full">
                        <label htmlFor="title">عنوان درخواست:</label>
                        <Field
                            id="title"
                            name="title"
                            type="text"
                            className="h-10 mt-2 px-4 rounded-md shadow-md focus:outline-1 focus:outline-blue-600 w-full"
                        />
                        <ErrorMessage
                            name="title"
                            render={(msg) => (
                                <div className="text-red-500 text-xs mt-2">
                                    {msg}
                                </div>
                            )}
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="description">شرح درخواست:</label>
                        <Field
                            as="textarea"
                            name="description"
                            id="description"
                            className="resize-none min-h-60 mt-2 px-4 py-2 rounded-md shadow-md focus:outline-1 focus:outline-blue-600 w-full"
                        />
                        <ErrorMessage
                            name="description"
                            render={(msg) => (
                                <div className="text-red-500 text-xs mt-2">
                                    {msg}
                                </div>
                            )}
                        />
                    </div>
                    <button className="bg-customPurpleTree mt-2 text-white hover:bg-customPurpleTwo h-10 rounded-md transition-all duration-500">
                        ارسال
                    </button>
                </Form>
            </Formik>
        </div>
    );
};

export default TicketForm;
