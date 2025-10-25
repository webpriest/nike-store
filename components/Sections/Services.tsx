import { services } from "@/constants"
import ServiceCard from "./ServiceCard"

const Services = () => {
  return (
    <section id="services" className="flex justify-center flex-wrap max-container gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  )
}

export default Services