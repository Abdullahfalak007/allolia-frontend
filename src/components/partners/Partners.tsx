// // src/components/partners/Partners.tsx
// import React from "react";
// import { images } from "../../constants/images";

// const partnerLogos = [
//   images.partner1,
//   images.partner2,
//   images.partner3,
//   images.partner4,
//   images.partner5,
// ];

// const Partners: React.FC = () => (
//   <section id="partners-section" className="py-12 bg-gray-100">
//     <div className="max-w-7xl mx-auto px-4">
//       <h2 className="text-center text-xl font-semibold mb-8">
//         Nos partenaires
//       </h2>
//       <div
//         className="flex items-center justify-center space-x-6 md:space-x-10
//                    overflow-x-auto md:overflow-x-visible
//                    py-4 scrollbar-none"
//       >
//         {partnerLogos.map((logoSrc, idx) => (
//           <div key={idx} className="flex-shrink-0 w-24 md:w-32">
//             <img
//               src={logoSrc}
//               alt={`Partner ${idx + 1}`}
//               className="object-contain h-full w-full opacity-80 hover:opacity-100 transition-opacity"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default Partners;

// src/components/partners/PartnersSection.tsx
import React from "react";
import { images } from "../../constants/images";

const partnerLogos = [
  images.partner1,
  images.partner2,
  images.partner3,
  images.partner4,
  images.partner5,
  // …add more as needed
];

const PartnersSection: React.FC = () => (
  <section id="partners-section" className="py-12">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-center text-2xl font-semibold mb-16">
        Nos partenaires
      </h2>

      {/* marquee wrapper */}
      <div className="overflow-hidden">
        <div
          className="
            flex items-center
            space-x-6 md:space-x-10
            animate-marquee
          "
        >
          {/*
            Concatenate the array with itself so it scrolls continuously.
            We give each logo a fixed flex-shrink-0 width.
          */}
          {[...partnerLogos, ...partnerLogos].map((logoSrc, idx) => (
            <div key={idx} className="flex-shrink-0 w-24 md:w-32">
              <img
                src={logoSrc}
                alt={`Partner ${idx + 1}`}
                className="object-contain h-full w-full opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default PartnersSection;
