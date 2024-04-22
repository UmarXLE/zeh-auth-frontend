import StatisticDiagrams from '@/components/director/StatisticDiagrams';
import CircleChart from '@/ui/CircleChart';
import { Box } from '@mui/material';
import React from 'react';

const StatisticPage = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" , gap:"15px"}}>
            <StatisticDiagrams width={1100} height={500}/>
            {/* <Box >
                <CircleChart width={200} height={200} />
                <CircleChart width={200} height={200}/>
            </Box> */}
        </Box>
    );
};

export default StatisticPage;