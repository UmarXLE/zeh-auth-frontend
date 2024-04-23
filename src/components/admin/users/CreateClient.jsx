"use client"
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Button from '@/ui/Button';
import ModalWindow from '@/ui/ModalWindow';
import { useDispatch, useSelector } from 'react-redux';
import { Formik , Form } from 'formik';
import InputValidator from '@/ui/InputValidator';
import { validatorUserCreateShema } from '@/utils/validatorsSchema';
import {createUser , getRolesList , getZehsList , clearStatus}  from '@/store/admin/adminSlice';
import Select from '@/ui/Select';
import {translaterRoles} from '@/utils/translater';

const CreateClient = () => {
    const dispatch = useDispatch()
    const {create_user_status , roles , zehs_list} = useSelector(state => state.admin)

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
        dispatch(clearStatus())
    },[create_user_status])

    useEffect(() => {
        console.log("working useEffect fetch");
        dispatch(getRolesList())
        dispatch(getZehsList())
    },[])

    const rolesArray = roles?.map((item) => ({value:item.name , title:translaterRoles(item.name) , id:item._id}))
    const zehsArray = zehs_list?.map((item) => ({value:item.id , title:item.login , id:item._id}))
    console.log("roles",rolesArray);
    console.log("zehs ",zehs_list);

    return (
        <Box sx={{display:"flex" , gap:"10px" , alignItems:"center"}}>
            <Button onClick={handleOpenModal} text="Создать">Создать</Button>
            <ModalWindow open={modal} handleClose={handleCloseModal} width="1000px">
                <Formik
                    initialValues={{
                        login:"",
                        password:"",
                        name:"",
                        role:"",
                        zeh:""
                    }}
                    onSubmit={handleSubmit}
                    validationSchema={validatorUserCreateShema}
                >
                    {({isSubmitting}) => (
                        <Form style={{display:"flex" , flexDirection:"column" , gap:"10px" , width:"300px"}}>
                            <InputValidator label="Логин" name="login" type="text" />
                            <InputValidator label="Пароль" name="password" type="password" />
                            <InputValidator label="Имя" name="name" type="text" />
                            <Select label="Роль" name="role" options={rolesArray} />
                            <Select label="Цех" name="zeh" options={zehsArray} />
                            <Button disabled={isSubmitting} type="submit">Создать</Button>
                        </Form>
                    )}
                </Formik>
            </ModalWindow>
        </Box>
    );
};

export default CreateClient;