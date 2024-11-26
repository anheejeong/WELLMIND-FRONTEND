import { useEffect, useState } from 'react'

export default function QRPage() {
  const [time, setTime] = useState(300)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer)
          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const minutes = Math.floor(time / 60)
  const seconds = time % 60
  const formattedTime = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`

  return (
    <div className="flex flex-col justify-center items-center mt-8 gap-10">
      <div className="flex flex-col text-center gap-2">
        <div className="text-text-default text-4xl font-semibold">
          QR 코드 생성
        </div>
        <div className="text-default-red text-2xl">{formattedTime}</div>
      </div>
      <div className="w-96 h-96 bg-text-gray"></div>
    </div>
  )
}
