import * as Yup from "yup";

export const formValidationSchema = Yup.object({
    name: Yup.string().min(4, "Must be 4 characters or more").required("The field is required."),
    number: Yup.string()
        .matches(/^[0-9]{13}$/, "Phone number must be exactly 10 digits")
        .required("Phone number is required"),
    email: Yup.string().email("Invalid email address").required("The field is required."),
});
