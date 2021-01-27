import React, { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx';

import {v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';

import {
    Box,
    Button,
    Card,
    Carheader,
    Chip,
    Divider, 
    Table,
    TableBody,
    TableCell,
    tableHead, 
    TableRow,
    TableSortLabel, //
    Tooltip,
    makeStyles,
    CardHeader,
    TableHead,
} from '@material-ui/core';

import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const data = [
{
    idConsulta: uuid(),
    DetalleConsultFecha: '17-02-2020',
    Empresa: 'CSCC ANALISIS S.A.',

},
{
    idConsulta: uuid(),
    DetalleConsultFecha: '17-02-2020',
    Empresa: 'TELECHEQUE INFORMACION Y GESTION S.A.',

},
{
    idConsulta: uuid(),
    DetalleConsultFecha: '17-02-2020',
    Empresa: 'PORTAL CHEQUE S.A',

},
{
    idConsulta: uuid(),
    DetalleConsultFecha: '17-02-2020',
    Empresa: 'PORTAL CHEQUE S.A',

},
{
    idConsulta: uuid(),
    DetalleConsultFecha: '17-02-2020',
    Empresa: 'PORTAL CHEQUE S.A',

},
{
    idConsulta: uuid(),
    DetalleConsultFecha: '17-02-2020',
    Empresa: 'PORTAL CHEQUE S.A',

},
{
    idConsulta: uuid(),
    DetalleConsultFecha: '17-02-2020',
    Empresa: 'PORTAL CHEQUE S.A',

},
{
    idConsulta: uuid(),
    DetalleConsultFecha: '17-02-2020',
    Empresa: 'PORTAL CHEQUE S.A',

},
{
    idConsulta: uuid(),
    DetalleConsultFecha: '17-02-2020',
    Empresa: 'PORTAL CHEQUE S.A',

},
{
    idConsulta: uuid(),
    DetalleConsultFecha: '17-02-2020',
    Empresa: 'PORTAL CHEQUE S.A',

},
{
    idConsulta: uuid(),
    DetalleConsultFecha: '17-02-2020',
    Empresa: 'PORTAL CHEQUE S.A',

},
{
    idConsulta: uuid(),
    DetalleConsultFecha: '17-02-2020',
    Empresa: 'PORTAL CHEQUE S.A',

},
{
    idConsulta: uuid(),
    DetalleConsultFecha: '17-02-2020',
    Empresa: 'PORTAL CHEQUE S.A',

},
{
    idConsulta: uuid(),
    DetalleConsultFecha: '17-02-2020',
    Empresa: 'PORTAL CHEQUE S.A',

},
{
    idConsulta: uuid(),
    DetalleConsultFecha: '17-02-2020',
    Empresa: 'PORTAL CHEQUE S.A',

},
    
]; 

const useStyles = makeStyles((theme) => ({
    root: {},
    actions: {
      justifyContent: 'flex-end'
    },
    FondoTable :{
        backgroundColor: theme.palette.greyFondo.main
    },
  }));

const TblDetalleConsultasRut =({className, ...rest})=>{
    const classes = useStyles();
    const [result] = useState(data);
    console.log('data',result);
    return(
        <Card
            className={clsx(classes.root, className)}
            {...rest}
            >
            
                <Divider />
            <PerfectScrollbar>
                <Box minWidth={800}>
                    <Table >
                        <TableHead className={classes.FondoTable}>
                            <TableRow>
                                <TableCell>
                                   
                                    Fecha detalle
                                </TableCell>
                                <TableCell>
                               
                                    Empresa</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {result.map((datos)=>(
                                <TableRow
                                hover
                                key={datos.idConsulta}>
                                    <TableCell>{datos.DetalleConsultFecha}</TableCell>
                                    <TableCell>{datos.Empresa}</TableCell>
                                    
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>

            </PerfectScrollbar>
         
            </Card>

    );

};

export default TblDetalleConsultasRut;