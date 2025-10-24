import { navLinks } from "@/constants";
import { hamburger } from "@/public/assets/icons";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img 
            src="/assets/images/header-logo.svg" 
            width={130} 
            height={30}
            alt="Nike"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {link.label}
                </a>
              </li>
            ))}
        </ul>
        <div className="hidden max-lg:block">
          <img 
            src="/assets/icons/hamburger.svg" 
            alt="mobile" 
            width={25} 
            height={25}
          />
        </div>
      </nav>
    </header>
  )
}

export default Nav