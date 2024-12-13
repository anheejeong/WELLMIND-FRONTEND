import { useEffect, useState } from 'react'

import LoadingPage from '@/pages/LoadingPage'
import QR from '@/pages/QRPage/QR'

export default function QRPage() {
  const [longitude, setLongitude] = useState<string | null>(null)
  const [latitude, setLatitude] = useState<string | null>(null)

  useEffect(() => {
    const successCallback = (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords
      setLatitude(latitude.toString())
      setLongitude(longitude.toString())
    }
    const errorCallback = () => {
      console.error('Unable to retrieve location.')
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
    }
  }, [])

  if (longitude === null || latitude === null) {
    return <LoadingPage />
  }

  if (longitude && latitude) console.log(longitude, latitude)

  return <QR longitude={longitude} latitude={latitude} />
}
