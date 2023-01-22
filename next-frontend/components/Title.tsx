export const Title = ({ title }: PropTypes) => (
  <h2 className="pb-5 text-center text-3xl font-bold tracking-tight text-primaryLight">{title}</h2>
)

interface PropTypes {
  title: string
}