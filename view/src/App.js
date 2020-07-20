
import React, { Component } from 'react';
import 'babel-polyfill';
import axios from 'axios';
import "@babel/polyfill";


const bringFS = async ()=>{
  const server="localhost:8000";
  const response = await axios.post(server,{
    name: 'naver',
  });
  console.log(response.data);
}

const App=()=>{
  return(
    <>
    <button onClick={bringFS}>네이버 재무제표 가져오기</button>
    </>
  );
}
export default App;