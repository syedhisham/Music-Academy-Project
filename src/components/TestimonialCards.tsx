"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicTestimonials = [
  {
    quote:
      "This academy has transformed my music skills! The instructors are incredibly talented and supportive.",
    name: "Ayesha Khan",
    title: "Student, Vocal Training",
  },
  {
    quote:
      "A perfect place to learn and grow as a musician. The structured courses and practical sessions helped me a lot!",
    name: "Daniel Smith",
    title: "Guitar Enthusiast",
  },
  {
    quote:
      "The best music academy I’ve ever attended! The lessons are well-structured, and the mentors are industry professionals.",
    name: "Sophia Ahmed",
    title: "Piano Student",
  },
  {
    quote:
      "I always wanted to learn music production, and this academy made it possible. Highly recommended!",
    name: "Ryan Lee",
    title: "Music Producer",
  },
  {
    quote:
      "Learning music online has never been this easy. The interactive lessons and guidance are outstanding!",
    name: "Fatima Noor",
    title: "Online Course Student",
  },
];
const TestimonialCards = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of Success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-7xl">
                <InfiniteMovingCards 
                items={musicTestimonials}
                direction="right"
                speed="slow"
                />
            </div>
        </div>
    </div>
  )
};

export default TestimonialCards;
