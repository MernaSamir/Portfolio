import { map } from "lodash";
import React from "react";
import Linkedin from '../../assets/icons/linkedin.svg'
import Github from '../../assets/icons/github.svg'
import Instagram from '../../assets/icons/insta.svg'
import './footer.css'

export default function Footer() {
  const social = [
    {
      link: "https://www.linkedin.com/in/merna-samir-mosaad-7a22631611",
      img: Linkedin,
      alt: "  Linkedin",
    },
    {
      link: "https://github.com/MernaSamir",
      img:  Github,
      alt: "Github",
    },
    {
      link: "https://www.instagram.com/mirna_s_mosaad/?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr",
      img: Instagram,
      alt: "Instagram",
    },
   
  ];
  return (
    <section id="footer">
    <div className="footer container">
      <div className="brand">
        <h1>
          <span>M</span>irna <span>S</span>amir <span>M</span>ossad
        </h1>
      </div>
      <h2>Senior Frontend Developer</h2>
      <div className="social-icon">
        {map(social, (ele, i) => (
          <div class="social-item">
            <a href={ele.link}>
              <img src={ele.img} alt={ele.alt} />
            </a>
          </div>
        ))}
      </div>
      <p>Copyright © 2020 Mirna. All rights reserved</p>
    </div>
    </section>
  );
}
