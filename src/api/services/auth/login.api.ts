import { useNavigate } from 'react-router-dom'

import { useMutation } from '@tanstack/react-query'

import { fetchInstance } from '@/api/instance'
import { LoginRequest } from '@/types'

const postLogin = async ({ employeeId, password }: LoginRequest) => {
  const response = await fetchInstance.post('/api/public/login', {
    employeeId,
    password,
  })

  if (response.status === 200) {
    return true
  } else if (response.status === 404 || response.status === 400) {
    alert(
      '아이디 또는 비밀번호가 잘못 되었습니다.\n아이디와 비밀번호를 정확히 입력해 주세요.'
    )
    return false
  } else if (response.status === 409) {
    alert('이미 로그인 된 계정입니다.')
    return true
  }
}

export const usePostLogin = () => {
  const navigate = useNavigate()
  return useMutation({
    mutationFn: postLogin,
    onSuccess: (success) => {
      if (success) navigate('/main')
    },
    onError: () => {},
  })
}
