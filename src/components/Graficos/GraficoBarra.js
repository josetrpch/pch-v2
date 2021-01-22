import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Bar} from 'react-chartjs-2';
import { Grid, Paper,  Typography, makeStyles, Container, Button, Tooltip, IconButton, Hidden } from '@material-ui/core';
import AssessmentIcon from '@material-ui/icons/Assessment';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(4, 6),
         
        
                
    },
    submit: {
        width: '5%',
        margin: theme.spacing(1, -2, 1),
        padding: theme.spacing(0),
        

    },
}))



const GraficoBarra = () => {

    const [nombre, setNombre] = useState([]);
    const [salario, setSalario] = useState([]);


    

    const data = {
        //parametros a comprar 
        labels:nombre,
        //personalziacion de la grafica 
        datasets:[{
            label:'Empleados',

            backgroundColor: '#2196f3',
            borderColor: 'black',
            borderWidth: 1,
            hoverBackgroundColor: 'yellow',
            //valor absoluto de nuestros parametros
            data:salario
        }]
    }

    //configuracion de la grafica
    const opciones = {
        //indica el cambio de tamaño, asi nos permite cambiar el tamaño de nuestra grafica
        manitainAspectRatio: false,
        // que se ajuste a cualquier pantalla
        responsive: true,

    }

    const peticionApi = async () =>{
        await axios.get('http://dummy.restapiexample.com/api/v1/employees').then(response=>{
            const respuesta = response.data.data;
            var auxNombre =[], auxSalario=[];

            respuesta.map(item=>{
                auxNombre.push(item.employee_name);
                auxSalario.push(item.employee_salary);
               
            })
            console.log(response.data.data)
            setNombre(auxNombre);
            setSalario(auxSalario);
        })
    }

    useEffect(()=>{
        peticionApi();
    },[])

    const classes = useStyles();
    
    return ( 
        
            
            
            
            <Container 
            >
                <Button variant="contained" size="small"  color="primary"                 
                style={{float: 'right'}}
                className={classes.submit} 
                >
                <IconButton
                color="inherit"
                >
                  <Tooltip title="Cerrar">
                  <CloseIcon  />
                  </Tooltip>
                </IconButton>
                
                </Button>

                <Grid
                item xs={12} sm={12} md={12} xl={12} 
                direction="column"
                justify="center"
                alignItems="center"
                 >

                
            <Typography component="h1" variant="h4" style={{textAlign: 'center', paddingTop: '20px'}} className={classes.paper}> {/*el component es para quelo tome como un h1 */}
                Estadistica Anual de Consultas          
            </Typography>

            <Bar data={data} options={opciones}  maxWidth="sm"/> 
            </Grid>
            </Container>
        
                
               
                
              
                   
        
     );
}
 
export default GraficoBarra;