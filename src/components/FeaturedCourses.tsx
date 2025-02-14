"use client";
import Link from "next/link";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

const FeaturedCourses = () => {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12 bg-slate-900 h-auto md:h-screen">
      
        <div className="text-center">
          <h1 className="text-base md:text-lg text-teal-600 font-semibold uppercase tracking-wide">
            Featured Courses
          </h1>
          <p className="mt-3 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-40 justify-center mt-16">
        {featuredCourses.map((course) => (
          <div key={course.id} className="flex justify-center">
            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
              <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  {course.title}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                  {course.description}
                </p>
                <Link href={`/courses/${course.slug}`}>Learn More</Link>
              </div>
            </BackgroundGradient>
          </div>
        ))}
      </div>
      <div className="mt-20 text-center mb-20">
        <Link
          href={"/courses"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-100"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;
