import { Link } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import certificate from "../assets/certificate1.png";

export default function CourseCompleted() {

  console.log("CourseCompleted Loaded");

  localStorage.setItem("digilockerCompleted", "true");

  const user = JSON.parse(localStorage.getItem("user"));
  const name = user?.name || "Student";
  

  const downloadCertificate = async () => {
    localStorage.setItem("digilockerCompleted", "true");
    const input = document.getElementById("certificate");
    
    const canvas = await html2canvas(input, {
      scale: 2,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("landscape", "px", "a4");

    const pageWidth = pdf.internal.pageSize.getWidth();
const pageHeight = pdf.internal.pageSize.getHeight();

pdf.addImage(imgData, "PNG", 0, 0, pageWidth, pageHeight);

    pdf.save("DigiLocker-Certificate.pdf");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f3f6fb",
        padding: "40px",
      }}
    >
      {/* Congratulations Card */}

      <div
        style={{
          width: "700px",
          background: "white",
          padding: "50px",
          borderRadius: "20px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,.15)",
          margin: "auto",
        }}
      >
        <h1 style={{ color: "#16a34a", fontSize: "45px" }}>
          🎉 Congratulations!
        </h1>

        <h2>Hello, {name}</h2>

        <p style={{ fontSize: "20px", marginTop: "20px" }}>
          You have successfully completed the
        </p>

        <h2 style={{ color: "#2563eb" }}>
          DigiLocker Training Course
        </h2>

        <p>Your certificate is ready.</p>

        <button
          onClick={downloadCertificate}
          style={{
            marginTop: "30px",
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "16px 40px",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          Download Certificate
        </button>

        <br />
        <br />

        <Link to="/">Back to Home</Link>
      </div>

      {/* Hidden Certificate */}

      <div
        id="certificate"
        style={{
          width: "1200px",
          height: "895px",
          margin: "50px auto",
          backgroundImage: `url(${certificate})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          position: "absolute",
          backgroundRepeat: "no-repeat",

          /* Screen par nahi dikhega */
          left: "-9999px",
          top: "0px",
        }}
      >
        {/* Name */}

        <h1
  style={{
    position: "absolute",
    top: "430px",          // 👈 niche shift
    left: "0",
    width: "100%",
    textAlign: "center",
    fontSize: "42px",
    fontWeight: "bold",
    color: "#000",
    fontFamily: "Georgia, serif",
  }}
>
  {name}
</h1>

        {/* Course */}

        <h2
          style={{
            position: "absolute",
            top: "315px",
            width: "100%",
            textAlign: "center",
            fontSize: "22px",
          }}
        >
          Successfully Completed DigiLocker Training
        </h2>

      </div>
    </div>
  );
}