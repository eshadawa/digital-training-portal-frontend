import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import certificateImage from "../assets/certificate4.png";
import "./CertificatePage.css";

export default function VoterCertificate() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const name = user?.name || "Student";

  const downloadCertificate = async () => {
    const input = document.getElementById("certificate");

    const canvas = await html2canvas(input, {
      scale: 2,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("landscape", "px", "a4");

    pdf.addImage(imgData, "PNG", 0, 0, 842, 595);

    pdf.save("Voter-ID-Certificate.pdf");
  };

  return (
    <div className="certificate-page">
      <h1 className="certificate-title">
        🎉 Congratulations!
      </h1>

      <p>
        You have successfully completed the Voter ID Training Course.
      </p>

      <div className="certificate-wrapper">
        <div
          id="certificate"
          className="certificate"
          style={{
            backgroundImage: `url(${certificateImage})`,
          }}
        >
          <h1 className="certificate-name">
            {name}
          </h1>
        </div>
      </div>

      <button
        onClick={downloadCertificate}
        className="download-btn"
      >
        Download Certificate
      </button>
    </div>
  );
}