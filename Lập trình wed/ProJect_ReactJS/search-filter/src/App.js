
import './App.css';
import React, {useState, useEffect} from 'react'

export default function App() {
  const [source, setSource] =  useState('post');
  const clickInhoa = () => {
    setSource("Hello")
  }

  useEffect(() => {
    console.log("Xin chao cac ban")
  }, [source])
  return (
    <>
      <div className='container text-center' style={{marginTop: '20px'}}>
        <button className='btn btn-primary' onClick={clickInhoa}>Hello</button>
        <button className='btn btn-primary mx-4' onClick={() => {setSource('Xin chao')}}>Xin chao</button>
        <button className='btn btn-primary' onClick={() => {setSource('Hiii')}}>Hiii</button>
      </div>
      <h1 className='text-center my-4' >{source.length > 1?source.toUpperCase():"Khong co thong tin"}</h1>
    </>
  );
}

