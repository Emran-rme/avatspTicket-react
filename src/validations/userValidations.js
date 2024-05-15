import * as Yup from "yup";

export const newUser = Yup.object().shape({
    fullName: Yup.string()
        .required("نام و نام خانوادگی الزامی است")
        .min(5, "نام و نام خانوادگی حداقل باید 5 کارکتر باشد"),
    email: Yup.string()
        .required("آدرس ایمیل الزامی است")
        .email("فرمت ایمیل صحیح نمی باشد"),
    password: Yup.string()
        .required("رمز عبور الزامی است")
        .min(8, "رمز عبور حداقل باید 8 کارکتر باشد"),
    confirm_password: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "رمز عبور با هم مطابقت ندارد"
    ),
});

export const checkUser = Yup.object().shape({
    email: Yup.string()
        .required("آدرس ایمیل الزامی است")
        .email("فرمت ایمیل صحیح نمی باشد"),
});
