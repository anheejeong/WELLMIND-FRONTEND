import symbol from '@/assets/symbol.svg'
import Login from '@/pages/AuthPage/Login'

export default function AuthPage() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="flex justify-center gap-x-2 mb-2">
        <img className="w-12 h-12 mt-2" src={symbol} alt="J" />
        <div className="flex w-fit flex-col justify-between mb-5">
          <h1 className="text-3xl font-semibold text-background-back italic">
            solution
          </h1>
          <h2 className="text-md text-text-default font-semibold italic">
            HR Management System
          </h2>
        </div>
      </div>
      <Login />
    </div>
  )
}
