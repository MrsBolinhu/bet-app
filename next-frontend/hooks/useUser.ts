import { useState } from 'react'

export const useUser = () => {
  const [user, setUser] = useState<any>()
  const [userImage, setUserImage] = useState<any>()

  return { user, setUser, userImage, setUserImage }
}