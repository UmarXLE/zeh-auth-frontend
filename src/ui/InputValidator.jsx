import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Box } from '@mui/material';

const InputValidator = ({ type, name, label, width , maxWidth }) => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "5px" }}>
                <label style={{ fontSize: "12px" }} htmlFor={type}>{label}</label>
                <ErrorMessage name={name} style={{ color: "red" , fontSize:"12px" }} component="div" />
            </Box>
            <Field style={{ maxWidth:maxWidth ,width: width , height: "35px" , padding: "0 10px" , border: "1px solid #495ba4", borderRadius: "10px"}} type={type} name={name} />
        </Box>
    );
};

export default InputValidator;