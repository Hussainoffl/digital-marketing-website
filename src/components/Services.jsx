// on click effect
// import { useState } from "react";

// function Services() {
//   const [activeCard, setActiveCard] = useState(null);

//   const handleCardClick = (index) => {
//     setActiveCard(activeCard === index ? null : index);
//   };

//   return (
//     <section className="page">
//       <div className="services-header">
//         <h1>Our Services</h1>

//         <p>
//           We help businesses grow online with data-driven digital
//           marketing strategies designed to increase traffic,
//           generate leads, and boost sales.
//         </p>
//       </div>

//       <div className="services-grid">

//         {/* SEO */}
//         <div
//           className={`service-card ${activeCard === 0 ? "active" : ""}`}
//           onClick={() => handleCardClick(0)}
//         >
//           <div className="card-inner">

//             <div className="card-front">
//               <h2>🔍 SEO Optimization</h2>
//               <p>Click to view details</p>
//             </div>

//             <div className="card-back">
//               <p>
//                 Improve your website's visibility on search engines and
//                 attract high-quality organic traffic.
//               </p>

//               <ul>
//                 <li>Keyword Research</li>
//                 <li>On-Page SEO</li>
//                 <li>Technical SEO</li>
//                 <li>Link Building</li>
//               </ul>
//             </div>

//           </div>
//         </div>

//         {/* Social Media */}
//         <div
//           className={`service-card ${activeCard === 1 ? "active" : ""}`}
//           onClick={() => handleCardClick(1)}
//         >
//           <div className="card-inner">

//             <div className="card-front">
//               <h2>📱 Social Media Marketing</h2>
//               <p>Click to view details</p>
//             </div>

//             <div className="card-back">
//               <p>
//                 Build a strong brand presence and engage customers through
//                 social media platforms.
//               </p>

//               <ul>
//                 <li>Instagram Marketing</li>
//                 <li>Facebook Campaigns</li>
//                 <li>LinkedIn Growth</li>
//                 <li>Content Creation</li>
//               </ul>
//             </div>

//           </div>
//         </div>

//         {/* Google Ads */}
//         <div
//           className={`service-card ${activeCard === 2 ? "active" : ""}`}
//           onClick={() => handleCardClick(2)}
//         >
//           <div className="card-inner">

//             <div className="card-front">
//               <h2>🎯 Google Ads</h2>
//               <p>Click to view details</p>
//             </div>

//             <div className="card-back">
//               <p>
//                 Generate quality leads and maximize ROI through targeted
//                 paid advertising campaigns.
//               </p>

//               <ul>
//                 <li>Search Ads</li>
//                 <li>Display Ads</li>
//                 <li>Remarketing</li>
//                 <li>Conversion Tracking</li>
//               </ul>
//             </div>

//           </div>
//         </div>
//         {/* web development */}
//         <div
//           className={`service-card ${activeCard === 3 ? "active" : ""}`}
//           onClick={() => handleCardClick(3)}
//         >
//           <div className="card-inner">

//             <div className="card-front">
//               <h2>🔍Web DEvelopment</h2>
//               <p>Click to view details</p>
//             </div>

//             <div className="card-back">
//               <p>
//                 Create modern websites that provide excellent user
//                 and drive conversions.
//               </p>

//               <ul>
//                 <li>Responsive Design</li>
//                 <li>React Development</li>
//                 <li>Landing Pages</li>
//                 <li>Performance Optimization</li>
//               </ul>
//             </div>

//           </div>
//         </div>

//       </div>



//     </section>
//   );
// }

// export default Services;


function Services() {
  return (
    <section className="page">

      <div className="services-header">
        <h1>Our Services</h1>

        <p>
          We help businesses grow online with data-driven digital
          marketing strategies designed to increase traffic,
          generate leads, and boost sales.
        </p>
      </div>

      <div className="services-grid">

        {/* SEO */}
        <div className="service-card">
          <div className="card-inner">
            <div className="card-front">
              <h2>🔍 SEO Optimization</h2>
            </div>

            <div className="card-back">
              <p>
                Improve your website's visibility on search engines and
                attract high-quality organic traffic.
              </p>

              <ul>
                <li>Keyword Research</li>
                <li>On-Page SEO</li>
                <li>Technical SEO</li>
                <li>Link Building</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="service-card">
          <div className="card-inner">
            <div className="card-front">
              <h2>📱 Social Media Marketing</h2>
            </div>

            <div className="card-back">
              <p>
                Build a strong brand presence and engage customers through
                social media platforms.
              </p>

              <ul>
                <li>Instagram Marketing</li>
                <li>Facebook Campaigns</li>
                <li>LinkedIn Growth</li>
                <li>Content Creation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Google Ads */}
        <div className="service-card">
          <div className="card-inner">
            <div className="card-front">
              <h2>🎯 Google Ads</h2>
            </div>

            <div className="card-back">
              <p>
                Generate quality leads and maximize ROI through targeted
                paid advertising campaigns.
              </p>

              <ul>
                <li>Search Ads</li>
                <li>Display Ads</li>
                <li>Remarketing</li>
                <li>Conversion Tracking</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Web Development */}
        <div className="service-card">
          <div className="card-inner">
            <div className="card-front">
              <h2>💻 Web Development</h2>
            </div>

            <div className="card-back">
              <p>
                Create modern websites that provide excellent user
                experience and drive conversions.
              </p>

              <ul>
                <li>Responsive Design</li>
                <li>React Development</li>
                <li>Landing Pages</li>
                <li>Performance Optimization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Content Marketing */}
        <div className="service-card">
          <div className="card-inner">
            <div className="card-front">
              <h2>✍️ Content Marketing</h2>
            </div>

            <div className="card-back">
              <p>
                Create valuable content that attracts, engages,
                and converts potential customers.
              </p>

              <ul>
                <li>Blog Writing</li>
                <li>Copywriting</li>
                <li>Email Marketing</li>
                <li>Content Strategy</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Analytics */}
        <div className="service-card">
          <div className="card-inner">
            <div className="card-front">
              <h2>📊 Analytics & Reporting</h2>
            </div>

            <div className="card-back">
              <p>
                Track campaign performance and make smarter business
                decisions using real-time data.
              </p>

              <ul>
                <li>Google Analytics</li>
                <li>Performance Reports</li>
                <li>Conversion Analysis</li>
                <li>ROI Tracking</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Services;