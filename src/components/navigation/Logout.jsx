"use client"
import { Box  , Typography} from '@mui/material';
import React from 'react';
import Button from "@/ui/Button"
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const Logout = ({close}) => {
    const router = useRouter()

    const handleLogout = () => {
        Cookies.remove('role')
        router.push("/")
        close()
    }

    return (
        <Box sx={{display:"flex" , flexDirection:"column", gap:"15px" }}>
            <Typography>Вы точно хотите выйти ?</Typography>
            <Box sx={{display:"flex" , gap:"10px" , borderRadius:"10px", border:"1px solid #495ba4", padding:"10px" , alignItems:"center" , justifyContent:"space-between"}}>
                <Button onClick={handleLogout}>Да</Button>
                <Button onClick={close}>Нет</Button>
            </Box>
        </Box>
    );
};

export default Logout;