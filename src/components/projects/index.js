import React from "react";
import MoreWorld from "../../assets/images/more-world.png";
import EdenVerve from "../../assets/images/eden-verve.png";
import Xena from "../../assets/images/xena.png";
import { map } from "lodash";
import './style.css'
export default function Projects() {
  const projects = [
    {
      title1: "More World",
      title2: "Flights & Hotels Booking System",
      description: `Book flights, hotels, and car rentals in one place.
    User-friendly interface for comparing options. Secure
    payment processing and itinerary management. Access traveler
    reviews and 24/7 customer support. Mobile-responsive for
    easy on-the-go bookings.`,
      img: MoreWorld,
      alt: "Project for Flights and Hotels",
    },
    {
      title1: "Eden Verve",
      title2: "Office Ordering System",
      description: `The Company Order System with seat-based QR integration
    enables employees to conveniently place orders with custom
    modifiers directly from their workstations. This system
    streamlines requests to office personnel, enhancing office
    efficiency and ensuring accurate order fulfillment.`,
      img: EdenVerve,
      alt: "Office Ordering System",
    },
    {
      title1: "Xena",
      title2: "Point Of Sale",
      description: `The Point of Sale (POS) system offers multiple modes for
    various business needs, including Dine-In, Takeaway, Call
    Center, and Catering. These modes streamline order
    management, payment processing, and delivery logistics,
    ensuring a seamless customer experience. The POS system is
    also equipped with a comprehensive reporting system that
    provides valuable insights into sales, inventory, and
    customer preferences. This data-driven approach helps
    businesses make informed decisions, enhance operational
    efficiency, and drive growth.`,
      img: Xena,
      alt: "Point Of Sale",
    },
  ];
  return (
    <section id="projects">
      <div class="projects container">
        <div class="projects-header">
          <h1 class="section-title">
            Recent <span>Projects</span>
          </h1>
        </div>
        <div class="all-projects">
          {map(projects, (project, i) => (
            <div class="project-item">
              <div class="project-info">
                <h1>{project.title1}</h1>
                <h2>{project.title2}</h2>

                <p>{project.description}</p>
              </div>
              <div class="project-img">
                <img src={project.img} alt={project.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
