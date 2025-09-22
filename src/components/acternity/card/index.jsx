import { BedroomImage2, BedroomImage5, KitchenImage2, LivingRoomImage2, Wall1,Faju,Fidutty,Placeholder,PlaceholderGirl } from "../../../assets";
import { AnimatedTestimonials } from "../../../ui/animated-testimonials/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The leadership and strategic vision demonstrated by the team have been outstanding. Their ability to drive growth while maintaining high standards is truly impressive.",
      name: "Muhammed Afnaj Chooriyan",
      designation: "CEO at DataPro Living",
      src: Faju,
    }
,    
{
  quote:
    "The accounting services were thorough and accurate, helping us streamline our finances efficiently. The team’s professionalism and attention to detail are exceptional.",
  name: "Fathimathul Mufeedha",
  designation: "Accountant at Urban Spaces",
  src: Fidutty,
}
,
{
  quote:
    "The interior design services transformed our workspace into a functional and aesthetically pleasing environment. Their creativity and attention to detail exceeded our expectations.",
  name: "Emily Watson",
  designation: "Interior Designer at CloudScale Interiors",
  src:Placeholder ,
},
{
  quote:
    "The civil engineering solutions were thorough and precise, ensuring our construction projects were completed efficiently and safely. Their expertise and problem-solving skills are remarkable.",
  name: "Arjun Menon",
  designation: "Civil Engineer at BuildTech Solutions",
  src: PlaceholderGirl,
}


  ];
  
  
  return <AnimatedTestimonials testimonials={testimonials} />;
}
