"use client"
import React, { useState } from 'react';
import styled from '@emotion/styled';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box
} from '@mui/material';
import { PendingTable } from '@/utils';

const ZehsTable = ({ data, status , userProvider }) => {

  const thStyle = { borderBottom: "1px solid #E2E8F0", textAlign: "start", padding: "14px 18px", whiteSpace: "nowrap" };
  const tdStyle = { border: "1px solid #E2E8F0", textAlign: "start", padding: "14px 20px", cursor: "pointer", whiteSpace: "nowrap" }

  return (
    <Wrapper>
      <TableContainer sx={{ background: "#fff", display: "flex", justifyContent: "flex-start" }}>
        <Table>
          <TableHead>
            <TableRow sx={{ background: "rgba(248, 250, 252, 1)" }}>
              <TableCell sx={thStyle}>Номер статуса</TableCell>
              <TableCell sx={thStyle}>Название  </TableCell>
              <TableCell sx={thStyle}>Логин </TableCell>
              <TableCell sx={thStyle}>ID </TableCell>
              {/* <TableCell sx={thStyle}>Действие</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {
              status === "pending" ? PendingTable({ rowsNumber: 6, quantity: 4 }) :
                data?.length > 0 && data?.map((row) => {
                  return (
                    <TableRow key={row?.id} hover>
                      <TableCell sx={tdStyle}>{row?.id}</TableCell>
                      <TableCell sx={tdStyle}>{row?.title}</TableCell>
                      <TableCell sx={tdStyle}>{row?.discount} %</TableCell>
                      <TableCell sx={tdStyle} >
                          <Box component="span" sx={{
                              borderRadius: "20px", padding: "6px 14px", background: row?.is_active ? "#D1FAE580" : "#FFE4E680", color: row.is_active ? "#059691" : "#E11D48"
                          }}>{row.is_active ? "Актив" : "Неактив"}
                        </Box>
                      </TableCell>
                      {/* <TableCell sx={tdStyle}><Edit onClick={() => navigate(`${row?.id}/edit`)} /></TableCell> */}
                    </TableRow>
                  );
                })
            }
          </TableBody>
        </Table>
      </TableContainer>
      {data?.length < 1 && status !== "pending" && <p style={{ textAlign: "center", margin: "20px 0", fontSize: "17px", fontWeight: "500" }}>(Ничего не найдено)</p>}
    </Wrapper>
  )
}

export default ZehsTable

const Wrapper = styled("div")`
  background: white;
  padding-bottom: 100px;
  margin-top: 20px;
  border-radius: 10px 10px 0 0;
  
  .title {
    display: flex;
    align-items: center;
    justify-content:space-between;
  }
  
  h2 {
    padding: 29px 0 24px 29px;
    font-weight: 500;
  }
  th svg{
    margin-bottom: -7px;
  }
`
