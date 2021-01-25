import React from 'react';
import {
  Container,
  Grid,
} from '@material-ui/core';
import  Loading  from '../modales/Loading'

import InformeRessult from './InformeRessult';
const ViewInforme = () => {
  

  return (

      
        <Grid container maxWidth='xl'  >
          <Grid 
          item
            lg={12}
            sm={12}
            xl={12}
            xs={12}>
              
            < Loading /> 
            
             <InformeRessult /> 
          </Grid>

  
      
        </Grid>
      
   
  );
};

export default ViewInforme;