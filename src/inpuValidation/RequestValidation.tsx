import * as yup from 'yup';

export const addNewRequestValidation = () => {
    return yup.object().shape({
        title: yup.string().required('required'),
        description: yup.string().required('Required'),
        //status: yup.string().required('Required'),
    });
}
