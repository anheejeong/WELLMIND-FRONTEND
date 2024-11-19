import symbol from '@/assets/symbol.png'
import Login from '@/pages/AuthPage/Login'

export default function AuthPage() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="flex justify-center gap-x-3 mb-12">
        <img src={symbol} alt="Symbol" className="h-32" />
        <div className="flex w-fit flex-col justify-between mb-5">
          <h1 className="text-6xl text-text-primary font-medium">solution</h1>
          <h2 className="text-4xl text-text-default font-semibold">
            HR Management System
          </h2>
        </div>
      </div>
      <Login />
    </div>
  )
}
