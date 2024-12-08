import { FallbackProps } from 'react-error-boundary'
import { Link } from 'react-router-dom'

export const ResetButton = ({ resetErrorBoundary }: FallbackProps) => {
  return (
    <button
      className="bg-red-100 text-red-500"
      onClick={() => resetErrorBoundary()}
    >
      다시시도
    </button>
  )
}

export const LoginButton = ({ resetErrorBoundary }: FallbackProps) => {
  return (
    <Link to="/login">
      <button
        className="bg-red-100 text-red-500"
        onClick={() => resetErrorBoundary()}
      >
        로그인하기
      </button>
    </Link>
  )
}
