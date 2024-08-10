import { useState, useEffect } from 'react';

const loadedData = [
  { id: 1, name: 'Objeto 1' },
  { id: 2, name: 'Objeto 2' },
  { id: 3, name: 'Objeto 3' },
];

const DataDisplay = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));

  
        setData(loadedData);
      }

      fetchData();
      
    }, []);

  return (
    <>
        <h1>Data Display App</h1>
        <ul>
            {
                data.map((element, index=loadedData[0].id) => (
                    data.length > 0
                    ? <li key={index}>{element.name}</li>
                    : "Loading..."
                ))
            }
        </ul>

    </>
  )
}

export default DataDisplay