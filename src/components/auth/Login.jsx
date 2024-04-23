"use client"
import React, { useEffect } from 'react';
import Input from '@/ui/Input';
import { Box, Typography } from '@mui/material';
import Button from '@/ui/Button';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validatorLoginSchema } from '@/utils/validatorsSchema';
import InputValidator from '@/ui/InputValidator';
import { LoginFetch } from '@/store/auth/auth';
import { useDispatch, useSelector } from 'react-redux';
import {toast} from 'react-toastify';
import {useRouter} from 'next/navigation';

const Login = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const {login_status , login_message , role} = useSelector(state => state.auth)

    const handleSubmit = ( values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
        const sendObj = {
            login:values.login, 
            password:values.password
        }
            
        dispatch(LoginFetch(sendObj))
            .then(res => {
                // const role = res?.payload?.role
                // console.log("role=",role);
                // if(role) {
                //     if(role === "ADMIN"){
                //         router.push("/admin")
                //     }
                // }
            })
            .catch(err => {
                console.log(err)
            })
    }
    //todo доделать notification
    // useEffect(() => {
    //     console.log("login_status =",login_status)

    //     if(login_status === "success"){
    //         toast.success("Авторизация прошла успешно")
    //     }
    //     if(login_status === "rejected"){
    //         toast.error(login_message?.message)
    //     }
    // },[login_status])

    // useEffect(() => {
    //     if(role === "ADMIN"){
    //         console.log(role, "succes logins")
    //         router.push("/admin")
    //     }
    //     if(role === "manager"){
    //         console.log(role, "succes logins")
    //         router.push("/manager")
    //     }
    //     if(role === "director"){
    //         console.log(role, "succes logins")
    //         router.push("/director")
    //     }
    //     if(role === "tehnolog"){
    //         console.log(role, "succes logins")
    //         router.push("/tehnolog")
    //     }
    //     if(role === "cutter"){
    //         console.log(role, "succes logins")
    //         router.push("/cutter")
    //     }
    //     if(role === "dressmaker"){
    //         console.log(role, "succes logins")
    //         router.push("/dressmaker")
    //     }
    //     if(role === "ironer"){
    //         console.log(role, "succes logins")
    //         router.push("/ironer")
    //     }
    // },[role])

    return (
        <Formik
            initialValues={{ login: '', password: '' }}
            validationSchema={validatorLoginSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form style={{ display: "flex", flexDirection: "column", gap: "15px"  , justifyContent: "start", alignItems: "start"}}>
                    <Typography sx={{ textAlign: "center"  , fontWeight:"700"}} variant="h7">Добро пожаловать в Рай Автоматизации</Typography>
                    <InputValidator width="300px" type="text" name="login" label="Логин" />
                    <InputValidator width="300px" type="password" name="password" label="Пароль" />
                    <Box sx={{ display: "flex", justifyContent: "end" }}>
                        <Button width="120px" type="submit" disabled={isSubmitting}>Войти</Button>
                    </Box>
                </Form>
            )}
        </Formik>
    );
};

export default Login;