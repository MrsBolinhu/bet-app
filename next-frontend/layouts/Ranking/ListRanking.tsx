import { useState, useEffect } from 'react'
import { IUser } from '../../types/user'
import { requestService } from '../../service'
import { useRouter } from 'next/router'
import { RankingCard } from '../../components'

export const ListRanking = () => {
  const [userImage, setImage] = useState<any>('')
  const [users, setUsers] = useState<IUser[]>([])
  const router = useRouter()

  useEffect(() => {
    if (localStorage.getItem("user") === null){
      router.push('/signin')
    } else {
      const temp2 = localStorage.getItem('image')
      setImage(temp2)
    }
  }, []);

  useEffect(() => {
    async function loadGames() {
        const response: any = await requestService.listRanking()
        setUsers(response.data)
        console.log(users)
    }
    loadGames();
  }, [])

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 pb-[140px]">
      {users.map((user, n) => {
        return(
          <div key={user.email} className="pt-5">
            <RankingCard position={n + 1} user={user}/>
          </div>
        )
      })} 
    </div>
  )
}