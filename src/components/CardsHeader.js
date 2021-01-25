import React from 'react';
import {Card, Typography, CardContent, CardActions } from '@material-ui/core';
import {makeStyles, IconButton} from '@material-ui/core';
import InfoVerificacionCheque from './InfoVerificacionCheque';


const useStyles = makeStyles( () =>({

    root: {
        textAlign: 'center',
        background: 'white',
    },
    texto:{            
        fontSize: 18,        
    },
    titulo:{
        fontWeight: 'bold',
        fontSize: 22,
        
    }
}));



const CardsHeader = ({titulo, rut, giro, direccion}) => {




    const classes = useStyles();
    return ( 
        <Card className={classes.root}>
            <CardContent>
            <Typography className={classes.titulo}>
                    {titulo}
                </Typography>
                <Typography className={classes.texto}>
                    {rut}
                </Typography>
                <Typography className={classes.texto}>
                    {giro}
                </Typography>
                <Typography className={classes.texto}>
                    {direccion}
                </Typography>
            </CardContent>
        </Card>

     );
}
 
export default CardsHeader;