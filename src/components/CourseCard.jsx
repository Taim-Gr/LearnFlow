import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";
import { courses } from "../data/courses";
import { ShoppingCart, Check, Clock, BookOpen } from "lucide-react";
import { useSnackbar } from "../contexts/SnackbarContext";
// Button
const CourseCard = ({ course, index = 0 }) => {
  const { showSnackbar } = useSnackbar();
  const { addToCart, isInCart } = useCart();
  const { isLoggedIn } = useAuth();
  const inCart = isInCart(course.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isLoggedIn) {
      showSnackbar(
        "You need to be logged in to add courses to your cart",
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

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="group bg-card rounded-2xl overflow-hidden"
    >
      <Link to={`/courses/${course.id}`} className="block">
        <div className="aspect-video overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span
            className={`px-3 py-1 text-xs font-medium rounded-full bg-muted/10 `}
          >
            {course.level}
          </span>
          <span className="text-xs text-muted">{course.category}</span>
        </div>

        <Link to={`/courses/${course.id}`}>
          <h3 className="font-secondary font-semibold text-lg  mb-2 line-clamp-2 group-hover:text-primary transition">
            {course.title}
          </h3>
        </Link>

        <p className="text-sm text-muted mb-4 line-clamp-2">
          {course.description}
        </p>

        <div className="flex items-center gap-4 text-xs text-muted mb-4">
          <span className="flex items-center gap-1">
            <BookOpen className="w-[17px] h-[17px]" />
            {course.lessonsCount} lessons
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-[17px] h-[17px]" />
            {course.duration}
          </span>
        </div>

        <div className="flex items-center justify-between pt-4  border-t border-black/10 ">
          <span className="text-xl font-secondary font-bold text-primary">
            ${course.price}
          </span>

          <div className="flex gap-2">
            <Link to={`/courses/${course.id}`}>
              <button className="px-3 text-sm font-semibold text-black/80 py-1 border border-black/20 rounded-xl">
                View Details
              </button>
            </Link>
            <button
              onClick={handleAddToCart}
              disabled={inCart}
              className={`${
                inCart ? "bg-muted/20" : "bg-primary"
              } px-3 py-1 rounded-xl text-white`}
            >
              {inCart ? (
                <Check className="w-4 h-4" />
              ) : (
                <ShoppingCart className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
