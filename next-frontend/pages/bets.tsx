import { Title } from '../components';
import { ListBets } from '../layouts/Bets';

const Bets = () => (
  <div className='background'>
    <Title title={`You made Bets`} />
    <ListBets />
  </div>
)

export default Bets
