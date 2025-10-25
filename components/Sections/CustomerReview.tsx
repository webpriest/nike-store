import { reviews } from "@/constants"
import ReviewCard from "./ReviewCard"

const CustomerReview = () => {
  return (
    <section id="customer-review" className="max-container padding-x">
      <h3 className="font-oswald text-center font-bold text-4xl">What Our <span className="text-red-500">Customers</span> Are Saying</h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">Hear genuine stories from our satisfied customers about their exceptional experience with us.</p>
      
      <div className="mt-16 flex flex-1 justify-evenly max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard 
            key={review.customerName} 
            {...review}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReview