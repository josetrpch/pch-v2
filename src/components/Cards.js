import React from 'react';
import {Card, Typography, CardContent, CardActions, Grid } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import InfoVerificacionCheque from './InfoVerificacionCheque';




const useStyles = makeStyles((theme)=>({
    root: {
        textAlign: 'center',        
        justifyContent: 'center',
        backgroundColor: theme.palette.secondary.main,        
    },
    texto: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        
    },
    titulo: {        
        fontSize: 15,
        color: 'white',
    },

}));

const Cards = ({titulo, dato}) => {

    const classes = useStyles();

    return ( 
        <Card className={classes.root}>
            
            <CardContent>
                
                <Typography className={classes.titulo}>
                    {titulo}
                </Typography>
                <Typography className={classes.texto}>
                    {dato}
                </Typography>                                
            </CardContent>
            
        </Card>

     );
}
 
export default Cards;