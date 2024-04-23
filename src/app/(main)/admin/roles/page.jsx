import { Box } from '@mui/material';
import React  from 'react';
import Title from '@/ui/Title';
import CreateRolesClient from '@/components/admin/roles/CreateRolesClient';
import BreadCrums from '@/ui/BreadCrumbs';
const RolesPage = () => {
    
    return (
        <Box>
            <BreadCrums links={[{ label: "Роли", url: -1 }]}/>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Title text="Роли"/>
                <CreateRolesClient />
            </Box>
        </Box>
    );
};

export default RolesPage;