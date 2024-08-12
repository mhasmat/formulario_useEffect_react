import { useState, useEffect } from 'react';

const DataDisplay = () => {
    const [cargando, setCargando] = useState(true);
    const [data, setData] = useState([]);
    
    useEffect(() => {
      const fetchData = async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const loadedData = [
          { id: 1, name: 'Objeto 1' },
          { id: 2, name: 'Objeto 2' },
          { id: 3, name: 'Objeto 3' },
        ];

        setCargando(false);
        setData(loadedData)
      }  
      fetchData();
      
    }, []);

  return (
    <>
        <h1>Data Display App</h1>
        <ul>
            {
              cargando
              ? <h4>Loading...</h4>
              : data.map((element, index) => (
                <li key={index}>{element.name}</li>  
              ))
            }
        </ul>
    </>
  )
}

export default DataDisplay;