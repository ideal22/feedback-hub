import Logo from '../../assets/icons/logo.svg'

const Header = () => {
  return (
    <header className="max-w-[980px] mx-auto bg-white rounded-[50px] py-4 px-[22px] flex items-center justify-between">
      <img src={Logo} />
      <nav>
        <ul className="flex items-center space-x-10">
          <li>
            <a
              href=""
              className="text-xl leading-6 hover:text-primary transition-colors"
            >
              Demo
            </a>
          </li>
          <li className="">
            <a
              href=""
              className="text-xl leading-6 hover:text-primary transition-colors"
            >
              Benefits
            </a>
          </li>
          <li className="">
            <a
              href=""
              className="text-xl leading-6 hover:text-primary transition-colors"
            >
              Join us
            </a>
          </li>
        </ul>
      </nav>
      <button className="bg-primary text-white w-[95px] py-4 px-6 rounded-[30px]">
        Login
      </button>
    </header>
  )
}
export default Header
