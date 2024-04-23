"use client";
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import React , {useEffect , useState} from 'react';
import { roles } from "../../utils/variables";
import styled from '@emotion/styled';
import { usePathname } from 'next/navigation';
import Cookies from 'js-cookie';


const Navbar = () => {
    const pathname = usePathname()
    const [role , setRole] = useState("")
    console.log("role in navbar",role);

    const prefixLinks = (links, prefix) => {
        return links?.map((item) => ({
            ...item,
            link: prefix + item.link
        }));
    };
    
    useEffect(() => {
        const role = Cookies.get('role')
        setRole(role)
    },[])

    const userLinks = prefixLinks(roles[role], '/' + role);

    return (
        <Box sx={{ width: "300px", borderRight: "4px solid #495ba4", position: "fixed", height: "100vh", display: "flex", alignItems: "center", flexDirection: "column", padding: "20px 0" }}>
            <Box sx={{ width: "90%", margin: "0 auto", backgroundColor: "#495ba4", borderRadius: "10px", padding: "20px", textAlign: "center" }}>
                <Typography sx={{ color: "white", fontWeight: "bold", textTransform: "uppercase", whiteSpace: "nowrap" }}>Zeh Auto</Typography>
            </Box>

            <Box sx={{ padding: "20px", width: "100%", display: "flex", flexDirection: "column", gap: "15px", justifyContent: "start" }}>
                {userLinks?.map((item) => (
                    <Link className={pathname === item?.link ? "active" : ""} style={{ textDecoration: "none", color: pathname === item?.link ? "#495ba4" : "white", backgroundColor: pathname === item?.link ? "transparent" : "#495ba4", borderRadius: "10px", padding: "10px" , border: pathname === item?.link ? "2px solid #495ba4" : "2px solid white" }} href={item.link} key={item.title}>{item.title}</Link>
                ))}
            </Box>
        </Box>
    );
};

export default Navbar;

