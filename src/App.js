import React, {useState, useEffect} from "react";
import axios from 'axios';
import Image from './components/Image/Image';
import Info from './components/Info/Info';
import "./App.css";




function App() {
    
    const [imgUrl, setImgUrl]= useState('');
    const [hdUrl, setHdUrl]= useState('');
    const [copy, setCopy]= useState('');
    const [date, setDate]= useState('');
    const [expl, setExpl]= useState('');
    const [title, setTitle]= useState('');

    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=v8su2RncIsyRc8ZbQbgNobp0ndXwjixQPURTlhTc')
        .then(res => {
            console.log(res.data);
            setImgUrl(res.data.url);
            setHdUrl(res.data.hdurl);
            setCopy(res.data.copy);
            setDate(res.data.date);
            setExpl(res.data.explanation);
            setTitle(res.data.title);
        })
        .catch(err => {
            console.log('Error: ', err);
        }) 
        
    }, [])

    return (
        <div className="App">
            <h1>Nasa: Astronomy Picture of the Day.</h1>
            <div className= "mainContent">
                <Image date= {date} imgUrl= {imgUrl} hdUrl={hdUrl} copy= {copy} />
                <Info title= {title} expl= {expl} />
            </div>
            
        </div>
        

    );
    
    

}//end func


export default App;
