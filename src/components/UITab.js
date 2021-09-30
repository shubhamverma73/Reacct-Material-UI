import React from 'react';
import { AppBar, Tab, Tabs } from '@material-ui/core';

function TabPannel(props) {
    const { children, value, index } = props;
    return (
        <div>
            {value === index && (
                <h1>{children}</h1>
            )}
        </div>
    )
}

const UITab = () => {

    const [value, setValue] = React.useState(0);
    const handleChange = (e, val) => {
        setValue(val);
    };

    return (
        <>
            <div style={{ width: "100%", paddingTop: "20px" }}>
                <AppBar position="static">
                    <Tabs value={value} onChange={handleChange} textColor="inherit">
                        <Tab label="Item One" />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" />
                    </Tabs>
                </AppBar>
                <Tabs value={value} onChange={handleChange} textColor="inherit">
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                </Tabs>
                <TabPannel value={value} index={0}>
                    Tab Pannel One
                </TabPannel>
                <TabPannel value={value} index={1}>
                    Tab Pannel Two
                </TabPannel>
                <TabPannel value={value} index={2}>
                    Tab Pannel Three
                </TabPannel>
            </div>
        </>
    )
};

export default UITab;