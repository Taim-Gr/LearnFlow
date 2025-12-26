import { Link } from "react-router-dom";
import { courses } from "../data/courses";
import CourseCard from "./CourseCard";
import { ArrowRight } from "lucide-react";
import MainContainer from "./MainContainer";
// button
export default function FeaturedCourses() {
  const featuredCourses = courses.slice(0, 3);

  return (
    <div className="py-20 bg-base">
      <MainContainer>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="inline-block px-4 py-2 bg-blue-100 text-highlited text-sm font-medium rounded-full mb-4">
              Featured Courses
            </span>
            <h2 className="text-3xl md:text-4xl font-secondary font-bold ">
              Start Your Journey
            </h2>
          </div>
          <Link to="/courses">
            <button className="flex items-center gap-2 bg-transparent border-2 font-bold border-primary text-primary px-8 py-2.5 rounded-2xl">
              View All Courses
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </MainContainer>
    </div>
  );
}
