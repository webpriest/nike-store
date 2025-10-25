type ButtonProps = {
    label: string
    backgroundColor?: string
    borderColor?: string
    textColor?: string
    iconUrl?: string
    fullWidth?: boolean
}

const Button = ({label, iconUrl, backgroundColor, borderColor, textColor, fullWidth }: ButtonProps) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full cursor-pointer 
    ${
      backgroundColor 
      ? `${backgroundColor} ${borderColor} ${textColor}` 
      : 'bg-red-600 text-white hover:opacity-90 transition-opacity'
    } ${fullWidth && 'w-full'}`}>
        {label}
        {iconUrl && <img src={iconUrl} className="ml-2 rounded-full" alt="arrow" /> }
    </button>
  )
}

export default Button