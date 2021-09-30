import React from 'react';
import Button from '@material-ui/core/Button';

const UIButton = () => {
	return (
		<>
			<div style={{width: "100%", paddingTop: "20px"}}>
				<Button variant="contained">Default</Button>
				<Button variant="contained" color="primary">
					Primary
				</Button>
				<Button variant="contained" color="secondary">
					Secondary
				</Button>
				<Button variant="contained" disabled>
					Disabled
				</Button>
				<Button variant="contained" color="primary" href="#contained-buttons">
					Link
				</Button>
			</div>
		</>
	)
};

export default UIButton;