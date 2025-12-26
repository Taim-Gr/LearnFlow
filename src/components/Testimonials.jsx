import { Star, Quote } from "lucide-react";
import MainContainer from "./MainContainer";

const testimonials = [
  {
    name: "Jessica Martinez",
    role: "Software Developer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    content:
      "LearnFlow completely transformed my career. The React course helped me land my dream job at a tech startup. The instructors are amazing!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    content:
      "The UI/UX course was exactly what I needed. Practical projects and real-world examples made learning enjoyable. Highly recommend!",
    rating: 5,
  },
  {
    name: "Sarah Thompson",
    role: "Data Analyst",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    content:
      "I went from knowing nothing about data science to analyzing real datasets. The Python course is comprehensive and well-structured.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="py-20 bg-base/60">
      <MainContainer>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10  text-sm font-medium rounded-full mb-4 ">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-secondary font-bold  mb-4 ">
            What Our Students Say
          </h2>
          <p className="text-muted">
            Join thousands of satisfied learners who have transformed their
            careers with LearnFlow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-white p-6 rounded-2xl  relative"
            >
              <Quote className="absolute top-6 right-6 w-[33px] h-[33px] text-primary/20" />

              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-[62px] h-[62px] rounded-full object-cover"
                />
                <div>
                  <h4 className="font-secondary font-semibold ">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-[15px] h-[15px] fill-primary text-primary"
                  />
                ))}
              </div>

              <p className="text-muted text-sm ">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </MainContainer>
    </div>
  );
}
