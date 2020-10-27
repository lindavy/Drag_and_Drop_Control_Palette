import React from 'react';
import './index.css';
import { render } from 'react-dom';
import { Navbar } from 'react-bootstrap';
import { Stage, Layer, Image } from 'react-konva';
import apple from './apple.png';
import orange from './orange.png';
import cherry from './cherry.png';
import coconut from './coconut.png';
import peach from './peach.png';
import pear from './pear.png';
import useImage from 'use-image'

const URLImage = ({ image }) => {
  const [img] = useImage(image.src);
  return (
    <Image
      image={img}
      x={image.x}
      y={image.y}
      // I will use offset to set origin to the center of the image
      offsetX={img ? img.width / 2 : 0}
      offsetY={img ? img.height / 2 : 0}
    />
  );
};

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
          width="130"
          height="130"
          draggable="true"
          onDragStart={e => {
            dragUrl.current = e.target.src; 
        }}
        />
        <img
          alt="orange"
          src={ orange }
          width="130"
          height="130"
          draggable="true"
          onDragStart={e => {
            dragUrl.current = e.target.src; 
        }}
        />

        <img
          alt="cherry"
          src={ cherry }
          width="130"
          height="130"
          draggable="true"
          onDragStart={e => {
            dragUrl.current = e.target.src; 
        }}
        />

        <img
          alt="pear"
          src={ pear }
          width="130"
          height="130"
          draggable="true"
          onDragStart={e => {
            dragUrl.current = e.target.src; 
        }}
        />

      <img
        alt="peach"
        src={ peach }
        width="130"
        height="130"
        draggable="true"
        onDragStart={e => {
          dragUrl.current = e.target.src; 
        }}
        />

        <img
          alt="coconut"
          src={ coconut }
          width="130"
          height="130"
          draggable="true"
          onDragStart={e => {
            dragUrl.current = e.target.src; 
        }}
        />
    
    
    <div
      onDrop = { e => {
        // register event position
        stageRef.current.setPointersPositions(e); 
        // add image 
        setImages(
          images.concat([
            {
              ...stageRef.current.getPointerPosition(),
              src: dragUrl.current
            }
          ])
        );
      }}
      onDragOver = { e => e.preventDefault()}
      >
        <Stage
          width = { window.innerWidth }
          height = { window.innerHeight }
          style = {{ border: '2px solid grey' }}
          ref = { stageRef }
          >
            <Layer>
              { images.map(image => {
                return <URLImage image = { image } />;
              })}
            </Layer>
          </Stage>
      </div>
      </div>
    </>
  );
};

render(<App />, document.getElementById('root'));
