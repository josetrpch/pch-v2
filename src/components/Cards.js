import React from 'react';
import {Card, Typography, CardContent, CardActions } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme)=>({
    root: {
        textAlign: 'center',
        backgroundColor: 'red',
       
    },
    texto: {
        fontSize: 18,
        color: 'white',
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'white',
    },

}));

const Cards = () => {

    const classes = useStyles();

    return ( 
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.titulo}>
                    titulo
                </Typography>
                <Typography className={classes.texto}>
                    123%
                </Typography>
            </CardContent>
        </Card>

     );
}
 
export default Cards;