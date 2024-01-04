import Iphone1 from '../../assets/images/iphone-1.png'
import Iphone2 from '../../assets/images/iphone-2.png'
import Iphone3 from '../../assets/images/iphone-3.png'
const HowItWorks = () => {
  return (
    <section className="lg:pt-[154px] md:pt-28 sm:pt-24 xs:pt-[60px] ">
      <div className="container">
        <h3 className="sm:text-5xl md:text-4xl text-3xl lg:text-[56px] font-extrabold leading-[61px] tracking-[-0.2px] text-fonts text-center lg:mb-[84px] md:mb-16 sm:mb-12 mb-8 xs:mb-6">
          How is it works
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-20 xs:gap-[60px] lg:gap-[105px]">
          <div className="xs:text-center">
            <img
              src={Iphone1}
              className="mb-10 xs:mx-auto md:mx-0 lg:w-[266px] lg:h-[566px] w-[212px] h-[427px]"
            />
            <div>
              <h4 className="text-fonts text-2xl md:text-3xl lg:text-[32px] font-bold leading-[38px] tracking-[-0.2px] mb-4">
                Send conversational prompts
              </h4>
              <p className="text-[18px] md:text-xl lg:text-[24px] font-normal lg:leading-[38px] font-['Inter']">
                Engage customers effectively with our easy feedback submission
                system, using open-ended questions.
              </p>
            </div>
          </div>
          <div className="xs:text-center">
            <img
              src={Iphone2}
              className="mb-10 xs:mx-auto md:mx-0 lg:w-[266px] lg:h-[566px] w-[212px] h-[427px]"
            />
            <div>
              <h4 className="text-fonts text-2xl md:text-3xl lg:text-[32px] font-bold leading-[38px] tracking-[-0.2px] mb-4">
                Send conversational prompts
              </h4>
              <p className="text-[18px] md:text-xl lg:text-[24px] font-normal lg:leading-[38px] font-['Inter']">
                Extract and analyze customer trends, satisfaction levels,
                concerns, and emotions.
              </p>
            </div>
          </div>
          <div className="xs:text-center">
            <img
              src={Iphone3}
              className="mb-10 xs:mx-auto md:mx-0 lg:w-[266px] lg:h-[566px] w-[212px] h-[427px]"
            />
            <div>
              <h4 className="text-fonts text-2xl md:text-3xl lg:text-[32px] font-bold leading-[38px] tracking-[-0.2px] mb-4">
                Send conversational prompts
              </h4>
              <p className="text-[18px] md:text-xl lg:text-[24px] font-normal lg:leading-[38px] font-['Inter']">
                Strengthen customer loyalty with personalized responses and
                tailored incentives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default HowItWorks
