import { useEffect, useRef } from 'react'
import useGame from '../hooks/useGame'

const Pong = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { setIsRunning, y } = useGame(canvasRef)

  useEffect(() => {
    setIsRunning(true)
    return () => setIsRunning(false)
  })

  return (
    <>
      {`Pos x -> ${y}`}
      <canvas ref={canvasRef} />
    </>
  )
}

export default Pong
