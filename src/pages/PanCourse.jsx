import CourseTemplate from "../components/CourseTemplate";

export default function PanCourse() {

  return (

    <CourseTemplate

      title="PAN Card Training"

      description="Learn PAN Registration, Correction, e-PAN Download and PAN-Aadhaar Linking."

      image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900"

      rating="4.8"

      learners="10,000"

      duration="30 Minutes"

      level="Beginner"

      startLink="/course/pan/learn"

      notes="/notes/pan.pdf"

      modules={[

        {
          title:"New PAN Application",
          description:"Apply for a new PAN card step-by-step.",
          link:"/course/pan/lesson1"
        },

        {
          title:"PAN Correction",
          description:"Update PAN details and corrections.",
          link:"/course/pan/lesson2"
        }

      ]}

    />

  );

}