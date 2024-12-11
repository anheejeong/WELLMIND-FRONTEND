import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { useMutation } from '@tanstack/react-query'

import { authorizationInstance } from '@/api/instance'
import { deleteAuthToken } from '@/store/slices/authToken'

const logout = async () => {
  const response = await authorizationInstance.post('/api/public/logout')
  return response.data
}

export const useLogout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      dispatch(deleteAuthToken())
      navigate('/login')
    },
  })
}
