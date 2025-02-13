import { useState } from 'react'
import {motion} from 'motion/react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <motion.div className="box" animate = {{x:1000 , rotate:360 , y:500}} transition={{duration:3 , delay:2}}>
        
      </motion.div>
    </>
  )
}

export default App
