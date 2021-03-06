import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import PunkList from './components/PunkList';

function App() {
  const [pubnkListData,setPubkListData] = useState([])
  const [activePunk,setActivePunk] = useState(pubnkListData[0])

  useEffect(()=>{
   // console.log("called")
    const getMyNfts = async()=>{
      const openSeaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x22a9b24606289B08B27f53F09757b8749bE98105')
     // console.log(openSeaData.data.assets)
      setPubkListData(openSeaData.data.assets)

    }
    return getMyNfts()
  },[])
  return (
    <div className="app">
      <Header/>
      {
        pubnkListData.length > 0 &&
        (  
          <>
            <Main activePunk={activePunk}/>
            <PunkList punkListData= {pubnkListData} setActivePunk={setActivePunk}/>
          </>
        )
      }
    </div>
  );
}

export default App;
