import React from 'react';
import {Slider} from '@material-ui/core';

const mark = [
                {
                    value: 0,
                    label: 'Start'
                },{
                    value: 50,
                    label: 'Middle'
                },{
                    value: 100,
                    label: 'End'
                },
            ];
const getValue = (e,val) => {
    console.log(val);
}
const UISlider = () => {
	return (
		<>
            <div style={{width: "300px", paddingTop: "20px"}}>
			    <Slider color="secondary" size="small" defaultValue={70} valueLabelDisplay="auto" onChange={getValue} />
			    <Slider color="secondary" defaultValue={15} valueLabelDisplay="auto" marks={mark} onChange={getValue} />
            </div>
            <div style={{height: "300px", paddingTop: "20px"}}>
			    <Slider color="secondary" defaultValue={15} valueLabelDisplay="auto" marks={mark} onChange={getValue} orientation="vertical" />
            </div>
        </>
	)
};

export default UISlider;