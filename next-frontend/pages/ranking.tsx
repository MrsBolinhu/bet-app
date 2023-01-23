import { Title } from '../components'
import { ListRanking } from '../layouts/Ranking'

const Ranking = () => (
  <div className='grid h-full min-h-screen bg-primaryDark pt-[60px] pb-[170px] px-6'>
    <Title title='Global ranking' />
    <ListRanking />
  </div>
)

export default Ranking