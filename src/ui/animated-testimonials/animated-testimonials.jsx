import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div
      className="mx-auto max-w-xs px-3 py-8 font-sans antialiased sm:max-w-sm sm:px-4 sm:py-12 md:max-w-4xl md:px-8 md:py-20 lg:px-12">
      <div className="relative grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2 md:gap-20">
        <div>
          <div className="relative h-64 w-full sm:h-72 md:h-80">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.src}
                className="absolute inset-0 origin-bottom transition-all duration-300 ease-in-out"
                style={{
                  opacity: index === active ? 1 : 0.7,
                  transform: `scale(${index === active ? 1 : 0.95}) translateY(${index === active ? 0 : 0}px)`,
                  zIndex: index === active ? 40 : testimonials.length + 2 - index,
                }}>
                <img
                  src={testimonial.src}
                  alt={testimonial.name}
                  width={500}
                  height={500}
                  draggable={false}
                  className="h-full w-full rounded-3xl object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between py-2 sm:py-4">
          <div className="transition-opacity duration-200 ease-in-out">
            <h3 className="text-xl font-bold text-black dark:text-white sm:text-2xl">
              {testimonials[active].name}
            </h3>
            <p className="text-xs text-gray-500 dark:text-neutral-500 sm:text-sm">
              {testimonials[active].designation}
            </p>
            <p className="mt-4 text-sm text-gray-500 dark:text-neutral-300 sm:mt-6 sm:text-base md:mt-8 md:text-lg">
              {testimonials[active].quote}
            </p>
          </div>
          <div className="flex justify-center gap-4 pt-6 sm:pt-8 md:justify-start md:pt-0">
            <button
              onClick={handlePrev}
              className="group/button flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800 sm:h-7 sm:w-7">
              <IconArrowLeft
                className="h-4 w-4 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400 sm:h-5 sm:w-5"
              />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800 sm:h-7 sm:w-7">
              <IconArrowRight
                className="h-4 w-4 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400 sm:h-5 sm:w-5"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
