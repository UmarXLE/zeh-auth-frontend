"use client"
import Button from '@/ui/Button';
import { Box } from '@mui/system';
import React , {useState , useEffect} from 'react';
import ModalWindow from '@/ui/ModalWindow';
import {useDispatch, useSelector} from 'react-redux';
import {Formik , Form} from 'formik';
import InputValidator from '@/ui/InputValidator';
import { validatorZehsCreateShema } from '@/utils/validatorsSchema';
import { createZehs } from '@/store/admin/adminSlice';

const CreateZehsClient = () => {
    const dispatch = useDispatch()
    const {create_zehs_status} = useSelector(state => state.admin)
    const [modal , setModal] = useState(false)

    const handleOpenModal = () => setModal(true)
    const handleCloseModal = () => setModal(false)

    const handleSubmit = (values , {setSubmitting}) => {
        console.log("zehs obj send=",values);
        setSubmitting(false)
        dispatch(createZehs(values))
    }

    useEffect(() => {
        if(create_zehs_status === "success") {
            handleCloseModal()
        }
        if(create_zehs_status === "rejected") {
            console.log("error");
        }
    },[create_zehs_status])

    return (
        <Box>
           <Button onClick={handleOpenModal}>Создать цех</Button> 
            <ModalWindow open={modal} handleClose={handleCloseModal} width="1000px">
                <Formik 
                    initialValues={{
                        login:"",
                        id:""
                    }}
                    validationSchema={validatorZehsCreateShema}
                    onSubmit={handleSubmit}
                >
                    {({isSubmitting}) => (
                        <Form style={{display:"flex" , flexDirection:"column" , gap:"10px" , width:"300px"}}>
                            <InputValidator label="Логин цеха" name="login" type="text" />
                            <InputValidator label="Id цеха" name="id" type="number"/>
                            <Button disabled={isSubmitting} type="submit">Создать</Button>
                        </Form>
                    )}
                </Formik>
            </ModalWindow>
        </Box>
    );
};

export default CreateZehsClient;