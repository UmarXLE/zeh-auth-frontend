import BreadCrums from '@/ui/BreadCrumbs';
import { Box } from '@mui/system';
import React from 'react';
import Title from '@/ui/Title';
import Button from '@/ui/Button';
import CreateClient from '@/components/admin/users/CreateClient';
import UsersTable from '@/components/tables/admin/users/UsersTable';

const UsersPage = async ({data}) => {
    console.log("data users admni=",data);
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <BreadCrums links={[{ label: "Пользователи", url: -1 }]}/>
            <Box sx={{display: "flex",justifyContent: "space-between", alignItems: "center"}}>
                <Title text="Пользователи"/>
                <Box sx={{display:"flex"  , alignItems:"center"}}>
                    <CreateClient/>
                </Box> 
            </Box>
            <UsersTable height="70vh"/>
        </Box>
    );
};

export async function getData() {
    const res = await fetch("http://localhost:5003/roles")
    const data = await res.json()

    return {
        props:{
            data
        }
    }
}

export default UsersPage;


// const fetchUsers = async () => {
//     const responses = await fetch("http://localhost:5003/roles" , {
//         cache: "force-cache",
//         next: {revalidate: 3600},
//         method: "GET",
//     })
//     const data = await responses.json()
//     return data
// }