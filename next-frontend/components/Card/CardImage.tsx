export const CardImage = ({ Image }: PropTypes) => (
  <div className='shrink min-w-[30px] max-w-[60px] mx-auto my-auto bg-primaryDark rounded-xl overflow-hidden'>
    <img className='object-cover' src={ Image } alt="" />
  </div>
)

interface PropTypes {
  Image: any
}