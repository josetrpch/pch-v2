import React from 'react';
import {makeStyles, CssBaseline, Grid, Avatar, IconButton} from '@material-ui/core';
import CardsHeader from './CardsHeader';
import Cards from './Cards';

const useStyle = makeStyles( (theme) =>({
    root: {
        flexGrow: 1,
        margin: theme.spacing(3, 4), 
    },
}));





const InfoRegistroConsulta = () => {

    const classes = useStyle();
    
   
    return (  
        <div className={classes.root}>
            <CssBaseline />
            
            <Grid container spacing={3}>
                <Grid item xd={12} sm={12} md={12} xl={12}>
                    <CardsHeader/>
                </Grid>


                <Grid container spacing={1} className={classes.container}  > 
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
                        <Cards/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
                        <Cards/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}  >
                        <Cards/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
                        <Cards/>
                    </Grid>
                </Grid>




            </Grid>
        </div>
    );
}
 
export default InfoRegistroConsulta;