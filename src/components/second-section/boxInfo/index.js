import { Typography, Box } from '@material-ui/core';
import React from 'react';

function BoxInfo({ img, title, content }) {
    return (
        <Box 
            style={{ 
                height: '291px', 
                borderRadius: '10px', 
                padding: '24px',
                border: '1px solid #053050' 
            }}
        >
            <img src={img}alt='' style={{ marginBottom: '24px' }} />
            <Typography variant='h6' style={{ marginBottom: '24px' }}>
                {title}
            </Typography>
            <Typography variant='button'>
                {content}
            </Typography>
        </Box>
    )
}

export default BoxInfo;