import { useState } from "react";
import CourseCard from "../components/CourseCard";
import Pagination from "../components/Pagination";
import { courses } from "../data/courses";
import MainContainer from "../components/MainContainer";
import Layout from "../components/Layout";

const COURSES_PER_PAGE = 6;

const Courses = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(courses.length / COURSES_PER_PAGE);
  const currentCourses = courses.slice(
    (currentPage - 1) * COURSES_PER_PAGE,
    currentPage * COURSES_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Layout>
      <div>
        <title>Browse Courses - LearnFlow</title>
        <meta
          name="description"
          content="Explore our catalog of expert-led online courses. From web development to data science, find the perfect course for your learning journey."
        />
      </div>

      <div className="py-12 md:py-20">
        <MainContainer>
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl font-secondary font-bold  mb-4 ">
              Explore Our Courses
            </h1>
            <p className="text-muted">
              Discover {courses.length} courses designed to help you achieve
              your goals. From beginner to advanced, we have something for
              everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {currentCourses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </MainContainer>
      </div>
    </Layout>
  );
};

export default Courses;
