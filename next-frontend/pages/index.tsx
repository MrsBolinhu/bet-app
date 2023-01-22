import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import { IMatch } from '../types/match'
import { requestService } from '../service';
import { Card, Title } from '../components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTabBarContext } from '../contexts';

const Home: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    if (localStorage.getItem("user") === null){
      router.push('/signin')
    }
  }, []);  

  const { show } = useTabBarContext()
  show()

  const [games, setGames] = useState<IMatch[]>([])
  useEffect(() => {
    async function loadGames() {
        const response: any = await requestService.listMatches()
        setGames(response.data)
    }
    loadGames();
  }, [])

  return (
    <div className='background'>
      <Title title='Matches' />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 pb-[100px]">
        {games.map((match) => {
          return(
            <Link key={match.id} href={{pathname: "/matchInfo", query: {
              key: match.id,
              partida: match.teams,
              rodada: match.round,
              data: match.date,
              hora: match.time,
              estadio: match.stadium,
              grupo: match.group
              }}} >
              <div className="pt-5">
                <Card key={match.id} match={ match }
                />
              </div>
            </Link>
          )
        })}
      </div>
    </div>    
  )
}

export default Home
