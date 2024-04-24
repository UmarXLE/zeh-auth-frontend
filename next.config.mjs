/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        optimizePackageImports:[
            "@mui/material" ,
            "@mui/icons-material",
            "@mui/lab",
            "@emotion/styled",
            "@mui/x-charts"
        ]
    }
};

export default nextConfig;
