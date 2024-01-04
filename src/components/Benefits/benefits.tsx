import ForBusiness from '../../assets/images/benefits.png'
import ForStaff from '../../assets/images/staff.png'
import ForCustomers from '../../assets/images/customers.png'
const Benefits = () => {
  return (
    <section className="lg:pt-[150px] md:pt-28 pt-[75px]">
      <div className="container">
        <h2 className="lg:text-[56px] md:text-5xl text-[32px] lg:leading-[61px] tracking-[-0.2px] font-extrabold text-center text-fonts lg:mb-[84px] mb-[40px]">
          Benefits
        </h2>
        <div className="space-y-[60px] lg:space-y-[100px]">
          <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-[30px] lg:gap-2.5 xs:text-center">
            <img
              src={ForBusiness}
              className="lg:w-[551px] lg:h-[300px] md:w-[450px] md:h-[260px] mx-auto"
            />
            <div className="lg:max-w-[483px] lg:order-first">
              <h3 className="text-fonts text-2xl md:text-4xl lg:text-[40px] font-bold lg:leading-[61px] tracking-[-0.2px] ">
                For Business Owners
              </h3>
              <p className="text-fonts text-[18px] md:text-2xl lg:text-[28px] font-normal lg:leading-[38px] mt-4">
                Save time in meetings, grasp customer sentiments, and oversee
                staff performance across your business locations.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-[30px] lg:gap-2.5 xs:text-center">
            <img
              src={ForStaff}
              className="lg:w-[551px] lg:h-[300px] md:w-[450px] md:h-[260px] mx-auto"
            />
            <div className="lg:max-w-[483px]">
              <h3 className="text-fonts text-2xl md:text-4xl lg:text-[40px] font-bold lg:leading-[61px] tracking-[-0.2px] ">
                For Staff
              </h3>
              <p className="text-fonts text-[18px] md:text-2xl lg:text-[28px] font-normal lg:leading-[38px] mt-4">
                Get insightful, constructive feedback to enhance service quality
                and foster personal development.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-[30px] lg:gap-2.5 xs:text-center">
            <img
              src={ForCustomers}
              className="lg:w-[551px] lg:h-[300px] md:w-[450px] md:h-[260px] mx-auto"
            />
            <div className="lg:max-w-[483px] lg:order-first">
              <h3 className="text-fonts text-2xl md:text-4xl lg:text-[40px] font-bold lg:leading-[61px] tracking-[-0.2px] ">
                For Customers
              </h3>
              <p className="text-fonts text-[18px] md:text-2xl lg:text-[28px] font-normal lg:leading-[38px] mt-4">
                Share your experiences effortlessly and see your feedback
                appreciated in a meaningful way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Benefits
