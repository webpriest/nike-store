'use client'

type Props = {
    imgURL: string;
    name: string;
    price: string;
}

const PopularProductCard = ({imgURL, name, price}: Props) => {
  return (
    <div className="flex flex-col flex-1 w-full max-sm:w-full">
        <img 
            src={imgURL} 
            alt={name} 
            className="w-[280px] h-[280px]"
        />
        <div className="mt-8 flex justify-start gap-2.5">
            <img src="/assets/icons/star.svg" height={24} width={24} alt="rating" />
            <p className="font-montserrat text-xl leading-normal text-gray-600">4.8</p>
        </div>
        <h3 className="font-oswald font-bold text-2xl mt-4">{name}</h3>
        <p className="font-montserrat text-red-600 text-xl mt-2">{price}</p>
    </div>
  )
}

export default PopularProductCard