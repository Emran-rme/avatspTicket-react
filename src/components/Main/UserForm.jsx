import { ErrorMessage, Field, Form, Formik } from "formik";

import { errorMessage, successMessage } from "../../helpers";
import { useAddNewUserMutation } from "../../api";
import { newUser } from "../../validations/userValidations";

const UserForm = () => {
    const [addNewUser] = useAddNewUserMutation();

    const initialValues = {
        fullName: "",
        email: "",
        password: "",
        confirm_password: "",
    };

    const handleSubmit = async (values) => {
        try {
            let formData = {
                fullName: values.fullName,
                email: values.email,
                password: values.password,
                confirm_password: values.confirm_password,
            };

            let response = await addNewUser(formData);
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
            <h1 className="font-bold text-sm text-center">ساخت کاربر جدید</h1>
            <div className="border-t border-dashed border-gray-400 my-4"></div>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                enableReinitialize={true}
                validationSchema={newUser}
            >
                <Form className="flex flex-col gap-4 text-sm">
                    <div className="w-full">
                        <label htmlFor="fullName">نام و نام خانوادگی:</label>
                        <Field
                            id="fullName"
                            name="fullName"
                            type="text"
                            className="h-10 mt-2 px-4 rounded-md shadow-md focus:outline-1 focus:outline-blue-600 w-full"
                        />
                        <ErrorMessage
                            name="fullName"
                            render={(msg) => (
                                <div className="text-red-500 text-xs mt-2">
                                    {msg}
                                </div>
                            )}
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="email">ایمیل:</label>
                        <Field
                            id="email"
                            name="email"
                            type="text"
                            className="h-10 mt-2 px-4 rounded-md shadow-md focus:outline-1 focus:outline-blue-600 w-full"
                        />
                        <ErrorMessage
                            name="email"
                            render={(msg) => (
                                <div className="text-red-500 text-xs mt-2">
                                    {msg}
                                </div>
                            )}
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="password">رمز عبور:</label>
                        <Field
                            id="password"
                            name="password"
                            type="password"
                            className="h-10 mt-2 px-4 rounded-md shadow-md focus:outline-1 focus:outline-blue-600 w-full"
                        />
                        <ErrorMessage
                            name="password"
                            render={(msg) => (
                                <div className="text-red-500 text-xs mt-2">
                                    {msg}
                                </div>
                            )}
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="confirm_password">
                            تکرار رمز عبور:
                        </label>
                        <Field
                            id="confirm_password"
                            name="confirm_password"
                            type="password"
                            className="h-10 mt-2 px-4 rounded-md shadow-md focus:outline-1 focus:outline-blue-600 w-full"
                        />
                        <ErrorMessage
                            name="confirm_password"
                            render={(msg) => (
                                <div className="text-red-500 text-xs mt-2">
                                    {msg}
                                </div>
                            )}
                        />
                    </div>

                    <button className="bg-customPurpleTree mt-2 text-white hover:bg-customPurpleTwo h-10 rounded-md transition-all duration-500">
                        ایجاد
                    </button>
                </Form>
            </Formik>
        </div>
    );
};

export default UserForm;
