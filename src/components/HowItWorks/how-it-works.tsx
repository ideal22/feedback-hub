import Iphone1 from '../../assets/images/iphone-1.png'
import Iphone2 from '../../assets/images/iphone-2.png'
import Iphone3 from '../../assets/images/iphone-3.png'
const HowItWorks = () => {
  return (
    <section className="container pt-[154px]">
      <h3 className="text-[56px] font-extrabold leading-[61px] tracking-[-0.2px] text-fonts text-center mb-[84px]">
        How is it works
      </h3>

      <div className="flex justify-between items-center gap-[105px]">
        <div>
          <img src={Iphone1} className="mb-10" width={266} />
          <div>
            <h4 className="text-fonts text-[32px] font-bold leading-[38px] tracking-[-0.2px] mb-4">
              Send conversational prompts
            </h4>
            <p className="text-[24px] font-normal leading-[38px] font-['Inter']">
              Engage customers effectively with our easy feedback submission
              system, using open-ended questions.
            </p>
          </div>
        </div>
        <div>
          <img src={Iphone2} className="mb-10" width={266} />
          <div>
            <h4 className="text-fonts text-[32px] font-bold leading-[38px] tracking-[-0.2px] mb-4">
              Send conversational prompts
            </h4>
            <p className="text-[24px] font-normal leading-[38px] font-['Inter']">
              Extract and analyze customer trends, satisfaction levels,
              concerns, and emotions.
            </p>
          </div>
        </div>
        <div>
          <img src={Iphone3} className="mb-10" width={266} />
          <div>
            <h4 className="text-fonts text-[32px] font-bold leading-[38px] tracking-[-0.2px] mb-4">
              Send conversational prompts
            </h4>
            <p className="text-[24px] font-normal leading-[38px] font-['Inter']">
              Strengthen customer loyalty with personalized responses and
              tailored incentives.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default HowItWorks
