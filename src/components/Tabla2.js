import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import {Divider, Paper} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';


function createData(name, calories, fat) {
    return { name, calories, fat };
  }

const rows = [
    createData('N° Cheques Protestados Impagos', '0'),
    createData('Monto Cheque Protestados Impagos', '0'),
    createData('N° Documentos Bancarios Protestados Impagos', '0'),
    createData('Monto Documentos Bancarios Protestados Impagos', '0'),
    createData('N° Morosidad Bancaria Vigente', '0'),
    createData('Monto Morosidad Bancaria Vigente', '2999556'),
    createData('N° Documentos Comercio Protestados Impagos', '0'),
    createData('Monto Documentos Comercio Protestados Impagos', '0'),
    createData('N° Morosidad Comercial Vigente', '0'),
    createData('Monto Morosidad Comercial Vigente', '0'),

  ].sort((a, b) => (a.calories < b.calories ? -1 : 1));

  const useStyles2 = makeStyles((theme) => ({
    table: {
      minWidth: 200,
    },
    titulo: {
        backgroundColor: theme.palette.primary.main, 
        minWidth: 200,
        color: 'white',
        }
  }));


const Tabla1 = () => {
    
    const classes = useStyles2();
    const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return ( 
        <TableContainer component={Paper} >
            <div style={{textAlign: "center", padding: '20px', fontWeight: 'bold'}} className={classes.titulo}>
            
            Resumen Informacion Comercial
            </div>
            <Divider/>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableBody> {/*iteracion de los datos */}
          {(rowsPerPage > 0
            
            && rows 
          ).map((row) => (
            <TableRow key={row.name} hover>
              <TableCell component="th" scope="row" >
                {row.name}
              </TableCell>
              <TableCell style={{ width: 460 }} align="center">
                {row.calories}
              </TableCell>
            </TableRow>
          ))}


        </TableBody>

      </Table>
    </TableContainer>
     );
}
 
export default Tabla1;