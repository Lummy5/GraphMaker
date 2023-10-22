import { useState } from 'react';
import Graphs from './Graphs/Graphs';
import * as XLSX from 'xlsx'
import classes from './App.module.css'
import SideBar from './SideBar/SideBar';

function App() {
  const [showGraphs, setShowGraphs] = useState(false);
  const [items, setItems] = useState([]);
  const [showGenerate, setShowGenerate] = useState(false);
  const [checkedGraph, setCheckedGraph] = useState([0, 0, 0, 0, 0, 0]);
    const showGraphsToggle = () =>{
        setShowGraphs(true);
    }
    let arata = null;
    if(showGraphs){
        arata = (
          <Graphs data={items} showCheckedGraphs={checkedGraph}/>
        );
    }

    const readExcel = (file) =>{
      const promise = new Promise((resolve, reject) =>{
        
        const fileReader = new FileReader();
        
        fileReader.readAsArrayBuffer(file);
        
        fileReader.onload= (e) => {
          const bufferArray = e.target.result;
          const wb=XLSX.read(bufferArray,{type:'buffer'});

          const wsname=wb.SheetNames[0];

          const ws = wb.Sheets[wsname];

          const data=XLSX.utils.sheet_to_json(ws)

          resolve(data);
        };

        fileReader.onerror=((error) =>{
          reject(error);
        })
      });

      promise.then((d) =>{
        console.log(d);
        setItems(d);
        setShowGenerate(true);
      })
    };


  let changeFile = (event) =>{
    const file = event.target.files[0];
    readExcel(file);
  }
  const changeCheckedGraphs= (e) => {
    let isChecked = e.target.checked;
    let newList = checkedGraph;
    newList[parseInt(e.target.id, 10)] = isChecked;
    setCheckedGraph([...newList]);
  }
  return ( 
    <div className={classes.Box}>
      <SideBar 
        tggl={showGraphsToggle} 
        chosen={changeFile}
        showGenerate={showGenerate} 
        changeCheckedGraphs={changeCheckedGraphs}
      />
      {arata}
    </div>
  )
}

export default App;
