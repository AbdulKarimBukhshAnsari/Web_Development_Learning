import { useState } from 'react'
import {motion} from 'motion/react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <motion.div className="box" animate = {{x:[0,1000,0] , rotate:360 , y:[0,300,0]}} transition={{duration:3 , delay:2 , ease:'anticipate', repeat:Infinity
      }}>  
      </motion.div>
      <motion.div
       className="box"
        animate={{
          x:[0,800,800,0, 0], 
          y:[0,0,300,300,0],
          rotate:[90,180,270,360]
        }}
        transition={{
          duration:4,
          delay: 1,
          repeat:Infinity,
        }}

        ></motion.div>

       <motion.div
        drag
        className="box"
        whileDrag={{
          scale:0.8
        }}></motion.div>
    </>
  )
}

export default App


