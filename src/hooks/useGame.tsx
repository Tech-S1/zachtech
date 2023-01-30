import { MutableRefObject, useCallback, useEffect, useState } from 'react'

const useGame = (canvasInput: MutableRefObject<HTMLCanvasElement>) => {
  const [isRunning, setIsRunning] = useState<boolean>(false)
  const [y, setY] = useState<number>(0)
  const [ball, setBall] = useState({ x: 80, y: 80 })

  const drawCanvas = (canvasY: number) => {
    const compHeight = 70
    const canvas = canvasInput.current
    canvas.width = window.innerWidth - 70
    canvas.height = window.innerHeight - 190
    const context = canvas.getContext('2d')
    // Background
    context.fillStyle = '#282C34'
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)
    // User Player
    context.fillStyle = '#FFF'
    context.fillRect(10, 10 + canvasY, 20, 80)
    // NPC
    context.fillStyle = '#FFF'
    context.fillRect(context.canvas.width - 30, compHeight, 20, 80)
    // Ball
    context.fillStyle = '#FFF'
    context.beginPath()
    context.arc(ball.x, ball.y, 10, 0, 2 * Math.PI)
    context.fill()
  }

  useEffect(() => {
    drawCanvas(y)
  }, [y, ball])

  function generateRandomFloatInRange(min, max) {
    return Math.random() * (max - min) + min
  }

  const gameLoop = useCallback(() => {
    let direction = 0
    while (Math.abs(direction) <= 0.2 || Math.abs(direction) >= 0.9) {
      const test = generateRandomFloatInRange(0, 2 * Math.PI)
      direction = test
    }
    const velocity = 20
    setBall(prevState => ({
      x: prevState.x + Math.cos(direction) * velocity,
      y: prevState.y + Math.sin(direction) * velocity,
    }))
  }, [])

  useEffect(() => {
    if (!isRunning) {
      return
    }
    const interval = setInterval(() => {
      gameLoop()
    }, 50)
    return () => clearInterval(interval)
  }, [isRunning])

  function handlekeydownEvent(event) {
    const { keyCode } = event
    if (keyCode === 83) {
      // DOWN
      setY(prevState => prevState + 20)
    }
    if (keyCode === 87) {
      // UP
      setY(prevState => prevState - 20)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handlekeydownEvent)
    return () => {
      document.removeEventListener('keydown', handlekeydownEvent)
    }
  }, [])

  return { isRunning, setIsRunning, y, setY }
}

export default useGame
