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
        
        {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-5 max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className='pt-10 text-center text-3xl font-bold tracking-tight text-primaryDark'>{partida}</div>

                {/*body*/}
                <form className='flex justify-center m-10 drop-shadow-xl text-primaryDark' action="http://localhost:5000/make_bet" method="POST">
                  <input value={bet.home_score} onChange={(e) => {
                  setBet(prevBet => ({
                    ...prevBet, home_score: e.target.value
                  }))}} name='home_score' className='text-primaryDark aspect-square p-4 w-[60px] h-[60px] border rounded-md' type="number" pattern="[0-9]*" />
                  <div className='text-center m-auto text-3xl px-5 font-bold tracking-tight text-gray-400'>x</div>
                  <input value={bet.away_score} onChange={(e) => {
                  setBet(prevBet => ({
                    ...prevBet, away_score: e.target.value
                  }))}} name='away_score' className='text-primaryDark aspect-square p-4 w-[60px] h-[60px] border rounded-md' type="text" pattern="[0-9]*" />
                </form>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={isAdmin ? handleResult : handleBet}
                  >
                    {isAdmin ? 'Save result' : 'Save bet'}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

    </div>
  )
}

export default MatchInfo