export default function Login() {
  return (
    <div className="flex flex-col w-1/4 min-w-64 gap-4">
      <div>
        <label className="text-lg text-text-default">사번</label>
        <input className="w-full text-xl rounded-md border-2 border-solid border-text-light focus:border-text-secondary focus:outline-none px-2 py-1" />
      </div>
      <div>
        <label className="text-lg text-text-default">비밀번호</label>
        <input
          type="password"
          className="w-full text-xl rounded-md border-2 border-solid border-text-light focus:border-text-secondary focus:outline-none px-2 py-1"
        />
        <div className="w-full flex justify-end text-text-secondary pt-1">
          <button>비밀번호 찾기</button>
        </div>
      </div>
      <button className="text-white text-xl font-semibold rounded-xl bg-button-orange mx-10 py-1 my-3 hover:bg-orange-200 focus:bg-button-orange">
        Login
      </button>
    </div>
  )
}
