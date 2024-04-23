"use client"
import { Box } from '@mui/material';
import React, { useState , useEffect} from 'react';
import Button from '@/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { validatorRolesSchema } from '@/utils/validatorsSchema';
import InputValidator from '@/ui/InputValidator';
import ModalWindow from '@/ui/ModalWindow';
import { Formik, Form } from 'formik';
import { createRole , clearStatus } from '@/store/admin/adminSlice';

const CreateRolesClient = () => {
    const dispatch = useDispatch()
    const { create_role_status } = useSelector(state => state.admin)

    const [modal, setModal] = useState(false)

    const handleOpenModal = () => setModal(true)
    const handleCloseModal = () => setModal(false)

    const handleSubmit = (values, { setSubmitting }) => {
        console.log("values =", values);
        dispatch(createRole(values))
        setSubmitting(false)
    }

    useEffect(() => {
        if (create_role_status === "success") {
            handleCloseModal()
            alert("Роль успешно создана")
        }
        if(create_role_status === "rejected") {
            console.log("error");
            alert("Произошла ошибка при создании роли") 
        }
        dispatch(clearStatus())
    }, [create_role_status])

    return (
        <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <Button onClick={handleOpenModal}>Создать</Button>
            <ModalWindow open={modal} handleClose={handleCloseModal} width="500px">
                <Formik
                    initialValues={{
                        name: ""
                    }}
                    onSubmit={handleSubmit}
                    validationSchema={validatorRolesSchema}
                >

                    {({ isSubmitting }) => (
                        <Form style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
                            <InputValidator name="name" label="Название роли" type="text" />
                            <Button disabled={isSubmitting} type="submit">Создать</Button>
                        </Form>
                    )}

                </Formik>
            </ModalWindow>
        </Box>
    );
};

export default CreateRolesClient;