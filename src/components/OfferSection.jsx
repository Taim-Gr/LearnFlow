import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import MainContainer from "./MainContainer";

export default function OfferSection() {
  return (
    <div className="py-20">
      <MainContainer>
        <div className="relative bg-dark text-white  rounded-3xl overflow-hidden p-10 md:p-16 text-center">
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
                <Sparkles className="w-[15px] h-[15px]" />
                Limited Time Offer
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-secondary font-bold mb-4">
              Ready to Start Learning?
            </h2>

            <p
              className="text-white/70 mb-8"
              style={{ animationDelay: "100ms" }}
            >
              Join our community of learners today and get access to hundreds of
              courses. Start building the skills that will shape your future.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center lg:items-start"
              style={{ animationDelay: "200ms" }}
            >
              <Link to="/courses">
                <button className="bg-primary text-white flex items-center gap-x-2 px-8 py-3 rounded-2xl transition  hover:-translate-y-1 font-bold">
                  Explore Courses
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>

              <Link to="/login">
                <button
                  variant="outline"
                  size="xl"
                  className="bg-transparent flex items-center gap-x-2 border-2 font-bold border-white/70 hover:bg-white/3 rounded-2xl px-8 py-3"
                >
                  Create Account
                </button>
              </Link>
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}
