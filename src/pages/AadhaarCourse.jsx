import CourseTemplate from "../components/CourseTemplate";

export default function AadhaarCourse() {

  return (

    <CourseTemplate

      title="Aadhaar Card Training"

      description="Learn Aadhaar Registration, Updates, eKYC, PVC Card, Biometric Authentication and Government Workflows."

      image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900"

      rating="4.9"

      learners="15,000"

      duration="40 Minutes"

      level="Beginner"

      startLink="/course/aadhaar/lesson1"

      notes="/notes/aadhaar.pdf"

      modules={[

        {
          title: "Aadhaar Registration",
          description:
            "Learn complete Aadhaar enrollment process.",
          link: "/course/aadhaar/lesson1",
        },

        {
          title: "Aadhaar Updates",
          description:
            "Name, DOB, Address, Mobile and Biometric updates.",
          link: "/course/aadhaar/lesson2",
        },

      ]}

    />

  );

}