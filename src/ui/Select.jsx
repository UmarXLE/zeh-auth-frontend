"use client"
import { Box } from '@mui/material';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Select = ({name , options , width , maxWidth , label  }) => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>                
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "5px" }}>
                <label style={{ fontSize: "12px" }}>{label}</label>
                <ErrorMessage name={name} style={{ color: "red" , fontSize:"12px" }} component="div" />
            </Box>
            <Field as="select" name={name} style={{ maxWidth:maxWidth ,width: width , height: "35px" , padding: "0 10px" , border: "1px solid #495ba4", borderRadius: "10px"}}>
                {
                    options?.map((item) => <option key={item} value={item.value}>{item?.title}</option>)
                }
            </Field>
        </Box>
    );
};

export default Select;