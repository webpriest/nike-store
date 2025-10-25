import Button from "../Layouts/Button"

const SpecialOffers = () => {
  return (
    <section id="specia-offer" className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img 
          src="/assets/images/offer.svg" 
          alt="special offer"
          width={773}
          height={687}
          className="object-contain w-full h-full"
        />
      </div>

      <div className="flex-1">
        <h2 className="font-oswald text-4xl lg:max-w-lg capitalize font-bold">
          <span className="text-red-500">Special</span> Offer
        </h2>
        <p className="font-montserrat text-gray-500 text-lg leading-7 mt-4">Embark on a shopping journey that redefines your experience with unbeatable deals. From premiere selections to incredible savings, we offer unparalleled value that sets us apart.</p>
        <p className="font-montserrat text-gray-500 text-lg leading-7 mt-6">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations for quality and style.</p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconUrl="/assets/icons/arrow-right.svg" />
          <Button 
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-gray-600"
            textColor="text-gray-600" 
            iconUrl=""
          />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers