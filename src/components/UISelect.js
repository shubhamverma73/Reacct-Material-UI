import React, {useState} from 'react';
import {Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';

const UISelect = () => {

    const [library, setLibrary] = useState('React');
    const handleChange = (event) => {
        setLibrary(event.target.value);
        console.log(library);
    };

	return (
		<>
            <div style={{width: "100px", paddingTop: "20px"}}>
                <FormControl fullWidth>
                    <InputLabel>Library</InputLabel>
                    <Select value={library} required label="Library" onChange={handleChange} >
                        <MenuItem value={"React"}>React</MenuItem>
                        <MenuItem value={"Node"}>Node</MenuItem>
                        <MenuItem value={"Jquery"}>Jquery</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </>
	)
};

export default UISelect;