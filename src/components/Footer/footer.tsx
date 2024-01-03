import LeftIcon from '../../assets/icons/left-icon.svg'

const Footer = () => {
  return (
    <footer className="max-w-[1374px] mx-auto bg-fonts rounded-[40px] text-white mt-[210px] text-center pt-[89px] pb-[60px] px-5">
      <h2 className="text-[48px] font-extrabold leading-[66px] tracking-[-1px]">
        Get Started
      </h2>
      <p className="mt-[30px] text-[28px] font-normal leading-[58px]">
        Ready to elevate your customer feedback system?
      </p>
      <p className="mt-[16px] text-[28px] font-normal leading-[58px]">
        Get in touch with us to learn more.
      </p>

      <form className="mt-[24px] max-w-[313px] mx-auto flex flex-col items-center">
        <div className="space-y-4 flex flex-col w-full">
          <input
            className="text-fonts py-[14px] px-[20px] placeholder:text-lg font-['Inter'] font-normal rounded-[30px]"
            type="text"
            placeholder="Name"
          />
          <input
            type="text"
            placeholder="Email"
            className="text-fonts py-[14px] px-[20px] placeholder:text-lg font-['Inter'] font-normal rounded-[30px]"
          />
        </div>
        <button
          className="mt-[24px] bg-[#6B9773] px-[28px] py-[15px] rounded-[32px] flex items-center"
          type="submit"
        >
          <span className="mr-[7px]">Sign up</span>
          <img src={LeftIcon} width={18} height={24} />
        </button>
      </form>
    </footer>
  )
}
export default Footer
