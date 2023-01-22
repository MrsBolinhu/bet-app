import { Trash } from '../../components';
import { useBetsContext } from '../../contexts';

export const ListBets = () => {

  const { bets, handleDeleteBet } = useBetsContext()

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 pb-[100px]">
      {bets.map((bet: any) => {
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
  )
}