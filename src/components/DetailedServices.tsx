// Detailed Services Section - expanded information for each of the 7 services
const PHONE = "424-424-1579";

const detailedServices = [
  {
    id: "air-duct-cleaning",
    title: "Air Duct Cleaning",
    description: [
      "Your air ducts are the lungs of your home. Over time, they collect dust, pollen, pet dander, mold spores, and other contaminants that circulate every time your HVAC system runs.",
      "Our professional air duct cleaning service uses powerful vacuum equipment and specialized tools to thoroughly clean your entire duct system. We remove years of buildup, improving your indoor air quality and helping your system run more efficiently.",
      "Whether you've just moved into a new home, completed a renovation, or simply haven't had your ducts cleaned in years, our team can help restore clean, healthy air to your living space."
    ],
    bullets: [
      "Complete inspection of your duct system before and after cleaning",
      "Removal of dust, debris, allergens, and contaminants",
      "Cleaning of all supply and return air ducts",
      "Register and grille cleaning included",
      "Same-day appointments available for urgent needs"
    ]
  },
  {
    id: "duct-repair",
    title: "Duct Repair",
    description: [
      "Damaged or leaky ductwork can waste up to 30% of the air your HVAC system produces. This means higher energy bills, uneven temperatures throughout your home, and extra strain on your heating and cooling equipment.",
      "Our duct repair services address leaks, disconnected sections, crushed ducts, and other damage that compromises your system's performance. We use professional-grade materials and techniques to ensure lasting repairs.",
      "If you've noticed hot or cold spots in your home, unusual dust accumulation, or rising energy bills, your ductwork may need attention."
    ],
    bullets: [
      "Leak detection and sealing",
      "Repair of disconnected or damaged sections",
      "Insulation repair and replacement",
      "Flexible duct replacement",
      "24/7 emergency repair service for urgent issues"
    ]
  },
  {
    id: "dryer-vent-cleaning",
    title: "Dryer Vent Cleaning",
    description: [
      "Clogged dryer vents are one of the leading causes of home fires in the United States. Lint buildup restricts airflow, causing your dryer to overheat and creating a serious fire hazard.",
      "Our dryer vent cleaning service removes lint, debris, and obstructions from your entire vent line - from the dryer connection to the exterior exhaust. This not only reduces fire risk but also improves dryer efficiency and extends the life of your appliance.",
      "If your clothes are taking longer to dry, your dryer feels hot to the touch, or you notice a burning smell, don't wait - call us immediately for same-day service."
    ],
    bullets: [
      "Complete lint and debris removal",
      "Inspection of vent line for damage or obstructions",
      "Exterior vent cap cleaning and inspection",
      "Dryer connection inspection",
      "Same-day emergency service for fire risk situations"
    ]
  },
  {
    id: "system-inspections",
    title: "System Inspections",
    description: [
      "Regular inspections help identify problems before they become expensive emergencies. Our comprehensive system inspections cover your air ducts, dryer vent, and chimney (if applicable) to give you a complete picture of your home's air quality systems.",
      "Whether you're buying a new home, preparing for a sale, or simply want peace of mind, our detailed inspection reports provide clear information about the condition of your systems and any recommended maintenance or repairs.",
      "We offer several inspection packages to meet different needs, from pre-purchase inspections to annual checkups."
    ],
    bullets: [
      "Visual inspection of all accessible ductwork",
      "Dryer vent safety assessment",
      "Chimney inspection (if applicable)",
      "Written report with photos",
      "Clear recommendations for any needed work"
    ]
  },
  {
    id: "chimney-installation",
    title: "Chimney Installation",
    description: [
      "Whether you're adding a new fireplace to your home or replacing an outdated chimney system, proper installation is critical for safety and performance. Our experienced technicians ensure your new chimney meets all local codes and manufacturer specifications.",
      "We install all types of chimney systems, including traditional masonry chimneys, prefabricated metal chimneys, and chimney liners. We work with you to choose the right system for your home and heating needs.",
      "Every installation includes a thorough safety inspection and testing to ensure your new chimney is ready for safe use."
    ],
    bullets: [
      "New chimney construction and installation",
      "Chimney liner installation (stainless steel, aluminum, clay)",
      "Chimney cap and crown installation",
      "Code-compliant work with permits as required",
      "Post-installation inspection and testing"
    ]
  },
  {
    id: "chimney-repairs",
    title: "Chimney Repairs",
    description: [
      "A damaged chimney is more than an eyesore - it's a safety hazard. Cracks, deteriorating mortar, damaged liners, and faulty caps can allow water intrusion, carbon monoxide leaks, and even chimney fires.",
      "Our chimney repair services address both structural and functional issues. From minor mortar repairs to complete liner replacement, we have the expertise and equipment to restore your chimney to safe, working condition.",
      "Don't ignore signs of chimney damage. Water stains near your fireplace, white staining on exterior bricks, or visible cracks all warrant immediate attention."
    ],
    bullets: [
      "Crack and mortar joint repairs",
      "Chimney liner repair or replacement",
      "Cap and crown repair or replacement",
      "Flashing repair to prevent leaks",
      "24/7 emergency service for urgent safety issues"
    ]
  },
  {
    id: "chimney-cleaning",
    title: "Chimney Cleaning",
    description: [
      "Creosote buildup is the primary cause of chimney fires. This tar-like substance accumulates every time you burn wood and becomes increasingly flammable as it builds up. Regular chimney cleaning removes this dangerous buildup and keeps your fireplace safe to use.",
      "Our chimney cleaning service includes removal of creosote, soot, debris, and any obstructions like bird nests or leaves. We also inspect your chimney during the cleaning process and alert you to any potential issues.",
      "The National Fire Protection Association recommends annual chimney inspections and cleaning as needed. If you use your fireplace regularly, you should have it cleaned at least once per year."
    ],
    bullets: [
      "Complete creosote and soot removal",
      "Debris and obstruction clearing",
      "Smoke chamber and damper cleaning",
      "Visual inspection during cleaning",
      "Same-day service available before the cold season"
    ]
  }
];

export default function DetailedServices() {
  return (
    <section className="section-padding" id="detailed-services">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services in Detail
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn more about each of our professional air duct and chimney services. Same-day appointments and 24/7 emergency service available.
          </p>
        </div>

        <div className="space-y-16">
          {detailedServices.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid lg:grid-cols-2 gap-8 items-start ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <div className="space-y-4 text-gray-600 mb-6">
                  {service.description.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
                <ul className="space-y-3">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`bg-blue-50 rounded-xl p-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Need {service.title}?
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Call now for a free estimate. Same-day appointments available.
                  </p>
                  <a
                    href={`tel:${PHONE}`}
                    className="btn-primary inline-block text-lg py-3 px-8 mb-4"
                  >
                    Call {PHONE}
                  </a>
                  <p className="text-sm text-gray-500">
                    Or <a href="#contact" className="text-blue-800 hover:underline">request service online</a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
