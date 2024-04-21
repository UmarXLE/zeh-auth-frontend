import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Skeleton, TableCell, TableRow, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

export default function CircularIndeterminate() {
    return (
        <Box sx={{ position: "absolute", display: 'flex', height: "100vh", width: "100%", justifyContent: "center", alignItems: "center" }}>
            <CircularProgress />
        </Box>
    );
}

// export const NotFoundPage = ({ to }) => {
//     const navigate = useNavigate()
//     return <Box sx={{ display: "flex", height: "100vh", alignItems: "center", justifyContent: "center" }}>
//         <Box sx={{ textAlign: "center" }}>
//             <h1>404</h1>
//             <p>Страница не найдена!</p>
//             <Typography onClick={() => navigate(to)} sx={{
//                 color: "#1026EE", textDecoration: "underline", cursor: "pointer", ":hover": { color: "#000d7a" }
//             }}>На главный</Typography>
//         </Box>
//     </Box>
// }


export const PendingTable = ({ rowsNumber, quantity }) => {
    return [...Array(rowsNumber)].map((i, indexRow) => (
        <TableRow key={indexRow + "row"} >
            {[...Array(quantity)].map((i, index) => (
                <TableCell key={index + "th"} component="th">
                    <Skeleton variant="text" animation="wave" />
                </TableCell>
            ))}
        </TableRow>
    ))
}

export const ActivevateCell = ({ active }) => {
    return <TableCell sx={{ borderBottom: "1px solid #E2E8F0", padding: "4px 16px" }}>
        <Box component="span" sx={{
            borderRadius: "20px", padding: "6px 14px", background: active ? "#D1FAE580" : "#FFE4E680", color: active ? "#059691" : "#E11D48"
        }}>{active ? "Актив" : "Неактив"}
        </Box>
    </TableCell>
}

export const pendingUserListParticipants = (quantity) => {
    return (
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "5px" }}>
            {[...Array(quantity)].map((i, ind) => (<Skeleton key={ind + "userL"} variant='rectangular' sx={{ height: "35px" }} />))}
        </Box>
    )
}

