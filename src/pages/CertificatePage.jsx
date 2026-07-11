import certificate from "../assets/certificate1.png";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function CertificatePage() {

  const user = JSON.parse(localStorage.getItem("user"));

  const name = user?.name || "Student";

  const downloadCertificate = async () => {

    const input = document.getElementById("certificate");

    const canvas = await html2canvas(input,{
      scale:2
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("landscape","px","a4");

    pdf.addImage(imgData,"PNG",0,0,842,595);

    pdf.save("DigiLocker-Certificate.pdf");

  };

  return (

    <div
      style={{
        textAlign:"center",
        padding:"40px",
        background:"#f3f4f6",
        minHeight:"100vh"
      }}
    >

      <h1>🎉 Congratulations!</h1>

      <p>
        You have successfully completed the DigiLocker Training Course.
      </p>

      <div
        id="certificate"
        style={{
          width:"842px",
          height:"595px",
          margin:"40px auto",
          backgroundImage:`url(${certificate})`,
          backgroundSize:"cover",
          position:"relative"
        }}
      >

        <h1
          style={{
            position:"absolute",
            top:"280px",
            width:"100%",
            textAlign:"center",
            fontSize:"36px"
          }}
        >
          {name}
        </h1>

      </div>

      <button

        onClick={downloadCertificate}

        style={{
          padding:"15px 35px",
          background:"#2563eb",
          color:"white",
          border:"none",
          borderRadius:"10px",
          cursor:"pointer",
          fontSize:"18px"
        }}

      >
        Download Certificate
      </button>

    </div>

  );

}