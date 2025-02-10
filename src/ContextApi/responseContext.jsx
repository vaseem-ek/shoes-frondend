import { createContext, useEffect, useState } from 'react';
import { listShoe } from '../services/All_Api';

const ResponseContext = createContext();

export const ResponseProvider = ({ children }) => {
  const [response, setResponse] = useState([]);
  const [savedData, setSavedData] = useState([]);

  

  const getProduct=async()=>{
    const res=await listShoe()
    setResponse(res.data.result)
  }
  useEffect(()=>{
    getProduct()
  },[])

  
  

  const value={
    response,
    savedData,setSavedData
  }

  return (
    <ResponseContext.Provider value={value}>
      {children}
    </ResponseContext.Provider>
  );
};

export default ResponseContext;
