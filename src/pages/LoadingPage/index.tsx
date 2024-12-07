import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export default function LoadingPage() {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <DotLottieReact
        className="w-80 h-40"
        src="https://lottie.host/f1c50f86-d2b3-4c25-a28c-7d59ebbb5e2b/2FOxhlo1YY.lottie"
        loop
        autoplay
      />
    </div>
  )
}
