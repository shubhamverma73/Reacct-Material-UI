import React, {useState} from 'react';
import {TextField} from '@material-ui/core';

const UIText = () => {

    const [library, setLibrary] = useState('React');
    const handleChange = (event) => {
        setLibrary(event.target.value);
        console.log(library);
    };

	return (
		<>
            <div style={{width: "300px", paddingTop: "20px"}}>
                <TextField type="password" id="outlined-basic" label="Password" variant="outlined" onChange={handleChange} />
            </div>
        </>
	)
};

export default UIText;