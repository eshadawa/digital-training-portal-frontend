import certificate from "../assets/certificate4.png";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function VoterCertificate() {

  localStorage.setItem("voterCompleted", "true");

  const user = JSON.parse(localStorage.getItem("user"));
  const name = user?.name || "Student";

  const downloadCertificate = async () => {

    const input = document.getElementById("certificate");

    const canvas = await html2canvas(input, {
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [842, 595],
    });

    pdf.addImage(imgData, "PNG", 0, 0, 842, 595);

    pdf.save("Voter-ID-Certificate.pdf");
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px",
        background: "#f3f4f6",
        minHeight: "100vh",
      }}
    >
      <h1>🎉 Congratulations!</h1>

      <p
        style={{
          fontSize: "24px",
          marginBottom: "30px",
        }}
      >
        You have successfully completed the Voter ID Training Course.
      </p>

      <div
        id="certificate"
        style={{
          width: "842px",
          height: "595px",
          margin: "40px auto",
          backgroundImage: `url(${certificate})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <h1
          style={{
            position: "absolute",
            top: "280px",
            width: "100%",
            textAlign: "center",
            fontSize: "36px",
            fontWeight: "bold",
          }}
        >
          {name}
        </h1>
      </div>

      <button
        onClick={downloadCertificate}
        style={{
          padding: "15px 35px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "18px",
        }}
      >
        Download Certificate
      </button>
    </div>
  );
}