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

const dataDocumento = [
{
    id: uuid(),
    item: 'Monto Vencido',
    Qmonto: '0',

},
{
    id: uuid(),
    item: 'Monto Giro',
    Qmonto: '0',

},
{
    id: uuid(),
    item: 'Monto Rechazado',
    Qmonto: '0',

},


]; 

const useStyles = makeStyles((theme) => ({
    root: {},
    actions: {
      justifyContent: 'flex-end'
    }, 
    FondoTable:{
        backgroundColor: theme.palette.greyFondo.main
    }
  }));
  const formatterDolar = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP'
  })
const TblDOcumentoPortalchq =({className, ...rest})=>{
    const classes = useStyles();
    const [resulDocumento] = useState(dataDocumento);
  
    return(
        <Card
            className={clsx(classes.root, className)}
            {...rest}
            >
        
                <Divider />
            <PerfectScrollbar>
                <Box minWidth={800}>
                    <Table>
                        <TableHead className={classes.FondoTable}>
                            <TableRow>
                                <TableCell>Cuadro de Resumen</TableCell>
                                <TableCell>Q</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {resulDocumento.map((datadocumento)=>(
                                <TableRow
                                hover
                                key={datadocumento.id}>
                                    <TableCell>{datadocumento.item}</TableCell>
                                    <TableCell>
                                    {formatterDolar.format(datadocumento.Qmonto)}
                                       </TableCell>
                                    
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>

            </PerfectScrollbar>
         
            </Card>

    );

};

export default TblDOcumentoPortalchq;