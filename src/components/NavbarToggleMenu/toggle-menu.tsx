import Logo from '../../assets/icons/logo.svg'
import CloseIcon from '../../assets/icons/close-icon.svg'

type Props = {
  closeMenu: () => void
}

const ToggleMenu = ({ closeMenu }: Props) => {
  return (
    <div className="w-[calc(100%-40px)] h-[333px] bg-white rounded-[30px] absolute top-8 left-5 right-5 pt-[15px] pl-9 pr-6 text-center lg:hidden">
      <div className="flex justify-between mb-[30px]">
        <img src={Logo} className="xs:w-[108px] xs:h-[45px]" />

        <img
          src={CloseIcon}
          width={16}
          height={16}
          className="cursor-pointer"
          onClick={closeMenu}
        />
      </div>

      <ul className="flex flex-col items-center space-y-5 mb-7">
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

      <button className="bg-primary text-white w-[95px] py-4 px-6 rounded-[30px]">
        Login
      </button>
    </div>
  )
}
export default ToggleMenu
