import { QueryClientProvider } from '@tanstack/react-query'

import { queryClient } from '@/api/instance'
import { Routes } from '@/routes'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  )
}

export default App
