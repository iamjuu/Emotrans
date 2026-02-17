import { Logistics1, Logistics5, Logistics8, Logistics11 } from "../../../assets";
import { AnimatedTestimonials } from "../../../ui/animated-testimonials/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "As CEO of our logistics company, I lead a team focused on reliable freight and supply chain solutions. We deliver across road, rail, air, and sea with transparency and on-time performance, ensuring every shipment meets our clients' expectations.",
      name: "Muhammed Afnaj Chooriyan",
      designation: "CEO, Emotrans Logistics",
      src: Logistics1,
    },
    {
      quote:
        "Their logistics and operations support helped us streamline our supply chain and cut costs. The team’s professionalism, real-time tracking, and attention to detail are exceptional.",
      name: "Fathimathul Mufeedha",
      designation: "Logistics Coordinator, Urban Freight",
      src: Logistics5,
    },
    {
      quote:
        "Their freight and last-mile delivery services transformed how we fulfill orders. Reliable tracking, on-time delivery, and clear communication exceeded our expectations.",
      name: "Emily Watson",
      designation: "Operations Manager, CloudScale Retail",
      src: Logistics8,
    },
    {
      quote:
        "Warehousing and multimodal freight solutions were delivered on time and within budget. Their expertise in customs and end-to-end logistics is remarkable.",
      name: "Arjun Menon",
      designation: "Supply Chain Manager, BuildTech Solutions",
      src: Logistics11,
    }


  ];
  
  
  return <AnimatedTestimonials testimonials={testimonials} />;
}
