import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DataTable2 from './DataTable2';


function App() {

      /*data de la api*/
    
      const [data, setData] = useState([]);

      const peticionApi = async () =>{
          await axios.get('http://dummy.restapiexample.com/api/v1/employees').then(response=>{
              const respuesta = response.data.data;
              
              setData(respuesta);

              console.log(data);
  
  
          })
      }
  
      useEffect(()=>{
  
          peticionApi();
  
      }, [])

  return (
    <>
    
    <div>
      <DataTable2
      data={data} 
      />

      
    </div>
    </>
    
  );
}

export default App;