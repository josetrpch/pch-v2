import React, {useState} from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {Paper, Divider }from '@material-ui/core';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";

import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import TableRow from "@material-ui/core/TableRow";
import PropTypes from "prop-types";



const useStyles1 = makeStyles((theme) => ({
    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5)
    }
  }));

  function TablePaginationActions(props) {
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;
  
    const handleFirstPageButtonClick = (event) => {
      onChangePage(event, 0);
    };
  
    const handleBackButtonClick = (event) => {
      onChangePage(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onChangePage(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event) => {
      onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
      <div className={classes.root}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
  
  TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired
  };
  



const useStyles = makeStyles((theme) => ({

  titulo: {
  backgroundColor: theme.palette.primary.main, 
  minWidth: 200,
  color: 'white',
  },
}));


const DataTable = ({data}) => {

    const classes = useStyles();
    const columns = data[0] && Object.keys(data[0])
    const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

    return ( 
        <>
        
        <TableContainer component={Paper} elevation={3} >
          <div style={{textAlign: 'center', padding: '20px', fontWeight: 'bold'}} className={classes.titulo}>Tabla de Prueba con conexion a una api</div>
          
          <Table stickyHeader aria-label="sticky table" size="small" style={{textAlign: 'center'}} >            
            <TableHead >
              <TableRow className={classes.titulo} >
              {data[0] && columns.map((heading) => <th> {heading}  </th> ) }
              </TableRow>
            </TableHead>
            <TableBody>
              
            {(rowsPerPage > 0 ?
            
            data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : data).map(row => (
            
              <TableRow hover >
              <TableCell component="th" scope="row" align="center">
              {row.id}               
             </TableCell>   
             <TableCell style={{width: '460'}} align="center">
              {row.employee_name}               
             </TableCell> 
             <TableCell style={{width: '460'}} align="center">
              {row.employee_salary}               
             </TableCell> 
             <TableCell style={{width: '460'}} align="center">
              {row.employee_age}               
             </TableCell> 
              </TableRow>
              
               ))}
                         {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
            </TableBody>
            <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 20, { label: "Todo", value: -1 }]}
              colSpan={3}
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
          </Table>
        </TableContainer>
      

        </>
     );
}
 
export default DataTable;