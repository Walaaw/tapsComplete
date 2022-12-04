import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


 function App() {
  const [alldata, setalldata] = useState(null);
  const [value, setvalue] = useState(0);
 
  async function getapi(){
     let {data} = await axios.get('https://course-api.com/react-tabs-project') ;
    setalldata(data);
 }
 useEffect(()=>{
  getapi();
 },[])
  return (
    <> 
    
    {alldata?<div className="container mt-5">
    <h1 className='m-5 text-center'> Experience</h1>
      <div className="row m-5">
        <div className="col-md-3">
          <div className="item">
            {alldata.map((company,idx)=>
              <button className='btn  p-2 m-2 d-block '  key={idx}  onClick={()=>{setvalue(idx)}} >{company.company}</button>
            )}
          </div>
        </div>
        <div className="col-md-9">
          <div className="item">
            <p className='fs-3'>{alldata[value].title}</p>
            <span className='company fw-bold text-muted p-2 rounded'>{alldata[value].company}</span>
            <p className=' text-muted mt-3'>{alldata[value].dates}</p>
            {alldata[value].duties.map((dutie)=><div className='d-flex justofy-content-between align-items-center'> <i className="fa-solid fa-angles-right text-info me-4"></i><p>{dutie}</p> </div>)}
          </div>
        </div>
      </div>
    </div>:<h1>loading</h1>}
    
    
    </>
  );
}

export default App;
