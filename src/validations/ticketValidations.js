import * as Yup from "yup";

export const newTicket = Yup.object().shape({
    title: Yup.string()
        .required("عنوان درخواست الزامی است")
        .min(3, "عنوان درخواست حداقل باید 3 کارکتر باشد"),
    description: Yup.string()
        .required("شرح درخواست الزامی است")
        .min(10, "شرح درخواست حداقل باید 10 کارکتر باشد"),
});
