import React, {useState, useEffect} from "react";
import axios from 'axios';

import Image from './components/Image/Image';
import Info from './components/Info/Info';
import "./App.css";




function App() {
    
    const [imgUrl, setImgUrl]= useState('');
    const [hdUrl, setHdUrl]= useState('');
    const [copy, setCopy]= useState('');
    const [curDate, setCurDate]= useState('');
    const [expl, setExpl]= useState('');
    const [title, setTitle]= useState('');
    const [errMessage, setErrMessage]= useState('');

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=v8su2RncIsyRc8ZbQbgNobp0ndXwjixQPURTlhTc&date=${curDate}`)
        .then(res => {
            setImgUrl(res.data.url);
            setHdUrl(res.data.hdurl);
            setCopy(res.data.copy);
            setCurDate(res.data.date);
            setExpl(res.data.explanation);
            setTitle(res.data.title);
            setErrMessage('');
        })
        .catch(err => {
            console.log('Initial Call Error: ', err);
            setErrMessage('Cannot view "future" images. Time machine pending...');
        }) 
        
    }, [curDate]);

    function change(e){
        setCurDate(e.target.value);
        
    }//end func

    if(!title){
        return <h3>Loading ...</h3>
    }else{
        return (
            <div className="App">
                <h1>Nasa: Astronomy Picture of the Day.</h1>
                <form className='dateCont'>
                    <span className= 'dateTitle'>Change Date: </span>
                    <input title='Pick a Date to View Another Image' onChange={(e) => {change(e)}} type='date' id= 'dat' defaultValue= {curDate} />
                    <div className= 'errorCont'>{errMessage}</div>
                </form>
                

                <div className= "mainContent">
                    <Image date= {curDate} imgUrl= {imgUrl} hdUrl={hdUrl} copy= {copy} />
                    <Info title= {title} expl= {expl} />
                </div>
                
            </div>
            

        );
    }//end if
    
    

}//end func


export default App;
