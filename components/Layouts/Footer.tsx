import { footerLinks, socialMedia } from "@/constants"

const Footer = () => {
  return (
    <footer className="max-container bg-black padding-x padding-t pb-8">
      <div className="flex flex-wrap items-start justify-between gap-20 max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img 
              src="/assets/images/footer-logo.svg" 
              alt="Nike"
              width={150}
              height={46}
            />
          </a>
          <p className="text-gray-300 sm:max-w-sm mt-5">Get shoes ready for the new season your style with Nike and get the best deals on shoes. Get rewards.</p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div key={icon.alt} className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img 
                  src={icon.src} 
                  alt={icon.alt}
                  width={24}
                  height={24}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-wrap justify-between lg:gap-10 gap-20">
          {footerLinks.map((section) => (
            <div key={section.title} className="flex flex-col gap-6 text-white">
              <h4 className="font-oswald font-medium leading-normal text-2xl">{section.title}</h4>
              <ul className="flex flex-col gap-2 font-normal">
                {section.links.map((link) => (
                  <li key={link.name} className="font-montserrat text-base leading-normal">
                    <a href={link.link} className="text-gray-400 hover:text-gray-600">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-gray-500 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center font-montserrat cursor-pointer gap-2">
          <img src="/assets/icons/copyright-sign.svg" alt="copyright" width={20} height={20} className="rounded-full m-0" />
          <p>2023 Nike, Inc. All rights reserved</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer