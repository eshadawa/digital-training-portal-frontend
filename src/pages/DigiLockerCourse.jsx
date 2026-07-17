import CourseTemplate from "../components/CourseTemplate";

export default function DigiLockerCourse() {

  return (

    <CourseTemplate

      title="DigiLocker Training"

      description="Learn DigiLocker from scratch with practical demonstrations, official government workflows and quizzes."

      image="https://img.youtube.com/vi/roQ-fHoCw_c/maxresdefault.jpg"

      rating="4.9"

      learners="12,000"

      duration="35 Minutes"

      level="Beginner"

      startLink="/course/digilocker/learn"

      notes="/notes/digilocker.pdf"

      modules={[

        {
          title: "DigiLocker Basics",
          description:
            "Introduction to DigiLocker, account creation and dashboard overview.",
          link: "/course/digilocker/lesson1",
        },

        {
          title: "Upload & Manage Documents",
          description:
            "Upload certificates, manage folders and organize documents.",
          link: "/course/digilocker/lesson2",
        },

        {
          title: "Share Documents",
          description:
            "Share files securely using official DigiLocker services.",
          link: "/course/digilocker/lesson3",
        },

      ]}

    />

  );

}