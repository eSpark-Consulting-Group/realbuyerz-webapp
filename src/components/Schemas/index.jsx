import * as Yup from 'yup';
export const EditProfileSchema = Yup.object({
    fname: Yup.string().min(2).max(25).required("Enter First Name"),
    lname: Yup.string().min(2).max(25).required("Enter Last Name"),
    email: Yup.string().email().required("Enter email"),
    landline: Yup.number().min(4).required("Enter Landline"),
    whatsapp: Yup.number().min(11).required("Enter Whatsapp"),
    mobile: Yup.number().min(11).required("Enter Mobile"),
    country: Yup.string().min(3).max(25).required("Enter Country"),
    city: Yup.string().min(3).max(25).required("Enter City"),
    address: Yup.string().min(3).max(40).required("Enter Address"),
    address: Yup.string().min(3).max(40).required("Enter Address"),
    bio: Yup.string().min(10),
    oldPassword: Yup.string().min(6).max(8).required("Enter Old Password"),
    newPassword: Yup.string().min(6).max(8).required("Enter New Password"),
    confirmPassword: Yup.string().min(6).max(8).required("Enter New Password").oneOf([Yup.ref("newPassword"), null], "Password must match"),
})