import React, { createRef, useEffect, useMemo, useRef, useState } from "react";
import { View } from "react-native";
import { Formik } from "formik";
import { addNewTaskValidation } from "../../../inpuValidation/TaskValidation";
import AppButton from "../../../common/AppButton";
import AppView from "../../../common/AppView";
import AppInput from "../../../common/AppInput";
import { moderateScale } from "../../../utils/ResponsiveDimentions";
import { useDispatch } from "react-redux";
import { updateTaskStatus } from "../../../redux/features/tasks/tasksSlice";


type props = {
    item?: object
}


const UpdateTaskScreen = ({ item }: props) => {
    const firstInputRef = createRef()
    const formikRef = useRef(null)
    const dispatch = useDispatch()
    const [isModalVisible, setModalVisible] = useState(true);


    useEffect(() => {
        firstInputRef.current?.focus()  //// to set first input focused by default
    }, [])

    /////======== update task
    const updateTaskStatusVoid = () => {
        dispatch(updateTaskStatus({ task: item, newStatus: 'com' }))
    }


    return (
        <AppView style={{ flex: 1, position: 'absolute' }}>


            <Formik
                innerRef={formikRef}
                initialValues={{ title: '', description: '', status: '' }}
                validateOnMount={true}
                onSubmit={values => updateTaskStatusVoid()}
                validationSchema={addNewTaskValidation}
            >
                {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (
                    <AppView style={{ backgroundColor: 'white', padding: moderateScale(10), borderRadius: moderateScale(5) }}>
                        <AppInput
                            ref={firstInputRef}
                            title={'Title'}
                            handleChange={handleChange('title')}
                            handleBlur={handleBlur('title')}
                            errors={errors.title}
                            touched={touched.title}
                            value={values.title} />

                        <AppInput

                            title={'Description'}
                            handleChange={handleChange('description')}
                            handleBlur={handleBlur('description')}
                            errors={errors.description}
                            touched={touched.description}
                            value={values.description} />

                        <AppInput

                            title={'Status'}
                            handleChange={handleChange('status')}
                            handleBlur={handleBlur('status')}
                            errors={errors.status}
                            touched={touched.status}
                            value={values.status} />
                        <AppButton primary title="Update" onPress={handleSubmit} />
                    </AppView>
                )}
            </Formik>

        </AppView>
    );
}



export default UpdateTaskScreen;