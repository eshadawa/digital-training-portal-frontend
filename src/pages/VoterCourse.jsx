import CourseTemplate from "../components/CourseTemplate";

export default function VoterCourse() {

  return (

    <CourseTemplate

      title="Voter ID Training"

      description="Learn Voter ID Registration, Corrections, EPIC Download and Verification."

      image="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=900"

      rating="4.8"

      learners="8,000"

      duration="25 Minutes"

      level="Beginner"

      startLink="/course/voter/learn"

      notes="/notes/voter.pdf"

      modules={[

        {
          title:"New Registration",
          description:"Apply for a new Voter ID.",
          link:"/course/voter/lesson1"
        },

        {
          title:"Correction & Verification",
          description:"Correct and verify voter details.",
          link:"/course/voter/lesson2"
        }

      ]}

    />

  );

}
