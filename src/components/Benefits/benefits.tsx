import ForBusiness from '../../assets/images/benefits.png'
import ForStaff from '../../assets/images/staff.png'
import ForCustomers from '../../assets/images/customers.png'
const Benefits = () => {
  return (
    <div className="container pt-[150px]">
      <h2 className="text-[56px] leading-[61px] tracking-[-0.2px] font-extrabold text-center text-fonts mb-[84px]">
        Benefits
      </h2>
      <div className="space-y-[100px]">
        <div className="flex justify-between items-center ">
          <div className="max-w-[483px]">
            <h3 className="text-fonts text-[40px] font-bold leading-[61px] tracking-[-0.2px] ">
              For Business Owners
            </h3>
            <p className="text-fonts text-[28px] font-normal leading-[38px] mt-4">
              Save time in meetings, grasp customer sentiments, and oversee
              staff performance across your business locations.
            </p>
          </div>
          <img src={ForBusiness} />
        </div>
        <div className="flex justify-between items-center">
          <img src={ForStaff} />
          <div className="max-w-[483px]">
            <h3 className="text-fonts text-[40px] font-bold leading-[61px] tracking-[-0.2px] ">
              For Staff
            </h3>
            <p className="text-fonts text-[28px] font-normal leading-[38px] mt-4">
              Get insightful, constructive feedback to enhance service quality
              and foster personal development.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="max-w-[483px]">
            <h3 className="text-fonts text-[40px] font-bold leading-[61px] tracking-[-0.2px] ">
              For Customers
            </h3>
            <p className="text-fonts text-[28px] font-normal leading-[38px] mt-4">
              Share your experiences effortlessly and see your feedback
              appreciated in a meaningful way.
            </p>
          </div>
          <img src={ForCustomers} />
        </div>
      </div>
    </div>
  )
}
export default Benefits
