const Button = ({label, iconUrl}) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-red-600 rounded-full text-white hover:opacity-90 transition-opacity">
        {label}
        <img src={iconUrl} className="ml-2 rounded-full" alt="arrow" />
    </button>
  )
}

export default Button