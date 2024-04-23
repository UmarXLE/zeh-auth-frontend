import BreadCrums from '@/ui/BreadCrumbs';
import { Box } from '@mui/system';
import React from 'react';
import Title from '@/ui/Title';
import Button from '@/ui/Button';
import CreateClient from '@/components/admin/users/CreateClient';
import UsersTable from '@/components/tables/admin/users/UsersTable';

const UsersPage = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <BreadCrums links={[{ label: "Пользователи", url: -1 }]}/>
            <Box sx={{display:"flex", justifyContent:"space-between" , alignItems:"center"}}>
                <Title text="Пользователи"/>
                <Box sx={{display:"flex" , gap:"10px" , alignItems:"center"}}>
                    <CreateClient/>
                </Box> 
            </Box>
            <UsersTable height="70vh"/>
        </Box>
    );
};

export default UsersPage;