export default function Login() {
  return (
    <div className="flex flex-col w-1/3 min-w-64 gap-4 rounded-md shadow-xl p-8 border border-slate-100 bg-white">
      <div>
        <div className="text-2xl font-semibold">환영합니다</div>
        <div className="">효율적인 인사 관리 시스템</div>
      </div>
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
      <button className="text-white text-xl font-semibold rounded-xl bg-background-back py-1 my-3 hover:bg-orange-200 focus:bg-button-orange">
        Login
      </button>
    </div>
  )
}
