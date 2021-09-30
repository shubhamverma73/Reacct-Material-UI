import React from 'react';
import {Checkbox} from '@material-ui/core';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const UICheckbox = () => {
	return (
		<>
            <div style={{width: "300px", paddingTop: "20px"}}>
                <Checkbox defaultChecked size="medium" />
                <Checkbox defaultChecked size="medium" color="secondary" />
                <Checkbox defaultChecked {...label} size="medium" color="primary" />
                <Checkbox defaultChecked size="medium" color="default" />
                <Checkbox color="primary" icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            </div>
        </>
	)
};

export default UICheckbox;