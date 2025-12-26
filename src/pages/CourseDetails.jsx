import { useParams, Link } from "react-router-dom";
// import Layout from "@/components/Layout";
import { courses } from "../data/courses";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";
import { useSnackbar } from "../contexts/SnackbarContext";
import { motion } from "motion/react";
import {
  ShoppingCart,
  Check,
  Clock,
  BookOpen,
  BarChart,
  User,
  ArrowLeft,
  AlertCircle,
} from "lucide-react";
import MainContainer from "../components/MainContainer";
import Layout from "../components/Layout";

export default function CourseDetails() {
  const { showSnackbar } = useSnackbar();
  const { id } = useParams();
  const { addToCart, isInCart } = useCart();
  const { isLoggedIn } = useAuth();

  const course = courses.find((c) => c.id === Number(id));
  const inCart = course ? isInCart(course.id) : false;

  const handleAddToCart = () => {
    if (!course) return;

    if (!isLoggedIn) {
      showSnackbar(
        "You need to be logged in to add courses to your cart.",
        "error"
      );

      return;
    }

    if (inCart) {
      showSnackbar("This course is already in your cart.", "error");
      return;
    }

    addToCart(course);
    showSnackbar(`${course.title} has been added to your cart.`, "success");
  };

  if (!course) {
    return (
      <div>
        <div className="py-20">
          <MainContainer>
            <div className="max-w-md mx-auto text-center">
              <div className="w-20 h-20 rounded-full bg-red-600/10 flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="w-10 h-10 text-red-600" />
              </div>
              <h1 className="text-3xl font-secondary font-bold  mb-4">
                Course Not Found
              </h1>
              <p className="text-muted mb-8">
                Sorry, we couldn't find the course you're looking for. It may
                have been removed or the URL is incorrect.
              </p>
              <Link to="/courses">
                <button className="flex items-center mx-auto text-white bg-primary px-6 py-2.5 rounded-2xl">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  <span>Back to Courses</span>
                </button>
              </Link>
            </div>
          </MainContainer>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="py-12 md:py-20"
      >
        <MainContainer>
          {/* Back Link */}
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-muted hover:text-black transition-colors mb-8 "
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Courses
          </Link>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="aspect-video rounded-2xl overflow-hidden mb-8">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span
                  className={`px-4 py-1.5 text-sm font-medium rounded-full bg-muted/10`}
                >
                  {course.level}
                </span>
                <span className="text-sm text-muted">{course.category}</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-secondary font-black mb-4">
                {course.title}
              </h1>

              <p className="text-lg text-muted mb-8">{course.description}</p>

              <div className="border-t border-border pt-8">
                <h2 className="text-xl font-secondary font-semibold  mb-4">
                  About This Course
                </h2>
                <p className="text-muted">{course.fullDescription}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1" style={{ animationDelay: "100ms" }}>
              <div className="bg-card p-6 rounded-2xl  sticky top-24">
                <div className="text-3xl font-secondary font-bold text-primary mb-6">
                  ${course.price}
                </div>

                <button
                  size="lg"
                  className={`w-full mb-6  flex items-center gap-2 text-white text-center font-bold justify-center py-3 rounded-2xl ${
                    !inCart ? "bg-primary" : "bg-muted/50 cursor-not-allowed!"
                  }`}
                  onClick={handleAddToCart}
                  disabled={inCart}
                >
                  <>
                    {inCart ? (
                      <>
                        <Check className="w-5 h-5" />
                        Added to Cart
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-5 h-5" />
                        Add to Cart{" "}
                      </>
                    )}
                  </>
                </button>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-10 h-10 bg-muted/10 rounded-lg flex items-center justify-center">
                      <User className="w-5 h-5 text-muted" />
                    </div>
                    <div>
                      <p className="text-muted">Instructor</p>
                      <p className="font-medium ">{course.instructor}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-10 h-10 bg-muted/10 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-muted" />
                    </div>
                    <div>
                      <p className="text-muted">Lessons</p>
                      <p className="font-medium ">
                        {course.lessonsCount} lessons
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-10 h-10 bg-muted/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-muted" />
                    </div>
                    <div>
                      <p className="text-muted">Duration</p>
                      <p className="font-medium text">{course.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-10 h-10 bg-muted/10 rounded-lg flex items-center justify-center">
                      <BarChart className="w-5 h-5 text-muted" />
                    </div>
                    <div>
                      <p className="text-muted">Level</p>
                      <p className="font-medium">{course.level}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MainContainer>
      </motion.div>
    </Layout>
  );
}
