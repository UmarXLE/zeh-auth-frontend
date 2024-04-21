"use client"
import React from 'react'
import { LoadingButton } from '@mui/lab'
import styled from '@emotion/styled'

const Button = ({ variant = "greenButton", active, disabled, sx, loading, children, width, onClick, icon, ...props }) => {
    const VARIANTS = {
        greenButton: {
            padding: "5px 15px",
            background: "#495ba4",
            color: "white",
            fontSize: "14px",
            textTransform: 'capitalize',
            border: "1px solid #495ba4",
            borderRadius: "15px",
            ":hover": {
                transition: "0.5s all ease",
                color: "#495ba4",
                background: "white",
                border: "1px solid #495ba4",
            },
            ":disabled": {
                background: "#dadada",
                color: "gray"
            }
        },
        redButton: {
            padding: "5px 15px",
            background: "rgba(235, 86, 86, 1)",
            color: "white",
            fontSize: "14px",
            textTransform: 'capitalize',
            border: "1px solid rgba(235, 86, 86, 1)",
            borderRadius: "5px",
            ":hover": {
                transition: "0.5s all ease",
                color: "rgba(235, 86, 86, 1)",
                background: "white",
                border: "1px solid rgba(235, 86, 86, 1)",
            }
        },
        whiteGreyButton: {
            padding: "5px 15px",
            background: "white",
            color: "rgba(100, 116, 139, 1)",
            fontSize: "14px",
            textTransform: 'capitalize',
            border: "1px solid rgba(208, 213, 221, 1)",
            borderRadius: "5px"
        },
        whiteButton: {
            padding: "5px 15px",
            background: "white",
            color: "#24A758",
            fontSize: "14px",
            textTransform: 'capitalize',
            border: "1px solid #24A758",
            borderRadius: "5px",
            ":hover": {
                transition: "0.5s all ease",
                background: "#24A758",
                border: "1px solid #24A758",
                color: "white",
            }
        },
        filterButton: {
            padding: "3px 12px",
            color: active ? "white" : "#4D515A",
            background: active ? "#24A758" : "white",
            fontSize: "14px",
            fontWeight: "500",
            borderRadius: "30px",
            border: active ? "1px solid #24A758" : "1px solid #E2E8F0",
            textTransform: 'capitalize',
            ":hover": {
                transition: "0.5s all ease",
                border: "1px solid #24A758",
                background: "#24A758",
                color: "white",
            }
        },
        filterButtonContained: {
            padding: "3px 12px",
            color: "#fff",
            background: "#24A758",
            fontSize: "14px",
            borderRadius: "30px",
            border: "1px solid #24A758",
            textTransform: 'capitalize',
            ":hover": {
                transition: "0.5s all ease",
                border: "1px solid #009f40",
                background: "#009f40",
                color: "white",
            },
            ":disabled": {
                background: "#dadada",
                color: "gray"
            }
        },
        dangerContained: {
            padding: "4px 8px",
            color: "#fff",
            background: "#EB5656",
            fontSize: "14px",
            borderRadius: "9px",
            border: "1px solid #EB5656",
            textTransform: 'capitalize',
            ":hover": {
                transition: "0.5s all ease",
                border: "1px solid #ec3131",
                background: "#ec3131",
                color: "white",
            }
        },
    }

    return (
        <StyledButton loading={loading} disabled={disabled} width={width} {...props} styles={VARIANTS[variant]} onClick={onClick}>
            {icon ? icon : ''} {children}
        </StyledButton>
    )
}

export default Button

const StyledButton = styled(LoadingButton)`
    width: ${props => props.width ? props.width : ""};
    ${({ styles }) => ({ ...styles })};
    text-transform: 'capitalize';
    white-space: nowrap;
    &:disabled {
        border: 1px solid #c0c0c0;
    } ;
    :active {
     transform: translateY(2px)
    }
    
`