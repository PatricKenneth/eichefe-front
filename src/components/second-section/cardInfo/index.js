import { Typography } from "@mui/material";
import React from "react";

function CardInfo({ img, title, content }) {
    return (
        <div 
            style={{ 
                height: "316px", 
                borderRadius: "10px", 
                padding: "24px",
                border: "1px solid #053050" 
            }}
        >
            <img src={img} alt="" style={{ marginBottom: "24px" }} />
            <Typography variant="h5" marginBottom="24px" color="#F7F7F7">
                {title}
            </Typography>
            <Typography variant="h6">
                {content}
            </Typography>
        </div>
    )
}

export default CardInfo;