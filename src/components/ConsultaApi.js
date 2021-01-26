import React, {useState, useEffect} from 'react';
import DataTable from './DataTable';
import axios from 'axios';


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
      <DataTable
      data={data} 
      />

      
    </div>
    </>
    
  );
}

export default App;