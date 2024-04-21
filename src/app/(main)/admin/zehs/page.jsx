"use server"
import React from 'react';
import BreadCrums from '@/ui/BreadCrumbs';
import { Box } from '@mui/system';
import Title from '@/ui/Title';
import CreateZehsClient from '@/components/admin/zehs/CreateZehsClient';
import ZehsTable from '@/components/tables/admin/zehs/ZehsTable';
import axiosInstance from '@/services/axios';

const ZehsPage = ({ data }) => {
    return (
        <Box>
            <BreadCrums links={[{ label: "Цеха", url: -1 }]}/>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Title text="Цеха"/>
                <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    <CreateZehsClient />
                </Box>
            </Box>
            <ZehsTable data={data}/>
        </Box>
    );
};

// export async function getServerSideProps() {
//     try {
//         const { data } = await axiosInstance.get("zehs");
//         return {
//             props: {
//                 data
//             }
//         };
//     } catch (error) {
//         console.error("Error fetching data:", error);
//         return {
//             props: {
//                 data: []
//             }
//         };
//     }
// }

export default ZehsPage;
