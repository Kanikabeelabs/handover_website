import * as Yup from 'yup';

export const contactUsSchemaValidation = Yup.object({
    option: Yup.string().required("Option is required"),
    user_name: Yup.string().required("User name is required"),
    email_address: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
    mobile: Yup.string()
        .matches(/^\d{10}$/, "Invalid mobile number")
        .required("Mobile number is required"),
    description: Yup.string().required("Description is required")
});