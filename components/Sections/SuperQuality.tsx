import Button from "../Layouts/Button"

const SuperQuality = () => {
  return (
    <section id="about-us" className="padding flex max-lg:flex-col justify-between w-full items-center max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="font-oswald text-4xl lg:max-w-lg capitalize font-bold">
          We Provide You <span className="text-red-500">Super Quality</span> Shoes
        </h2>
        <p className="font-montserrat text-gray-500 text-lg leading-7 mt-4">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
        <p className="font-montserrat text-gray-500 text-lg leading-7 mt-6">Our dedication to detail and excellence ensures your satisfaction</p>
        <div className="mt-11">
          <Button label="View details" iconUrl="" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img 
          src="/assets/images/shoe8.svg" 
          width={570} height={522} 
          alt="super quality shoe"
          className="object-contain"
        />
      </div>
    </section>
  )
}

export default SuperQuality