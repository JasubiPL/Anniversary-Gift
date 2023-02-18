import { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import './App.css'



function App() {

const [photo, setPhoto] = useState(1)

  let changePhoto;

  useEffect(() => {

    const music = document.getElementById("music");
    music.play();

    changePhoto = setInterval(() =>{

      setPhoto(photo + 1);

      if(photo >   20){
        setPhoto(1);
      }

    },7000)

    return ()=> clearInterval(changePhoto);

  })

  return (
    <div className="App">
      <div className="container">
        <h1>Feliz 4to Aniversario Queen</h1>
        <div className="marco">
        <motion.img 
        className='photo' 
        src={`photo/${photo}.jpg`} alt={photo}
        animate={{
          opacity: [0,1,1,1,1,1,0],
        }}
        transition={{duration: 7, repeat:Infinity}} 
        />
        </div>
        <div className="date">17 Febrero 2019</div>
      </div>
      <motion.img 
      className='globos' 
      src="/globos.png"
      animate={{
        translateY: ["500px","0px"]
      }}
      transition={{duration: 3, delay:1}}
      />
      <motion.img 
      className='rings' 
      src="/rings.png"
      animate={{
        translateY: ["-500px","0px"]
      }}
      transition={{duration: 3, delay:2}}
      />
    </div>
  )
}

export default App
