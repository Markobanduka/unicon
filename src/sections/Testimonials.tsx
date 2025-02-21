import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import Card from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Mr. Dejan Kostic",
    position: "Managing Director",
    nationality: "Serbian",
    qualification: "B.Sc. Economics",
    experience: "29 years",
    avatar: memojiAvatar1,
  },
  {
    name: "Mrs. Zorana Kostic",
    position: "General Manager",
    nationality: "Serbian",
    qualification: "Masters. Sc. Civil Engineering, (Chartered Engineer)",
    experience: "29 years",
    avatar: memojiAvatar2,
  },
  {
    name: "Bernard Raruoch",
    position: "Project Manager / Technical Manager",
    nationality: "Kenyan",
    qualification: "Diploma in Electrical Engineering",
    experience: "30 years",
    avatar: memojiAvatar3,
  },
  {
    name: "Ian Forbes",
    position: "Contracts Manager",
    nationality: "British",
    qualification: "Chartered Quantity Surveyor",
    experience: "46 years",
    avatar: memojiAvatar4,
  },
  {
    name: "Rade Bozic",
    position: "Plant, Equipment & Workshop Manager",
    nationality: "Serbian",
    qualification: "Mechanical Engineer",
    experience: "48 years",
    avatar: memojiAvatar5,
  },
  {
    name: "Ssekiro Levi",
    position: "Foreman Instrumentation",
    nationality: "Ugandan",
    qualification: "Diploma in Electrical Engineering",
    experience: "8 years",
    avatar: memojiAvatar1,
  },
  {
    name: "Simon Mateka",
    position: "Plumbing Foreman",
    nationality: "Ugandan",
    qualification: "Diploma in Mechanical Engineering",
    experience: "18 years",
    avatar: memojiAvatar2,
  },
  {
    name: "Anthony Andany",
    position: "Site Foreman - HVAC and plumbing",
    nationality: "Kenyan",
    qualification: "Higher Diploma plumbing",
    experience: "23 years",
    avatar: memojiAvatar3,
  },
  {
    name: "Robert Assimwe",
    position: "Finance & Administration",
    nationality: "Ugandan",
    qualification: "Accountant",
    experience: "20 years",
    avatar: memojiAvatar4,
  },
  {
    name: "Augustine Matovu",
    position: "Linesman HV Trade Test Grade II",
    nationality: "Ugandan",
    qualification: "Foreman/Linesman Overhead lines",
    experience: "12 years",
    avatar: memojiAvatar5,
  },
  {
    name: "Stephen Odongo",
    position: "IT, CCTV, Fire detection Foreman",
    nationality: "Ugandan",
    qualification: "IT & Telecommunication Engineering",
    experience: "7 years",
    avatar: memojiAvatar1,
  },
  {
    name: "Joseph Opio",
    position: "Site Foreman",
    nationality: "Ugandan",
    qualification: "Diploma in Electrical Engineering, Class B “ERA” permit",
    experience: "20 years",
    avatar: memojiAvatar2,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Our Team"
          title="The Professionals Who Make It Happen"
          description="Below we have a list of some of our staff with their qualification and years of experience."
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[
              ...new Array(2).fill(0).map((_, index) => (
                <Fragment key={index}>
                  {testimonials.map((testimonial) => (
                    <Card
                      key={testimonial.name}
                      className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                    >
                      <div className="flex gap-4 items-center">
                        <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="max-h-full"
                          />
                        </div>
                        <div>
                          <div className="font-semibold">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-white/40">
                            {testimonial.position}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-6 text-sm md:text-base">
                        <ul>
                          <li>
                            <span className="text-white/50">Nationality: </span>
                            {testimonial.nationality}
                          </li>
                          <li>
                            <span className="text-white/50">
                              Qualification:{" "}
                            </span>
                            {testimonial.qualification}
                          </li>
                          <li>
                            <span className="text-white/50">Experience: </span>
                            {testimonial.experience}
                          </li>
                        </ul>
                      </div>
                    </Card>
                  ))}
                </Fragment>
              )),
            ]}
          </div>
        </div>
      </div>
    </div>
  );
};
