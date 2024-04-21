import Image from "next/image";
import styles from "./page.module.css";
import { Box, Typography } from "@mui/material";
import Login from "@/components/auth/Login";
import LoginImage from "../assets/images/login-bg.jpeg";

export default function Home() {
  return (
      <Box sx={{display: "grid" , gridTemplateColumns: "1fr 1fr" , width: "100%" , height: "100vh"}}>
        <Box sx={{ backgroundPosition: "center", backgroundRepeat: "no-repeat",backgroundImage: `url(${LoginImage.src})`,backgroundSize: "cover", width:"100%",height: "100%" , display: "flex", justifyContent: "center", alignItems: "center" , backgroundColor: "black" , color: "white"}}>
          {/* <Typography sx={{fontSize: "80px" , fontWeight: "bold"}} variant="h1">Zeh</Typography> */}
        </Box>
        <Box sx={{width:"50%" ,margin:"0 auto",height: "100%" , display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Login/>
        </Box>
      </Box>
  );
}
