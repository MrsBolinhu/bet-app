export const InputField = ({ id, name, title, value, handleChange, placeholder, roundedOption, type }: PropTypes) => {
  const classNames = roundedOption + " " + "relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"  
  return (
    <div>
      <label className="sr-only">{ title }</label>
      <input
        id={id}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={classNames}
        type={type}
        name={name}
      />
    </div>
  )
}

interface PropTypes {
  id: string
  name: string
  title: string
  value: string | number
  handleChange: any
  placeholder: string
  roundedOption?: 'rounded-b-md' | 'rounded-t-md'
  type?: string
}