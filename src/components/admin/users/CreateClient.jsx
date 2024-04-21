"use client"
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Button from '@/ui/Button';
import ModalWindow from '@/ui/ModalWindow';
import { useDispatch, useSelector } from 'react-redux';
import { Formik , Form } from 'formik';
import InputValidator from '@/ui/InputValidator';
import { validatorUserCreateShema } from '@/utils/validatorsSchema';
import {createUser} from '@/store/admin/adminSlice';

const CreateClient = () => {
    const dispatch = useDispatch()
    const {create_user_status} = useSelector(state => state.admin)

    const [modal , setModal] = useState(false)

    const handleOpenModal = () => setModal(true)
    const handleCloseModal = () => setModal(false)

    const handleSubmit = (values , {setSubmitting}) => {
        console.log("values =" ,values);
        dispatch(createUser(values))
        setSubmitting(false)
    }

    useEffect(() => {
        if(create_user_status === "success") {
            handleCloseModal()
            alert("Пользователь успешно создано")
        }
        if(create_user_status === "rejected") {
            console.log("error");
            alert("Произошла ошибка при создании пользователя")
        }
    },[create_user_status])

    return (
        <Box sx={{display:"flex" , gap:"10px" , alignItems:"center"}}>
            <Button onClick={handleOpenModal} text="Создать">Создать</Button>
            <ModalWindow open={modal} handleClose={handleCloseModal} width="1000px">
                <Formik
                    initialValues={{
                        login:"",
                        password:"",
                        name:"",
                        role:""
                    }}
                    onSubmit={handleSubmit}
                    validationSchema={validatorUserCreateShema}
                >
                    {({isSubmitting}) => (
                        <Form style={{display:"flex" , flexDirection:"column" , gap:"10px" , width:"300px"}}>
                            <InputValidator label="Логин" name="login" type="text" />
                            <InputValidator label="Пароль" name="password" type="password" />
                            <InputValidator label="Имя" name="name" type="text" />
                            <InputValidator label="Роль" name="role" type="text" />
                            <Button disabled={isSubmitting} type="submit">Создать</Button>
                        </Form>
                    )}
                </Formik>
            </ModalWindow>
        </Box>
    );
};

export default CreateClient;