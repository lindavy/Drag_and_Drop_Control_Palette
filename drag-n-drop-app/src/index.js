import React from 'react';
import { render } from 'react-dom';
import { Navbar } from 'react-bootstrap';
import { Stage, Layer, Image } from 'react-konva';
import apple from './apple.png';
import orange from './orange.png';
import cherry from './cherry.png';
import coconut from './coconut.png';
import peach from './peach.png';
import pear from './pear.png';
// import useImage from 'use-image'


const App = () => {
  const dragUrl = React.useRef(); 
  const stageRef = React.useRef(); 
  const [images, setImages] = React.useState([]); 
  return (
    <>
    <Navbar bg="light" className="text-center">
      <Navbar.Brand href="#home">Drag 'n Drop</Navbar.Brand>
    </Navbar>
    
    <div>
      <br />
      <img
          alt="apple"
          src={ apple }
          width="160"
          height="160"
          draggable="true"
          onDragStart={e => {
            dragUrl.current = e.target.src; 
        }}
        />
        <img
          alt="orange"
          src={ orange }
          width="160"
          height="160"
          draggable="true"
          onDragStart={e => {
            dragUrl.current = e.target.src; 
        }}
        />

        <img
          alt="cherry"
          src={ cherry }
          width="160"
          height="160"
          draggable="true"
          onDragStart={e => {
            dragUrl.current = e.target.src; 
        }}
        />

        <img
          alt="pear"
          src={ pear }
          width="160"
          height="160"
          draggable="true"
          onDragStart={e => {
            dragUrl.current = e.target.src; 
        }}
        />

      <img
        alt="peach"
        src={ peach }
        width="160"
        height="160"
        draggable="true"
        onDragStart={e => {
          dragUrl.current = e.target.src; 
        }}
        />

        <img
          alt="coconut"
          src={ coconut }
          width="160"
          height="160"
          draggable="true"
          onDragStart={e => {
            dragUrl.current = e.target.src; 
        }}
        />
    </div>
    </>
  )
}

render(<App />, document.getElementById('root'));
