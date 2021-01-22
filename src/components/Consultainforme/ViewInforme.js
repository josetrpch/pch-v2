import React from 'react';
import {
  Container,
  Grid,
} from '@material-ui/core';



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
              <InformeRessult />
          </Grid>

  
      
        </Grid>
      
   
  );
};

export default ViewInforme;