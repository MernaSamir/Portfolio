import React from "react";
import Me from "../../assets/images/me.png";
import './style.css'
export default function AboutME() {
    const  DownloadResume = () => {
        console.log("hna")
        // Define the path to your resume file
        const resumeFilePath = './my-cv.pdf'; // Update with your actual file path
    
        // Create an invisible anchor element to trigger the download
        const downloadLink = document.createElement('a');
        downloadLink.href = resumeFilePath;
        downloadLink.download = 'MirnaSamirMosaad.pdf'; // Set the desired download filename
    
        // Trigger a click event to initiate the download
        downloadLink.click();
      }
  return (
    <section id="about">
      <div class="about container">
        <div class="col-left">
          <div class="about-img">
            <img src={Me} alt="Personal" />
          </div>
        </div>
        <div class="col-right">
          <h1 class="section-title">
            About <span>me</span>
          </h1>
          <h2>Senior Front End Developer</h2>
          <p>
            I’ve been working as a front-end web developer for 
            years, and now seek a new challenge. I think my experience and
            skills in JavaScript, HTML, and CSS , Reactjs , Nextjs, TypeScript and ReactNative make
            me perfect for this role. I’ve worked in large development teams
            that have sharpened my technical skills, improved my communication,
            and made me understand what it takes to meet tight deadlines. I’ve
            recently developed web-based applications for a project management
            client. My involvement as a designer and a front-end developer has
            given me the opportunity to manage a diverse range of client
            requests. I have also proven myself as a team player, which is
            another crucial requirement for this role. My keen interest in
            programming and design helps me find creative solutions to technical
            challenges and develop visually appealing websites. My extensive
            knowledge of technical standards helps me manage
            projects efficiently.
          </p>
          <p className="cta" onClick={DownloadResume}>
            Download Resume
          </p>
        </div>
      </div>
    </section>
  );
}
