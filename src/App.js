import React, {useState, useEffect} from 'react';

//components
import {Media} from './components/Media';
import {Text} from './components/Text';

//utils
import { fetchImage } from './utils/fetchImage';

//styles
import './sass/app.scss';

//components

function App() {
  const [imageObj, setImageObj]= useState({});

  useEffect(() => {
    fetchImage()
      .then(res => {
        setImageObj(res);
      })

  }, [])

  return (
    <div className="App">

      <div className= 'mainCont'>
        <h1>NASA Photo of the Day</h1>
       
        <input 
          type= 'date'
        />

        <div className= 'contentCont'>
          <Text imageObj= {imageObj} />
          <Media imageObj= {imageObj} />
        </div>{/* end contentCont */}

      </div> {/* end mainCont */}
    </div> // end APP
  );
}

export default App;
