import React from 'react';
import {Box} from '@material-ui/core';

const UIBox = () => {
    
	return (
		<>
            <div style={{width: "300px", paddingTop: "20px"}}>
            <Box component="div"
                sx={{
                    width: 300,
                    height: 300,
                    bgcolor: 'primary.dark',
                }}
                />
            </div>
        </>
	)
};

export default UIBox;