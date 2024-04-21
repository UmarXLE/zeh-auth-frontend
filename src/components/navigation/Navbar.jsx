"use client";
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { roles } from "../../utils/variables";

const Navbar = () => {

    const role = "admin"

    const prefixLinks = (links, prefix) => {
        return links?.map((item) => ({
            ...item,
            link: prefix + item.link
        }));
    };

    const userLinks = prefixLinks(roles[role], '/' + role);

    return (
        <Box sx={{ width: "300px", borderRight: "4px solid #495ba4", position: "fixed", height: "100vh", display: "flex", alignItems: "center", flexDirection: "column", padding: "20px 0" }}>
            <Box sx={{ width: "90%", margin: "0 auto", backgroundColor: "#495ba4", borderRadius: "10px", padding: "20px", textAlign: "center" }}>
                <Typography sx={{ color: "white", fontWeight: "bold", textTransform: "uppercase", whiteSpace: "nowrap" }}>Zeh Auto</Typography>
            </Box>

            <Box sx={{ padding: "20px", width: "100%", display: "flex", flexDirection: "column", gap: "15px", justifyContent: "start" }}>
                {userLinks?.map((item) => (
                    <Link style={{ textDecoration: "none", color: "white", backgroundColor: "#495ba4", borderRadius: "10px", padding: "10px" }} href={item.link} key={item.title}>{item.title}</Link>
                ))}
            </Box>
        </Box>
    );
};

export default Navbar;
