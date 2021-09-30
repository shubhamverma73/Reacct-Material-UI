import React from 'react';
import { Grid, styled, Paper } from '@material-ui/core';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const UIGrid = () => {

    return (
        <>
            <div style={{ width: "100%", paddingTop: "20px" }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Item>xs=8</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>xs=4</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>xs=4</Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item>xs=8</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>xs=6</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>xs=6</Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>xs=3</Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>xs=3</Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>xs=3</Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>xs=3</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>xs=4</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>xs=4</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>xs=4</Item>
                    </Grid>
                </Grid>
            </div>
        </>
    )
};

export default UIGrid;