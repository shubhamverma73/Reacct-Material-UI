import React, {useState} from 'react';
import {Switch} from '@material-ui/core';

const UISwitch = () => {

    const [library, setLibrary] = useState(true);
    const handleChange = (event) => {
        setLibrary(event.target.checked);
    };
    console.log(library);

	return (
		<>
            <div style={{width: "300px", paddingTop: "20px"}}>
                <Switch defaultChecked onChange={handleChange} />
                <Switch color="primary" />
                <Switch disabled defaultChecked />
                <Switch disabled />
            </div>
        </>
	)
};

export default UISwitch;