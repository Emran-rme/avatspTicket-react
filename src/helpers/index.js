import { toast } from "react-toastify";

export const errorMessage = (message) => {
    return toast.error(message, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
};
export const successMessage = (message) => {
    return toast.success(message, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
};

export const userValidation = (formData) => {
    if (!formData.fullName.trim()) {
        throw new Error("نام و نام خانوادگی نمی‌تواند خالی باشد");
    }
    if (!formData.email.trim()) {
        throw new Error("ایمیل نمی‌تواند خالی باشد");
    }
    if (!formData.password.trim()) {
        throw new Error("رمز عبور نمی‌تواند خالی باشد");
    }
    if (!formData.confirm_password.trim()) {
        throw new Error("تکرار رمز عبور نمی‌تواند خالی باشد");
    }
    if (formData.password !== formData.confirm_password) {
        throw new Error("رمز عبور و تکرار آن باید یکسان باشند");
    }
    return true;
};
