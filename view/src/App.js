
import React, { Component } from 'react';
import 'babel-polyfill';
import axios from 'axios';
import "@babel/polyfill";


const bringFS = async ()=>{
  const server="https://jsonplaceholder.typicode.com/posts";
  const params =new URLSearchParams();
  params.append('name','naver');
  params.append('year','2019');
  params.append('quarter',1);
  const response = await axios.post(server,params);
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