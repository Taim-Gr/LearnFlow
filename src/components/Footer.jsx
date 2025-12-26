import { Link } from "react-router-dom";
import {
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Link as Link2,
} from "lucide-react";
import MainContainer from "./MainContainer";

export default function Footer() {
  return (
    <footer className="bg-dark text-white/90 py-16">
      <MainContainer>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <Link
              to="/"
              className="flex items-center gap-2 text-xl font-secondary font-semibold mb-4"
            >
              <GraduationCap className="w-8 h-8 text-primary" />
              <span>LearnFlow</span>
            </Link>
            <p className="text-white/70 text-sm max-w-sm">
              Empowering learners worldwide with high-quality courses taught by
              industry experts. Start your learning journey today.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-secondary font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-white/70 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-sm text-white/70 hover:text-primary transition-colors"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="text-sm text-white/70 hover:text-primary transition-colors"
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-sm text-white/70 hover:text-primary transition-colors"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-secondary font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Mail className="w-4 h-4 text-primary" />
                hello@learnflow.com
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Phone className="w-4 h-4 text-primary" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                123 Learning Street
                <br />
                San Francisco, CA 94102
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-sm text-white/50 flex flex-col items-center">
            <span>
              {" "}
              © {new Date().getFullYear()} LearnFlow. All rights reserved.
            </span>
            <span className="flex items-center gap-2">
              Coded By Taim Jr{" "}
              <Link target="_blank" to={"https://taimjr.netlify.app/"}>
                <Link2 className="w-4 h-4 text-primary" />
              </Link>
            </span>
          </p>
        </div>
      </MainContainer>
    </footer>
  );
}
