type Props = {
    imgURL: string
    customerName: string
    rating: number
    feedback: string
}

const ReviewCard = ({imgURL, customerName, rating, feedback}: Props) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img 
            src={imgURL} 
            alt="customer"
            width={120} 
            height={120}
            className="object-cover rounded-full"
        />
        <p className="mt-6 max-w-sm text-center font-montserrat text-gray-600">{feedback}</p>
        <div className="mt-3 flex justify-center items-center gap-2.5">
            <img 
                src="/assets/icons/star.svg"
                alt="rating"
                width={24}
                height={24}
                className="object-contain m-0"
            />
            <p className="text-xl font-montserrat">({rating})</p>
        </div>
        <h3 className="text-xl font-bold font-oswald text-center">{customerName}</h3>
    </div> 
  )
}

export default ReviewCard