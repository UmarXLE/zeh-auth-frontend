import BreadCrums from '@/ui/BreadCrumbs';
import { Box } from '@mui/system';
import React from 'react';
import Title from '@/ui/Title';
import Button from '@/ui/Button';
import CreateClient from '@/components/admin/users/CreateClient';

const UsersPage = () => {
    return (
        <Box>
            <BreadCrums links={[{ label: "Задачи", url: -1 }, { label: "Создание задачи", url: "" },]}/>
            
            <Box sx={{display:"flex", justifyContent:"space-between" , alignItems:"center"}}>
                <Title text="Пользователи"/>
                <Box sx={{display:"flex" , gap:"10px" , alignItems:"center"}}>
                    <CreateClient/>
                </Box>
            </Box>
        </Box>
    );
};

export default UsersPage;