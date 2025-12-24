// When to Call a Pro - SEO-optimized content for each service
// Keywords researched via GPT-5.2 web search for maximum SEO/AEO impact

export interface WhenToCallProItem {
  icon: "warning" | "tool" | "safety" | "certified" | "clock" | "money";
  title: string;
  description: string;
}

export interface WhenToCallProData {
  heading: string;
  subheading: string;
  intro: string;
  items: WhenToCallProItem[];
  diyWarning: {
    title: string;
    points: string[];
  };
  proAdvantages: {
    title: string;
    points: string[];
  };
}

export const airDuctCleaningProData: WhenToCallProData = {
  heading: "When Should You Hire a Professional for Air Duct Cleaning?",
  subheading: "DIY vs Professional Air Duct Cleaning: Know the Difference",
  intro: "While basic vent cleaning can be done at home, professional air duct cleaning requires specialized equipment and expertise. Here's when you should call a certified technician instead of attempting DIY duct cleaning.",
  items: [
    {
      icon: "warning",
      title: "Mold in Air Ducts",
      description: "If you see or smell mold, don't attempt DIY removal. Mold spores spread easily and require HEPA filtration and antimicrobial treatment by certified professionals."
    },
    {
      icon: "safety",
      title: "Excessive Dust Even After Cleaning",
      description: "When dust keeps returning despite regular cleaning, it indicates contamination deep in your ductwork that only professional negative-pressure equipment can remove."
    },
    {
      icon: "tool",
      title: "After Home Renovation or Construction",
      description: "Construction dust, drywall particles, and debris require industrial-grade vacuum equipment rated at 15,000+ CFM - far beyond any household vacuum."
    },
    {
      icon: "warning",
      title: "Rodent or Pest Infestation Signs",
      description: "Animal droppings, nests, or pest evidence in ducts pose serious health risks. Professional cleaning includes sanitization and identifying entry points."
    },
    {
      icon: "certified",
      title: "Allergies or Asthma Symptoms Worsen at Home",
      description: "If family members experience increased allergies, asthma attacks, or respiratory issues indoors, contaminated ducts may be circulating allergens and require thorough professional cleaning."
    },
    {
      icon: "clock",
      title: "No Cleaning in 3-5+ Years",
      description: "According to EPA guidelines, air ducts should be professionally cleaned every 3-5 years, or more frequently with pets, smokers, or family members with allergies."
    }
  ],
  diyWarning: {
    title: "Why DIY Air Duct Cleaning Falls Short",
    points: [
      "Household vacuums lack the power (15,000 CFM) to remove deep contamination",
      "Without negative pressure, you push debris further into the system",
      "Risk of damaging flexible ductwork or disconnecting seals",
      "Cannot reach supply ducts, plenums, or the air handler unit",
      "No way to identify mold, pest damage, or duct leaks",
      "Store-bought brushes don't match professional rotary tools"
    ]
  },
  proAdvantages: {
    title: "What Professional Air Duct Cleaning Includes",
    points: [
      "Complete system inspection with camera equipment",
      "HEPA-filtered negative pressure vacuum (15,000+ CFM)",
      "Rotary brush and air whip cleaning for all ducts",
      "Supply ducts, return ducts, registers, and plenums cleaned",
      "Before and after documentation with photos",
      "NADCA-certified technicians with proper training",
      "30-day workmanship guarantee on all services"
    ]
  }
};

export const dryerVentCleaningProData: WhenToCallProData = {
  heading: "When Should You Hire a Professional for Dryer Vent Cleaning?",
  subheading: "Professional Dryer Vent Cleaning vs DIY: Fire Safety First",
  intro: "Clogged dryer vents are a leading cause of house fires. While basic lint trap cleaning is essential, professional dryer vent cleaning prevents dangerous lint buildup throughout the entire exhaust system.",
  items: [
    {
      icon: "safety",
      title: "Dryer Takes Two Cycles to Dry Clothes",
      description: "When clothes remain damp after a normal cycle, your vent is likely clogged. This forces your dryer to work harder and creates a serious fire hazard from overheating."
    },
    {
      icon: "warning",
      title: "Burning Smell or Excessive Heat",
      description: "If you smell burning lint or your laundry room feels unusually hot, stop using the dryer immediately and call a professional. This indicates a dangerous lint buildup."
    },
    {
      icon: "tool",
      title: "Vent Runs More Than 15 Feet or Has Multiple Bends",
      description: "Long vent runs and multiple elbows trap lint that DIY brushes can't reach. Professional rotary equipment is essential for these complex configurations."
    },
    {
      icon: "safety",
      title: "Second Floor or Roof Vent Termination",
      description: "Vents that exit through the roof or from upper floors require professional access. DIY cleaning from inside cannot clear the full length safely."
    },
    {
      icon: "warning",
      title: "Bird Nest or Animal Blockage",
      description: "Birds and rodents commonly nest in dryer vents. Professional removal ensures complete blockage clearing and inspection for damage to the vent system."
    },
    {
      icon: "certified",
      title: "Gas Dryer Installation",
      description: "Gas dryers require extra attention due to carbon monoxide risks. A professional inspection ensures proper venting and identifies any gas line concerns."
    }
  ],
  diyWarning: {
    title: "Risks of DIY Dryer Vent Cleaning",
    points: [
      "DIY brush kits only clean 4-6 feet - most vents are 15-25 feet",
      "Flexible duct can disconnect if pushed too hard",
      "Lint compaction deeper in the system if not done properly",
      "Cannot inspect vent hood, damper, or termination point",
      "No way to detect crushed, kinked, or damaged vent sections",
      "Leaf blower method can damage flexible ductwork"
    ]
  },
  proAdvantages: {
    title: "What Professional Dryer Vent Cleaning Includes",
    points: [
      "Complete vent inspection from dryer to exterior termination",
      "High-powered rotary brush system cleans entire length",
      "Exterior vent hood inspection and cleaning",
      "Airflow measurement before and after service",
      "Identification of code violations (wrong duct type, excessive length)",
      "Transition hose inspection and replacement recommendations",
      "Fire safety compliance verification"
    ]
  }
};

export const chimneyCleaningProData: WhenToCallProData = {
  heading: "When Should You Hire a Professional Chimney Sweep?",
  subheading: "DIY vs Professional Chimney Cleaning: Understanding Creosote Dangers",
  intro: "Chimney cleaning is not a DIY job. Creosote buildup is combustible and causes chimney fires. CSIA-certified chimney sweeps have the training and equipment to safely remove hazardous deposits.",
  items: [
    {
      icon: "safety",
      title: "Glazed or Stage 3 Creosote Buildup",
      description: "Shiny, tar-like creosote is extremely dangerous and combustible. This glazed creosote requires specialized chemical treatments and professional removal - never attempt DIY."
    },
    {
      icon: "warning",
      title: "Smoke Backing Up Into Your Home",
      description: "When smoke enters your room instead of going up the chimney, it indicates blockage, draft problems, or flue damage that requires professional diagnosis."
    },
    {
      icon: "safety",
      title: "Strong Fireplace Odor (Especially in Summer)",
      description: "A strong smoky or creosote smell indicates significant buildup. This odor intensifies in humid weather and signals the need for immediate professional cleaning."
    },
    {
      icon: "warning",
      title: "Black Flakes or Soot Falling Into Fireplace",
      description: "Debris falling from above indicates creosote deposits breaking loose - a chimney fire warning sign. Schedule professional inspection immediately."
    },
    {
      icon: "tool",
      title: "No Cleaning in Over 1 Year (NFPA 211)",
      description: "The National Fire Protection Association recommends annual chimney inspections. If you burn regularly, cleaning should occur yearly before heating season."
    },
    {
      icon: "certified",
      title: "Cracked Flue Tiles or Liner Damage",
      description: "Pieces of clay tile in your fireplace indicate liner damage. A damaged flue liner allows heat to reach combustibles and requires immediate professional assessment."
    }
  ],
  diyWarning: {
    title: "Why DIY Chimney Cleaning Is Dangerous",
    points: [
      "Chimney brush kits cannot remove glazed (Stage 3) creosote",
      "Working on a roof without proper safety equipment risks serious injury",
      "Cannot identify cracked flue liners, crown damage, or flashing issues",
      "Improper technique can dislodge debris into smoke chamber",
      "No way to detect carbon monoxide leak points",
      "May miss animal nests, blockages, or structural damage"
    ]
  },
  proAdvantages: {
    title: "What Professional Chimney Cleaning Includes",
    points: [
      "Level 1 or Level 2 chimney inspection with video camera",
      "Complete creosote removal using professional brushes and vacuums",
      "Smoke chamber and damper cleaning",
      "Crown, cap, and flashing visual inspection",
      "Carbon monoxide safety check",
      "CSIA-certified technicians with liability insurance",
      "Written inspection report with photos",
      "Recommendations for repairs before they become emergencies"
    ]
  }
};

export const chimneyRepairProData: WhenToCallProData = {
  heading: "When Should You Hire a Professional for Chimney Repair?",
  subheading: "DIY vs Professional Chimney Repair: Safety and Code Compliance",
  intro: "Chimney repairs involve working at height, handling masonry, and ensuring fire safety code compliance. Professional chimney repair protects your home and maintains your insurance coverage.",
  items: [
    {
      icon: "safety",
      title: "Cracked or Damaged Chimney Crown",
      description: "A cracked chimney crown allows water infiltration that causes freeze-thaw damage. Professional crown repair or replacement prevents costly structural damage."
    },
    {
      icon: "warning",
      title: "Water Leaking Around Chimney or Into Fireplace",
      description: "Chimney leaks can indicate failed flashing, crown damage, or masonry deterioration. Proper diagnosis requires professional inspection to identify the source."
    },
    {
      icon: "tool",
      title: "Mortar Joints Crumbling or Missing (Tuckpointing)",
      description: "Deteriorating mortar compromises structural integrity. Professional tuckpointing uses the correct mortar mix and technique to restore your chimney safely."
    },
    {
      icon: "safety",
      title: "Spalling Bricks (Flaking or Crumbling)",
      description: "Spalling indicates moisture damage and structural weakening. Professional assessment determines whether repair or partial rebuild is needed."
    },
    {
      icon: "warning",
      title: "Cracked or Damaged Flue Liner",
      description: "A damaged flue liner is a fire hazard. Professional chimney relining with stainless steel or cast-in-place liner restores safety and code compliance."
    },
    {
      icon: "certified",
      title: "Chimney Leaning or Separating from House",
      description: "Structural movement indicates foundation issues or deteriorated mortar. This requires immediate professional evaluation to prevent collapse."
    }
  ],
  diyWarning: {
    title: "Why DIY Chimney Repair Is Risky",
    points: [
      "Working on roofs and scaffolding without training risks falls",
      "Incorrect mortar type accelerates deterioration",
      "Cannot properly assess hidden structural damage",
      "Improper flashing installation leads to continued leaks",
      "DIY repairs may void homeowner's insurance",
      "Code violations create liability issues when selling"
    ]
  },
  proAdvantages: {
    title: "What Professional Chimney Repair Includes",
    points: [
      "Complete Level 2 inspection with video documentation",
      "Proper mortar matching for tuckpointing (type N, S, or O)",
      "Chimney crown repair with proper slope and drip edge",
      "Counter-flashing and step-flashing installation",
      "Stainless steel liner installation when needed",
      "Waterproofing with breathable masonry sealant",
      "Written warranty on workmanship",
      "Before and after photo documentation"
    ]
  }
};

export const chimneyInstallationProData: WhenToCallProData = {
  heading: "When Should You Hire a Professional for Chimney Installation?",
  subheading: "Chimney Installation: Why Professional Installation Is Non-Negotiable",
  intro: "Chimney installation involves building codes, fire safety clearances, and structural requirements. Improper installation creates fire hazards and voids insurance. Always hire certified professionals.",
  items: [
    {
      icon: "safety",
      title: "Building Codes and Permit Requirements",
      description: "Chimney installation requires permits and inspections in all jurisdictions. Professional installers understand NFPA 211, IRC codes, and local requirements."
    },
    {
      icon: "warning",
      title: "The 3-2-10 Chimney Height Rule",
      description: "Chimneys must extend 3 feet above roof penetration and 2 feet higher than anything within 10 feet. Professionals ensure proper height for safe draft."
    },
    {
      icon: "tool",
      title: "Clearance to Combustibles Requirements",
      description: "Class A chimney pipe requires minimum 2-inch clearance to all combustibles. Professionals install proper firestops, radiation shields, and attic insulation shields."
    },
    {
      icon: "safety",
      title: "UL 103HT Class A Chimney Pipe",
      description: "Factory-built chimneys must be UL-listed. Professionals ensure proper pipe selection, support boxes, and termination components for your specific appliance."
    },
    {
      icon: "certified",
      title: "Insurance and Liability Protection",
      description: "DIY chimney installation typically voids homeowner's insurance for fire damage. Professional installation with permits protects your coverage."
    },
    {
      icon: "clock",
      title: "Wood Stove or Insert Venting Requirements",
      description: "Converting a fireplace or installing a wood stove requires proper liner sizing and chimney connection. Professionals calculate BTU requirements and draft needs."
    }
  ],
  diyWarning: {
    title: "Why DIY Chimney Installation Is Dangerous",
    points: [
      "Incorrect clearances create hidden fire hazards",
      "Wrong pipe type (stove pipe vs Class A) in wrong location causes fires",
      "Improper support box installation leads to collapse",
      "Missing firestops allow fire to spread between floors",
      "Failed inspections require costly teardown and rebuild",
      "Insurance claims denied for unpermitted work"
    ]
  },
  proAdvantages: {
    title: "What Professional Chimney Installation Includes",
    points: [
      "Permit acquisition and code compliance",
      "Proper Class A chimney pipe selection and sizing",
      "Ceiling support box and wall thimble installation",
      "Firestop and radiation shield at each floor",
      "Roof penetration with proper flashing and storm collar",
      "Final inspection and certification",
      "Manufacturer warranty registration",
      "Insurance-compliant documentation"
    ]
  }
};

export const ductRepairProData: WhenToCallProData = {
  heading: "When Should You Hire a Professional for Duct Repair?",
  subheading: "DIY vs Professional Duct Repair: Sealing and Replacing Ductwork",
  intro: "Leaky or damaged ductwork wastes energy and compromises air quality. While small repairs seem simple, professional duct sealing and repair ensures long-lasting results and energy savings.",
  items: [
    {
      icon: "warning",
      title: "Uneven Heating or Cooling Throughout Home",
      description: "When some rooms are too hot or cold while others are comfortable, duct leaks or disconnections are likely. Professional duct testing identifies exact leak locations."
    },
    {
      icon: "safety",
      title: "Excessive Dust Despite Regular Cleaning",
      description: "Leaky return ducts in attics or crawlspaces pull in dust and contaminants. Professional sealing stops infiltration at the source."
    },
    {
      icon: "tool",
      title: "Crushed or Disconnected Flexible Ductwork",
      description: "Flex duct in attics often gets crushed, kinked, or disconnected. Professional replacement ensures proper support, sizing, and connections."
    },
    {
      icon: "warning",
      title: "High Energy Bills Without Explanation",
      description: "Duct leakage can waste 20-30% of conditioned air. Professional duct sealing with mastic (not duct tape) provides permanent energy savings."
    },
    {
      icon: "certified",
      title: "Mold or Moisture in Ductwork",
      description: "Condensation and mold indicate insulation or sealing failures. Professional assessment identifies root causes and proper remediation."
    },
    {
      icon: "clock",
      title: "Ductwork Over 15-20 Years Old",
      description: "Older duct systems often have deteriorated insulation, failed connections, and outdated designs. Professional evaluation determines repair vs replacement needs."
    }
  ],
  diyWarning: {
    title: "Why DIY Duct Repair Often Fails",
    points: [
      "Standard duct tape fails within 1-2 years (not code-approved)",
      "Cannot identify all leak locations without professional testing",
      "Improper mastic application doesn't create airtight seal",
      "Flex duct requires proper support and connection methods",
      "Attic and crawlspace work without training is hazardous",
      "Cannot balance airflow after repairs"
    ]
  },
  proAdvantages: {
    title: "What Professional Duct Repair Includes",
    points: [
      "Duct leakage testing with calibrated equipment",
      "UL 181 approved mastic sealant (not duct tape)",
      "Proper flex duct replacement with draw bands",
      "Return plenum and air handler sealing",
      "Duct insulation repair or replacement",
      "Airflow balancing after repairs",
      "Energy savings verification",
      "Written warranty on workmanship"
    ]
  }
};

export const systemInspectionsProData: WhenToCallProData = {
  heading: "When Should You Hire a Professional for HVAC Inspection?",
  subheading: "Professional HVAC Inspection vs Basic Maintenance: What's the Difference",
  intro: "Regular HVAC inspections prevent costly breakdowns and ensure safe operation. Professional inspections go beyond filter changes to identify issues before they become emergencies.",
  items: [
    {
      icon: "safety",
      title: "Buying or Selling a Home",
      description: "A professional HVAC inspection before closing reveals system age, condition, and remaining lifespan. This protects your investment and negotiating position."
    },
    {
      icon: "warning",
      title: "System Short Cycling or Running Constantly",
      description: "When your HVAC turns on and off frequently or never stops running, professional diagnosis identifies refrigerant issues, thermostat problems, or sizing concerns."
    },
    {
      icon: "tool",
      title: "Strange Noises or Unusual Smells",
      description: "Rattling, grinding, or burning smells indicate mechanical problems or safety hazards. Professional inspection identifies failing components before total breakdown."
    },
    {
      icon: "safety",
      title: "Annual Pre-Season Maintenance",
      description: "Professional tune-ups before heating and cooling seasons prevent mid-season failures. This includes cleaning, adjustment, and safety testing."
    },
    {
      icon: "certified",
      title: "Indoor Air Quality Concerns",
      description: "Allergies, asthma symptoms, or stuffy air may indicate duct leaks, poor filtration, or humidity issues. Professional IAQ testing identifies specific problems."
    },
    {
      icon: "clock",
      title: "System Over 10 Years Old",
      description: "Older systems require more frequent professional attention. Annual inspections track decline and help plan for replacement before emergency failure."
    }
  ],
  diyWarning: {
    title: "What DIY Maintenance Cannot Detect",
    points: [
      "Refrigerant levels and leak detection require certified technicians",
      "Gas furnace combustion analysis requires specialized equipment",
      "Electrical component testing needs proper meters and training",
      "Duct leakage requires calibrated blower door testing",
      "Carbon monoxide testing needs professional-grade detectors",
      "Capacitor and motor amp draws indicate pending failures"
    ]
  },
  proAdvantages: {
    title: "What Professional HVAC Inspection Includes",
    points: [
      "Complete system operation and safety testing",
      "Refrigerant pressure and charge verification",
      "Combustion analysis for gas appliances",
      "Electrical connection inspection and tightening",
      "Duct inspection for leaks and disconnections",
      "Thermostat calibration and programming review",
      "Indoor air quality assessment",
      "Written report with repair priorities and system lifespan estimate"
    ]
  }
};

// Map for easy lookup by service type
export const whenToCallProDataMap: Record<string, WhenToCallProData> = {
  "air-duct-cleaning": airDuctCleaningProData,
  "dryer-vent-cleaning": dryerVentCleaningProData,
  "chimney-cleaning": chimneyCleaningProData,
  "chimney-repairs": chimneyRepairProData,
  "chimney-installation": chimneyInstallationProData,
  "duct-repair": ductRepairProData,
  "system-inspections": systemInspectionsProData,
};
