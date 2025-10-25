import Button from "../Layouts/Button"

const Subscribe = () => {
  return (
    <section id="contact-us" className="max-container flex justify-between items-center max-lg:flex-col gap-10">
      <h3 className="text-4xl lg:max-w-md leading-[68px] font-oswald font-bold">Sign up for <span className="text-red-500">Updates</span> & Newsletter</h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-gray-500 rounded-full">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex items-center max-sm:justify-end max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  )
}

export default Subscribe