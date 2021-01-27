

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
    Banco: 'Security',
    NumeroCheque: '1',
    FechaPublicacion: '22/06/2011',
    Motivo: 'ROBO'

},
{
    idConsulta: uuid(),
    Banco: 'Security',
    NumeroCheque: '1',
    FechaPublicacion: '22/06/2011',
    Motivo: 'ROBO'

},
{
    idConsulta: uuid(),
    Banco: 'Security',
    NumeroCheque: '1',
    FechaPublicacion: '21/07/2011',
    Motivo: 'EXTRAVIO'

},
{
    idConsulta: uuid(),
    Banco: 'Security',
    NumeroCheque: '1',
    FechaPublicacion: '28/09/2011',
    Motivo: 'OTRAS SUCURSALES'

},
{
    idConsulta: uuid(),
    Banco: 'Security',
    NumeroCheque: '1',
    FechaPublicacion: '15/09/2011',
    Motivo: 'OTRAS SUCURSALES'

},
{
    idConsulta: uuid(),
    Banco: 'Security',
    NumeroCheque: '1',
    FechaPublicacion: '15/11/2011',
    Motivo: 'OTRAS SUCURSALES'

},
{
    idConsulta: uuid(),
    Banco: 'Security',
    NumeroCheque: '1',
    FechaPublicacion: '21/12/2011',
    Motivo: 'OTRAS SUCURSALES'

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
export const TblOrdenesnoPago = ({className, rest}) => {

    const classes = useStyles();
    const [result] = useState(data); 
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
                                <TableCell>Banco</TableCell>
                                <TableCell>Número Cheque</TableCell>
                                <TableCell>Fecha Publicación</TableCell>
                                <TableCell>Motivo</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {result.map((datos)=>(
                                <TableRow
                                hover
                                key={datos.idConsulta}>
                                    <TableCell>{datos.Banco}</TableCell>
                                    <TableCell>{datos.NumeroCheque}</TableCell>
                                    <TableCell>{datos.FechaPublicacion}</TableCell>
                                    <TableCell>
                                        <Button variant="contained" color="primary">{datos.Motivo}</Button>
                                        </TableCell>
                                    
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>

            </PerfectScrollbar>
         
            </Card>

    );
}
