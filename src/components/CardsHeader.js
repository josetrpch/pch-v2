import React from 'react';
import {Card, Typography, CardContent, CardActions } from '@material-ui/core';
import {makeStyles, IconButton} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


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



const CardsHeader = () => {




    const classes = useStyles();
    return ( 
        <Card className={classes.root}>
            <CardContent>
                    <CheckCircleIcon/>
                <Typography className={classes.titulo}>
                    Nombre de la Empresa
                </Typography>
                <Typography className={classes.texto}>
                    Rut de La Empresa
                </Typography>
            </CardContent>
        </Card>

     );
}
 
export default CardsHeader;