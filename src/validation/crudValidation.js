// validationSchema.js
import * as Yup from 'yup';

export const crudValidation = Yup.object().shape({
    institution: Yup.string()
        .min(3, "Institution name must be at least 3 characters")
        .max(100, "Institution name must be at most 100 characters")
        .required("Please enter Institution name"),

    status: Yup.string()
        .required("Please enter status"),

    joiningDate: Yup.date()
        .required("Please enter joining date"),

    endDate: Yup.date()
        .required("Please enter end date"),

    degree: Yup.string()
        .min(3, "Degree must be at least 3 characters")
        .max(25, "Degree must be at most 25 characters")
        .required("Please enter degree"),

    currentSemester: Yup.string()
        .required("Please enter current semester"),

    grade: Yup.string()
        .min(1, "Degree must be at least 3 characters")
        .max(25, "Degree must be at most 25 characters")
        // .matches(/^\d+(\.\d{1,2})?$/, "Enter a valid grade") // Match percentage or GPA (e.g., 80 or 3.5)
        .required("Please enter grade"),

    mainSubject: Yup.string()
        .required("Please enter main subject"),
});