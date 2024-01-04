import { useState } from 'react'
import Logo from '../../assets/icons/logo.svg'
import BurgerIcon from '../../assets/icons/burger-icon.svg'
import ToggleMenu from '../NavbarToggleMenu/toggle-menu'

const Header = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false)

  return (
    <>
      <header className="max-w-[980px] mx-5 lg:mx-auto bg-white rounded-[50px] py-4 px-[22px] flex items-center justify-between">
        <img src={Logo} className="xs:w-[108px] xs:h-[45px]" />
        <nav className="max-md:hidden">
          <ul className="flex items-center space-x-10">
            <li>
              <a
                href=""
                className="text-xl leading-6 hover:text-primary transition-colors"
              >
                Demo
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-xl leading-6 hover:text-primary transition-colors"
              >
                Benefits
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-xl leading-6 hover:text-primary transition-colors"
              >
                Join us
              </a>
            </li>
          </ul>
        </nav>
        <button className="bg-primary text-white w-[95px] py-4 px-6 rounded-[30px] max-md:hidden">
          Login
        </button>
        <img
          src={BurgerIcon}
          width={16}
          height={16}
          className="cursor-pointer md:hidden"
          onClick={() => setIsToggled((prev) => !prev)}
        />
      </header>
      {isToggled ? <ToggleMenu closeMenu={() => setIsToggled(false)} /> : null}
    </>
  )
}
export default Header
