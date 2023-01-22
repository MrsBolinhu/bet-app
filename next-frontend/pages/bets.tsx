import { useEffect, useState } from 'react';
import { requestService } from '../service';
import { IBet } from '../types/bets';
import { useRouter } from 'next/router';
import { Title, Trash } from '../components';

const Bets = () => {

  const router = useRouter()

  useEffect(() => {
    if (localStorage.getItem("user") === null){
      router.push('/signin')
    }
  }, []);  

  const [bets, setBets] = useState<IBet[]>([])

  useEffect(() => {
    async function loadBets() {
        const response: any = await requestService.listBets()
        setBets(response.data)
    }
    loadBets();
  }, [])

  const handleDeleteBet = (bet: IBet) => {
    requestService.deleteBet(bet)
    router.reload()
  }

  return (
    <div className='background'>
        <Title title={`You made ${bets.length} Bets`} />
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 pb-[100px]">
          {bets.map((bet) => {
            return(
              <div key={bet.id_game}>
                <div className='flex items-center justify-between pt-5 pb-3'>
                  <div className=''>{bet.teams}, round {bet.round}</div>
                  <button onClick={() => handleDeleteBet(bet)}>
                    <Trash />
                  </button>
                </div>
                <hr className='border-secondaryDark'/>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Bets
