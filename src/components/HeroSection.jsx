import { Link } from "react-router-dom";
import { ArrowRight, Play, Users, BookOpen, Award } from "lucide-react";
import MainContainer from "./MainContainer";
import heroImage from "../assets/images/HeroSection.jpg";
export default function HeroSection() {
  return (
    <div className="bg-base w-full min-h-screen flex items-center">
      <MainContainer>
        <div className="flex flex-col text-center py-1 justify-center lg:flex-row lg:justify-normal lg:text-left items-center gap-20">
          {/* first */}
          <div className="flex flex-col">
            <span className="inline-block px-4 py-2 bg-secondary text-highlited bg-blue-100 text-sm font-medium rounded-full mb-6  w-fit mx-auto lg:mx-0">
              🎓 Start Learning Today
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-secondary font-bold mb-6">
              Unlock Your <span className="text-primary">Potential</span>
              <br />
              With Expert Courses
            </h1>
            <p className="text-lg text-muted max-w-xl mx-auto lg:mx-0 mb-8">
              Join thousands of learners mastering new skills with our curated
              courses taught by industry professionals. Start your journey to
              success today.
            </p>
            <div className="flex mx-auto md:mx-0 flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link to="/courses">
                <button className="bg-primary text-white flex items-center gap-x-2 px-8 py-3 rounded-2xl transition  hover:-translate-y-1">
                  Explore Courses
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <button className="bg-transparent flex items-center gap-x-2 border border-muted/10 hover:border-primary/30 rounded-2xl px-8 py-3">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>
            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8">
              <div className="flex items-center gap-3">
                <div className="w-[47px] h-[47px] bg-primary/10 rounded-xl flex items-center justify-center">
                  <Users className="w-[25px] h-[25px] text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-secondary font-bold text-dark">
                    10K+
                  </p>
                  <p className="text-sm text-muted">Active Learners</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-[47px] h-[47px] bg-highlited/20 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-[25px] h-[25px] text-highlited" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-secondary font-bold text-dark">
                    200+
                  </p>
                  <p className="text-sm text-muted">Expert Courses</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-[47px] h-[47px]  rounded-xl flex items-center justify-center">
                  <Award className="w-[25px] h-[25px] text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-secondary font-bold text-dark">
                    95%
                  </p>
                  <p className="text-sm text-muted">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
          {/* second */}
          {/* Image */}
          <div className="relative ">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={heroImage}
                alt="Students"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}
