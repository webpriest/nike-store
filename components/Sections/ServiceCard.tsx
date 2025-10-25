type Props = {
    imgURL: string;
    label: string;
    subtext: string;
}

const ServiceCard = ({imgURL, label, subtext}: Props) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-2xl px-10 py-16">
        <div className="flex w-11 h-11 justify-center items-center bg-red-500 rounded-full">
            <img 
                src={imgURL} 
                alt={label}
                width={24}
                height={24}
            />
        </div>
        <h3 className="mt-5 font-oswald text-3xl font-bold leading-normal">{label}</h3>
        <p className="mt-5 font-montserrat text-lg leading-normal break-words text-gray-500">{subtext}</p>
    </div>
  )
}

export default ServiceCard