import { Title } from '../components';
import { useBetsContext } from '../contexts';
import { ListBets } from '../layouts/Bets';

const Bets = () => {
  const { bets } = useBetsContext()
  return (
    <div className='background'>
      <Title title={`You made ${bets.length} Bets`} />
      <ListBets />
    </div>
  )
}

export default Bets
