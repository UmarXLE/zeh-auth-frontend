import Navbar from "@/components/navigation/Navbar";
import ProviderStore from "@/store/ProviderStore";
import PopupProfile from "@/ui/PopupProfile";
import { Box } from "@mui/material";
import { Montserrat } from "next/font/google";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
    title: "User Layout",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <ProviderStore>
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 4fr", width: "100%", height: "100vh" }}>
                <Box>
                    <Navbar />
                </Box>
                <Box sx={{ padding: "30px" }}>
                    {children}
                    <PopupProfile />
                </Box>
            </Box>
        </ProviderStore>
    );
}


