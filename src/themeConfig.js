import {createMuiTheme} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';



const theme = createMuiTheme({
    palette: {
        primary: {
          main: blue[800]
          
        },
        secondary: {
          main: red[400]
        },
        
        greyFondo :{
          main : grey[300]
        },


      
      },
});

export default theme;