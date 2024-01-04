import LeftIcon from '../../assets/icons/left-icon.svg'

const Footer = () => {
  return (
    <footer className="xl:max-w-[1374px] lg:max-w-[980px] md:max-w-[756px] sm:max-w-[620px] xs:max-w-[350px] mx-auto bg-fonts rounded-[40px] text-white mt-32 md:mt-40 lg:mt-[210px] text-center lg:pt-[89px] lg:pb-[60px] py-[20px] px-8">
      <h2 className="text-2xl sm:text-[28px] md:text-4xl lg:text-5xl font-extrabold lg:leading-[66px] tracking-[-1px]">
        Get Started
      </h2>
      <p className="mt-4 lg:mt-[30px] text-[18px] md:text-2xl lg:text-[28px] font-normal lg:leading-[58px]">
        Ready to elevate your customer feedback system?
      </p>
      <p className="mt-2 text-[18px] md:text-2xl lg:text-[28px] font-normal lg:leading-[58px]">
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
