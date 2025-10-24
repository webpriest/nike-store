type ImgURL = {
    thumbnail: string
    bigShoe: string
}

type Props = {
    imgURL: ImgURL
    changeBigShoe: (img: string) => void
    bigShoeImg: string
}

const ShoeCard = ({imgURL, changeBigShoe, bigShoeImg}: Props) => {
    const handleClick = () => {
        if(bigShoeImg !== imgURL.bigShoe) { 
            changeBigShoe(imgURL.bigShoe)
        }
    }

    return (
        <div className={`rounded-xl border-2 ${bigShoeImg === imgURL.bigShoe ? 'border-red-400' : 'border-transparent'} max-sm:flex-1 cursor-pointer hover:border-red-600 transition-all duration-300`} onClick={handleClick}>
            <div className="flex justify-center items-center bg-card bg-cover bg-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                <img 
                    src={imgURL.thumbnail} 
                    alt="shoe card" 
                    width={127} 
                    height={103}
                    className="object-contain"
                />
            </div>
        </div>
    )
}

export default ShoeCard