import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { requestService } from '../service';
import { useAdminContext } from '../contexts';
import { Item, Calendar, HashIcon, LocationIcon, Title } from '../components';
import { ArrowToRight } from '../components/Icons/ArrowToRight';

const MatchInfo = () => {

  const router = useRouter()
  const {partida, rodada, data, hora, estadio, key, grupo} = router.query
  const [showModal, setShowModal] = useState(false);
  
  const { isAdmin, setAdminMode } = useAdminContext();

  useEffect(() => {
    if (localStorage.getItem("user") === null){
      router.push('/signin')
    } else if (localStorage.getItem('is_admin') === '1'){
      setAdminMode()
    }
  }, []);

  const handleResult = () => {
    requestService.registerResult(bet)
    setShowModal(false)
  }

  const handleBet = () => {
    requestService.makeBet(bet)
    setShowModal(false)
  }  

  const [bet, setBet] = useState({
    home_score: '',
    away_score: '',
    id_game: key,
    id_group: grupo
  })

  return (
    <div className='background'>
        <Title title={`${partida}`} />
        <Item Icon={<HashIcon/>} Title={`Round ${rodada}`} />
        <Item Icon={<Calendar/>} Title={`${data}, ${hora}`} />
        <Item Icon={<LocationIcon/>} Title={`${estadio}`} />          
        <button type='button' onClick={() => setShowModal(true)}
          className='flex mt-10 break-inside bg-indigo-600 rounded-full px-8 py-4 mb-4 w-full dark:bg-indigo-600 dark:text-white'>
          <div className='flex items-center justify-between flex-1'>
            <span className='text-lg font-medium text-white'>{isAdmin ? 'Register result' : 'Make bet'}</span>
            <ArrowToRight />
          </div>
        </button>
    </div>
  )
}

export default MatchInfo