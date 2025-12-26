import { Target, Lightbulb, Heart, Zap } from "lucide-react";
import MainContainer from "./MainContainer";

const features = [
  {
    icon: Target,
    title: "Expert Instructors",
    description:
      "Learn from industry professionals with years of real-world experience.",
  },
  {
    icon: Lightbulb,
    title: "Practical Learning",
    description:
      "Hands-on projects and exercises that prepare you for real challenges.",
  },
  {
    icon: Heart,
    title: "Supportive Community",
    description: "Connect with fellow learners and get help when you need it.",
  },
  {
    icon: Zap,
    title: "Learn at Your Pace",
    description:
      "Flexible schedules that fit your busy life. Learn anytime, anywhere.",
  },
];

export default function WhyUs() {
  return (
    <div className="py-20">
      <MainContainer>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-highlited text-sm font-medium rounded-full mb-4 ">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-secondary font-bold  mb-4">
            A Better Way to Learn
          </h2>
          <p className="text-muted">
            We believe everyone deserves access to quality education. Our
            platform makes learning engaging, accessible, and effective for
            everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-muted/3 p-6 rounded-2xl shadow-card card-hover text-center"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-secondary font-semibold text-lg  mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </MainContainer>
    </div>
  );
}
