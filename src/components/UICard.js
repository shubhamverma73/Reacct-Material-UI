import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@material-ui/core';
//import { CardActionArea } from '@material-ui';

const UICard = () => {


    return (
        <>
            <div style={{ width: "300px", paddingTop: "20px" }}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://mui.com/static/images/cards/paella.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </>
    )
};

export default UICard;