import React, { createRef, useEffect, useMemo, useRef, useState } from "react";
import { Text, View } from "react-native";
import Modal from "react-native-modal";
import { Formik } from "formik";
import { addNewTaskValidation } from "../../../../inpuValidation/TaskValidation";
import AppButton from "../../../../common/AppButton";
import AppView from "../../../../common/AppView";
import AppInput from "../../../../common/AppInput";
import { moderateScale } from "../../../../utils/ResponsiveDimentions";
import { useDispatch } from "react-redux";
import { addNewTask } from "../../../../redux/features/tasks/tasksSlice";
import AppText from "../../../../common/AppText";
import FontsSizes from "../../../../utils/FontsSizes";


type props = {
    open: boolean,
    message?: string,
    closeModal: any,
    callback: any,
}


const AddNewTaskModal = ({ open, closeModal, message, callback }: props) => {
    const firstInputRef = createRef()
    const formikRef = useRef(null)
    const dispatch = useDispatch()
    const [isModalVisible, setModalVisible] = useState(true);
    useEffect(() => {
        firstInputRef.current?.focus()  //// to set first input focused by default

    }, [open])



    return (
        <View style={{ flex: 1, position: 'absolute' }}>

            <Modal isVisible={open}
                animationIn={'zoomIn'}
                animationOut={'zoomOut'}
                hasBackdrop
                onBackdropPress={closeModal} >
                <Formik
                    innerRef={formikRef}
                    initialValues={{ title: '', description: '' }}
                    validateOnMount={true}
                    onSubmit={values => callback(values)}
                    validationSchema={addNewTaskValidation}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (
                        <AppView style={{ backgroundColor: 'white', padding: moderateScale(10), borderRadius: moderateScale(5) }}>

                            <AppText bold color="black" center size={FontsSizes.font22} style={{ marginBottom: moderateScale(5) }}>New Task</AppText>
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


                            <AppButton primary title="Save" onPress={handleSubmit} />
                        </AppView>
                    )}
                </Formik>
            </Modal>
        </View>
    );
}



export default AddNewTaskModal;