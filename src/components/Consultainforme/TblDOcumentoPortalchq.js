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
    Qmonto: '4577502',

},
{
    id: uuid(),
    item: 'Monto Giro',
    Qmonto: '6815892',

},
{
    id: uuid(),
    item: 'Monto Codificado',
    Qmonto: '4577502',


},
{
    id: uuid(),
    item: 'Monto Rechazado',
    Qmonto: '2238390',

    

},
{
    id: uuid(),
    item: 'Monto Vencer',
    Qmonto: '0',
    
    

},
{
    id: uuid(),
    item: 'Monto al día',
    Qmonto: '0',
    
    

},

]; 

const useStyles = makeStyles(() => ({
    root: {},
    actions: {
      justifyContent: 'flex-end'
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
            <CardHeader title="Detalle Consulta por Rut" />
                <Divider />
            <PerfectScrollbar>
                <Box minWidth={800}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Cuadro de Resumen</TableCell>
                                <TableCell></TableCell>
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