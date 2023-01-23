import { useEffect, useState } from 'react';
import { requestService } from '../service';
import { IBet } from '../types/bets';
import { useRouter } from 'next/router';

export const useBets = () => {
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
        setBets(response?.data)
    }
    loadBets();
  }, [])

  const handleDeleteBet = (bet: IBet) => {
    requestService.deleteBet(bet)
    router.reload()
  }
  
  return { bets, setBets, handleDeleteBet }
}