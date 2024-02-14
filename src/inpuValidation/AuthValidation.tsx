import * as yup from 'yup';



export const signinValidation = () => {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    return yup.object().shape({
        userName: yup.string().required('required'),
        password: yup.string().required('Required'),



    });
}