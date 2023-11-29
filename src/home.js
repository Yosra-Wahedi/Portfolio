
import "./home.css"
export default function HomePage(){
  const pdfFile_url= "http://localhost:3000/CV.pdf"
  const downloadFileURL=(url)=>{
fetch(url).then(response=>response.blob()).then(blob=>{
  const bloburl= window.URL.createObjectURL(new Blob([blob]))
  const fileName= url.split("./").pop();
const aTag = document.createElement("a");
aTag.href= bloburl;
aTag.setAttribute("download",fileName);
document.body.appendChild(aTag);
aTag.click();
aTag.remove();
})
  }
    return(
         <section id="features" className="black-section">
         <div className='row' id = "home">
    <div className="container-fluid">
    <img src='image/photo.png' alt='homePhoto' className="home-img"/>
     <h2 className="feature-title">Web Developer</h2>
    <h1>Yosra Wahedi</h1>
    <p>"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle."  Christian D. Larson</p>
    <button className="btn btn-outline-warning btn-lg" onClick={()=>{downloadFileURL(pdfFile_url)}}>Dowload CV</button>
    </div>
  </div>
  </section>
    )
}