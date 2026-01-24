"use client";
import { useState } from "react";
import Link from 'next/link';
import { ArrowLeft, MapPin, Calendar, Tag, Users, CheckCircle, Clock, DollarSign, Share2, Download, ChevronLeft, ChevronRight } from "lucide-react";

// This would come from your database/API or route params in real Next.js app
const allProjects = {
  1: {
    id: 1,
    title: "Modern Residential Tower",
    location: "Toronto, ON",
    category: "Residential",
    year: "2024",
    client: "Skyline Developments Inc.",
    duration: "18 months",
    budget: "$45M CAD",
    size: "250,000 sq ft",
    status: "Completed",
    description: "A landmark luxury residential tower featuring 200 premium units with modern architecture, sustainable design principles, and cutting-edge smart home technology. This project sets a new standard for urban living in downtown Toronto.",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop"
    ],
    highlights: [
      "LEED Gold Certified sustainable construction",
      "200 luxury residential units with premium finishes",
      "Rooftop amenity space with panoramic city views",
      "Underground parking for 250 vehicles",
      "Smart building automation systems",
      "Energy-efficient HVAC and insulation"
    ],
    challenges: [
      {
        title: "Urban Site Constraints",
        solution: "Implemented advanced logistics planning and off-site prefabrication to minimize disruption to the busy downtown area."
      },
      {
        title: "Sustainability Goals",
        solution: "Integrated high-performance building envelope, solar panels, and rainwater harvesting systems to achieve LEED Gold certification."
      },
      {
        title: "Timeline Pressure",
        solution: "Utilized BIM technology and lean construction methods to optimize scheduling and maintain the aggressive 18-month timeline."
      }
    ],
    team: [
      { role: "Project Manager", name: "Sarah Johnson" },
      { role: "Lead Architect", name: "Michael Chen" },
      { role: "Site Supervisor", name: "David Robertson" },
      { role: "Safety Officer", name: "Emma Williams" }
    ]
  },
  2: {
    id: 2,
    title: "Commercial Office Hub",
    location: "Vancouver, BC",
    category: "Commercial",
    year: "2023",
    client: "Pacific Business Group",
    duration: "24 months",
    budget: "$62M CAD",
    size: "320,000 sq ft",
    status: "Completed",
    description: "A cutting-edge commercial office complex designed for the modern workplace. Features flexible floor plans, advanced technology infrastructure, and sustainable design elements that promote productivity and employee wellbeing.",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop"
    ],
    highlights: [
      "LEED Platinum certification achieved",
      "15 floors of Class A office space",
      "Green roof with urban garden",
      "Electric vehicle charging stations",
      "State-of-the-art conference facilities",
      "Triple-glazed energy-efficient windows"
    ],
    challenges: [
      {
        title: "Seismic Requirements",
        solution: "Engineered advanced base isolation system to meet Vancouver's strict seismic safety standards while maintaining architectural vision."
      },
      {
        title: "Net-Zero Energy Goal",
        solution: "Integrated rooftop solar arrays, geothermal heating/cooling, and advanced building management systems to achieve net-zero energy consumption."
      },
      {
        title: "Coastal Weather Conditions",
        solution: "Selected corrosion-resistant materials and implemented superior waterproofing to withstand Vancouver's marine climate."
      }
    ],
    team: [
      { role: "Project Manager", name: "Jennifer Lee" },
      { role: "Lead Architect", name: "Robert Chang" },
      { role: "Structural Engineer", name: "Amanda Peterson" },
      { role: "Sustainability Consultant", name: "Thomas Green" }
    ]
  },
  3: {
    id: 3,
    title: "Healthcare Facility",
    location: "Calgary, AB",
    category: "Institutional",
    year: "2022",
    client: "Alberta Health Services",
    duration: "30 months",
    budget: "$78M CAD",
    size: "185,000 sq ft",
    status: "Completed",
    description: "State-of-the-art healthcare facility designed with patient comfort and operational efficiency as top priorities. Features advanced medical equipment spaces, healing gardens, and flexible treatment areas to serve the growing Calgary community.",
    images: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1519494140681-8b17d830a3e9?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1200&h=800&fit=crop"
    ],
    highlights: [
      "120-bed capacity with private patient rooms",
      "Advanced diagnostic imaging center",
      "Therapeutic healing gardens",
      "HEPA filtration throughout facility",
      "Emergency department with trauma bays",
      "Family-centered care design"
    ],
    challenges: [
      {
        title: "Infection Control Standards",
        solution: "Implemented advanced HVAC systems with negative pressure rooms, antimicrobial surfaces, and strict zoning to exceed healthcare infection prevention standards."
      },
      {
        title: "Operational Continuity",
        solution: "Phased construction approach allowed adjacent existing facility to remain fully operational throughout the 30-month build."
      },
      {
        title: "Equipment Integration",
        solution: "Coordinated with medical equipment vendors early in design phase to ensure proper infrastructure for MRI, CT, and other specialized equipment."
      }
    ],
    team: [
      { role: "Project Manager", name: "Dr. Patricia Wong" },
      { role: "Healthcare Architect", name: "James Mitchell" },
      { role: "Medical Planner", name: "Susan Richards" },
      { role: "MEP Engineer", name: "Kevin O'Brien" }
    ]
  },
  4: {
    id: 4,
    title: "Luxury Cottage Renovation",
    location: "Whistler, BC",
    category: "Renovation",
    year: "2024",
    client: "Private Residence",
    duration: "10 months",
    budget: "$3.2M CAD",
    size: "6,500 sq ft",
    status: "Completed",
    description: "Complete transformation of a dated mountain cottage into a luxury retreat. Combines rustic charm with modern amenities, featuring locally-sourced timber, stone accents, and floor-to-ceiling windows that showcase breathtaking mountain views.",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop"
    ],
    highlights: [
      "Reclaimed BC timber throughout interior",
      "Radiant floor heating with geothermal system",
      "Custom stone fireplace as centerpiece",
      "Chef's kitchen with premium appliances",
      "Spa-inspired primary suite",
      "Smart home integration throughout"
    ],
    challenges: [
      {
        title: "Mountain Access",
        solution: "Coordinated helicopter lifts for heavy materials and equipment to remote mountain location during winter months."
      },
      {
        title: "Heritage Preservation",
        solution: "Carefully preserved original log structure elements while upgrading insulation and mechanical systems to modern energy standards."
      },
      {
        title: "Avalanche Zone Considerations",
        solution: "Engineered reinforced roof structure and strategic landscaping to mitigate avalanche risks per Whistler municipal requirements."
      }
    ],
    team: [
      { role: "Project Manager", name: "Mark Anderson" },
      { role: "Interior Designer", name: "Sophie Leclerc" },
      { role: "Master Carpenter", name: "John MacLeod" },
      { role: "Landscape Architect", name: "Rachel Kim" }
    ]
  },
  5: {
    id: 5,
    title: "Downtown Condo Complex",
    location: "Montreal, QC",
    category: "Residential",
    year: "2023",
    client: "Urban Living Developments",
    duration: "22 months",
    budget: "$38M CAD",
    size: "180,000 sq ft",
    status: "Completed",
    description: "Contemporary urban condominium development in Montreal's vibrant downtown core. Features 150 units with European-inspired design, premium finishes, and amenities that cater to modern city living.",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop"
    ],
    highlights: [
      "150 residential units from studios to 3-bedroom",
      "Fitness center and yoga studio",
      "Rooftop terrace with BBQ facilities",
      "Bike storage and repair station",
      "Ground floor retail spaces",
      "Triple-glazed windows for sound insulation"
    ],
    challenges: [
      {
        title: "Bilingual Coordination",
        solution: "Managed fully bilingual project documentation and communication to comply with Quebec construction regulations and ensure smooth contractor coordination."
      },
      {
        title: "Urban Density Requirements",
        solution: "Maximized unit count while maintaining livability through innovative layouts and shared amenity spaces that enhance community feel."
      },
      {
        title: "Winter Construction",
        solution: "Implemented temporary heating enclosures and cold-weather concrete techniques to maintain schedule through harsh Montreal winters."
      }
    ],
    team: [
      { role: "Project Manager", name: "François Dubois" },
      { role: "Lead Architect", name: "Marie Tremblay" },
      { role: "Site Supervisor", name: "Pierre Gagnon" },
      { role: "Interior Designer", name: "Isabella Rossi" }
    ]
  },
  6: {
    id: 6,
    title: "Industrial Warehouse",
    location: "Edmonton, AB",
    category: "Commercial",
    year: "2023",
    client: "Northern Logistics Corp",
    duration: "14 months",
    budget: "$22M CAD",
    size: "425,000 sq ft",
    status: "Completed",
    description: "Modern industrial warehouse and distribution center designed for efficient logistics operations. Features include advanced material handling systems, climate-controlled sections, and sustainable design elements.",
    images: [
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&h=800&fit=crop"
    ],
    highlights: [
      "40-foot clear height for maximum storage",
      "LED high-bay lighting throughout",
      "Electric truck charging infrastructure",
      "Advanced fire suppression systems",
      "Insulated panels for extreme cold climate",
      "Automated loading dock systems"
    ],
    challenges: [
      {
        title: "Extreme Cold Climate",
        solution: "Engineered superior insulation package and cold-weather HVAC systems rated for -40°C Alberta winters while maintaining energy efficiency."
      },
      {
        title: "Soil Conditions",
        solution: "Conducted extensive geotechnical analysis and implemented specialized foundation design to address expansive clay soils common in Edmonton area."
      },
      {
        title: "Rapid Timeline",
        solution: "Pre-engineered building systems and concurrent site work allowed project completion in just 14 months despite challenging weather conditions."
      }
    ],
    team: [
      { role: "Project Manager", name: "Bradley Thompson" },
      { role: "Structural Engineer", name: "Raj Patel" },
      { role: "Site Supervisor", name: "Tyler MacDonald" },
      { role: "Logistics Consultant", name: "Christine Nguyen" }
    ]
  }
};

export default function ProjectDetailsPage({ projectId = 1 }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(projectId);
  
  const projectData = allProjects[selectedProject as keyof typeof allProjects];


  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectData.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectData.images.length) % projectData.images.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Demo Selector - Remove this in production */}
      <div className="bg-orange-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <span className="font-semibold">🎯 Demo Mode - Select a Project:</span>
            <div className="flex flex-wrap gap-2">
              {Object.keys(allProjects).map((id) => (
                <button
                  key={id}
                  onClick={() => {
                    setSelectedProject(Number(id));
                    setCurrentImageIndex(0);
                  }}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    selectedProject === Number(id)
                      ? 'bg-white text-orange-600'
                      : 'bg-orange-700 hover:bg-orange-800'
                  }`}
                >
                  {allProjects[Number(id) as unknown as 1 | 2 | 3 | 4 | 5 | 6].title}

                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link 
          href="/projects"
          className="flex items-center gap-2 text-gray-600 hover:text-orange-600 font-semibold transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Hero Image Gallery */}
      <section className="relative bg-black">
        <div className="relative h-96 md:h-[600px]">
          <img
            src={projectData.images[currentImageIndex]}
            alt={projectData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 p-3 rounded-full shadow-lg transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 p-3 rounded-full shadow-lg transition-all"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black bg-opacity-70 px-4 py-2 rounded-full">
            <span className="text-white font-semibold">
              {currentImageIndex + 1} / {projectData.images.length}
            </span>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="max-w-7xl mx-auto">
              <div className="inline-block mb-3 px-4 py-1.5 bg-orange-600 rounded-full">
                <span className="text-white font-bold text-sm">{projectData.status}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                {projectData.title}
              </h1>
              <div className="flex items-center gap-2 text-white text-lg">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span>{projectData.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Gallery */}
        <div className="bg-gray-900 py-4">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex gap-3 overflow-x-auto">
              {projectData.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    currentImageIndex === idx ? 'border-orange-500 scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Info Cards */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <Tag className="w-8 h-8 text-orange-600 mb-3" />
            <p className="text-gray-500 text-sm font-medium mb-1">Category</p>
            <p className="text-xl font-bold text-gray-900">{projectData.category}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <Calendar className="w-8 h-8 text-orange-600 mb-3" />
            <p className="text-gray-500 text-sm font-medium mb-1">Completed</p>
            <p className="text-xl font-bold text-gray-900">{projectData.year}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <Clock className="w-8 h-8 text-orange-600 mb-3" />
            <p className="text-gray-500 text-sm font-medium mb-1">Duration</p>
            <p className="text-xl font-bold text-gray-900">{projectData.duration}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <DollarSign className="w-8 h-8 text-orange-600 mb-3" />
            <p className="text-gray-500 text-sm font-medium mb-1">Budget</p>
            <p className="text-xl font-bold text-gray-900">{projectData.budget}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Overview</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{projectData.description}</p>
            </div>

            {/* Key Highlights */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Highlights</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {projectData.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges & Solutions */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Challenges & Solutions</h2>
              <div className="space-y-6">
                {projectData.challenges.map((item, idx) => (
                  <div key={idx} className="border-l-4 border-orange-600 pl-6 py-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Client Info */}
            <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl p-6 text-white shadow-lg">
              <h3 className="text-xl font-bold mb-4">Project Details</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-orange-100 text-sm mb-1">Client</p>
                  <p className="font-semibold">{projectData.client}</p>
                </div>
                <div>
                  <p className="text-orange-100 text-sm mb-1">Project Size</p>
                  <p className="font-semibold">{projectData.size}</p>
                </div>
                <div>
                  <p className="text-orange-100 text-sm mb-1">Location</p>
                  <p className="font-semibold">{projectData.location}</p>
                </div>
              </div>
            </div>

            {/* Project Team */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-6 h-6 text-orange-600" />
                <h3 className="text-xl font-bold text-gray-900">Project Team</h3>
              </div>
              <div className="space-y-3">
                {projectData.team.map((member, idx) => (
                  <div key={idx} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                    <p className="text-sm text-gray-500">{member.role}</p>
                    <p className="font-semibold text-gray-900">{member.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-md space-y-3">
              <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 transition-all">
                <Share2 className="w-5 h-5" />
                Share Project
              </button>
              <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-all">
                <Download className="w-5 h-5" />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Inspired by This Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with the same level of excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 transition-all shadow-xl">
              Start Your Project
            </button>
            <button className="px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-xl">
              View More Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}












// "use client";
// import { useState } from "react";
// import Link from 'next/link';
// import { ArrowLeft, MapPin, Calendar, Tag, Users, CheckCircle, Clock, DollarSign, Share2, Download, ChevronLeft, ChevronRight } from "lucide-react";

// const projectData = {
//   id: 1,
//   title: "Modern Residential Tower",
//   location: "Toronto, ON",
//   category: "Residential",
//   year: "2024",
//   client: "Skyline Developments Inc.",
//   duration: "18 months",
//   budget: "$45M CAD",
//   size: "250,000 sq ft",
//   status: "Completed",
//   description: "A landmark luxury residential tower featuring 200 premium units with modern architecture, sustainable design principles, and cutting-edge smart home technology. This project sets a new standard for urban living in downtown Toronto.",
//   images: [
//     "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop",
//     "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop",
//     "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
//     "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop"
//   ],
//   highlights: [
//     "LEED Gold Certified sustainable construction",
//     "200 luxury residential units with premium finishes",
//     "Rooftop amenity space with city views",
//     "Underground parking for 250 vehicles",
//     "Smart building automation systems",
//     "Energy-efficient HVAC and insulation"
//   ],
//   challenges: [
//     {
//       title: "Urban Site Constraints",
//       solution: "Implemented advanced logistics planning and off-site prefabrication to minimize disruption to the busy downtown area."
//     },
//     {
//       title: "Sustainability Goals",
//       solution: "Integrated high-performance building envelope, solar panels, and rainwater harvesting systems to achieve LEED Gold certification."
//     },
//     {
//       title: "Timeline Pressure",
//       solution: "Utilized BIM technology and lean construction methods to optimize scheduling and maintain the aggressive 18-month timeline."
//     }
//   ],
//   team: [
//     { role: "Project Manager", name: "Sarah Johnson" },
//     { role: "Lead Architect", name: "Michael Chen" },
//     { role: "Site Supervisor", name: "David Robertson" },
//     { role: "Safety Officer", name: "Emma Williams" }
//   ]
// };

// export default function ProjectDetailsPage() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const nextImage = () => {
//     setCurrentImageIndex((prev) => (prev + 1) % projectData.images.length);
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prev) => (prev - 1 + projectData.images.length) % projectData.images.length);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navigation Bar */}
//       <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
//         <div className="max-w-7xl mx-auto px-6 py-4">
//           <Link
//             href="/projects"
//             className="flex items-center gap-2 text-gray-600 hover:text-orange-600 font-semibold"
//           >
//             <ArrowLeft className="w-5 h-5" />
//             Back to Projects
//           </Link>
//         </div>
//       </div>

//       {/* Hero Image Gallery */}
//       <section className="relative bg-black">
//         <div className="relative h-96 md:h-[600px]">
//           <img
//             src={projectData.images[currentImageIndex]}
//             alt={projectData.title}
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
//           {/* Navigation Arrows */}
//           <button
//             onClick={prevImage}
//             className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 p-3 rounded-full shadow-lg transition-all"
//           >
//             <ChevronLeft className="w-6 h-6 text-gray-800" />
//           </button>
//           <button
//             onClick={nextImage}
//             className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 p-3 rounded-full shadow-lg transition-all"
//           >
//             <ChevronRight className="w-6 h-6 text-gray-800" />
//           </button>

//           {/* Image Counter */}
//           <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black bg-opacity-70 px-4 py-2 rounded-full">
//             <span className="text-white font-semibold">
//               {currentImageIndex + 1} / {projectData.images.length}
//             </span>
//           </div>

//           {/* Title Overlay */}
//           <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
//             <div className="max-w-7xl mx-auto">
//               <div className="inline-block mb-3 px-4 py-1.5 bg-orange-600 rounded-full">
//                 <span className="text-white font-bold text-sm">{projectData.status}</span>
//               </div>
//               <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
//                 {projectData.title}
//               </h1>
//               <div className="flex items-center gap-2 text-white text-lg">
//                 <MapPin className="w-5 h-5 text-orange-400" />
//                 <span>{projectData.location}</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Thumbnail Gallery */}
//         <div className="bg-gray-900 py-4">
//           <div className="max-w-7xl mx-auto px-6">
//             <div className="flex gap-3 overflow-x-auto">
//               {projectData.images.map((img, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => setCurrentImageIndex(idx)}
//                   className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
//                     currentImageIndex === idx ? 'border-orange-500 scale-105' : 'border-transparent opacity-60 hover:opacity-100'
//                   }`}
//                 >
//                   <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Project Info Cards */}
//       <section className="max-w-7xl mx-auto px-6 py-12">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
//           <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
//             <Tag className="w-8 h-8 text-orange-600 mb-3" />
//             <p className="text-gray-500 text-sm font-medium mb-1">Category</p>
//             <p className="text-xl font-bold text-gray-900">{projectData.category}</p>
//           </div>
//           <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
//             <Calendar className="w-8 h-8 text-orange-600 mb-3" />
//             <p className="text-gray-500 text-sm font-medium mb-1">Completed</p>
//             <p className="text-xl font-bold text-gray-900">{projectData.year}</p>
//           </div>
//           <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
//             <Clock className="w-8 h-8 text-orange-600 mb-3" />
//             <p className="text-gray-500 text-sm font-medium mb-1">Duration</p>
//             <p className="text-xl font-bold text-gray-900">{projectData.duration}</p>
//           </div>
//           <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
//             <DollarSign className="w-8 h-8 text-orange-600 mb-3" />
//             <p className="text-gray-500 text-sm font-medium mb-1">Budget</p>
//             <p className="text-xl font-bold text-gray-900">{projectData.budget}</p>
//           </div>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {/* Main Content */}
//           <div className="md:col-span-2 space-y-8">
//             {/* Overview */}
//             <div className="bg-white rounded-2xl p-8 shadow-md">
//               <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Overview</h2>
//               <p className="text-gray-700 leading-relaxed text-lg">{projectData.description}</p>
//             </div>

//             {/* Key Highlights */}
//             <div className="bg-white rounded-2xl p-8 shadow-md">
//               <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Highlights</h2>
//               <div className="grid md:grid-cols-2 gap-4">
//                 {projectData.highlights.map((highlight, idx) => (
//                   <div key={idx} className="flex items-start gap-3">
//                     <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
//                     <span className="text-gray-700 font-medium">{highlight}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Challenges & Solutions */}
//             <div className="bg-white rounded-2xl p-8 shadow-md">
//               <h2 className="text-3xl font-bold text-gray-900 mb-6">Challenges & Solutions</h2>
//               <div className="space-y-6">
//                 {projectData.challenges.map((item, idx) => (
//                   <div key={idx} className="border-l-4 border-orange-600 pl-6 py-2">
//                     <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
//                     <p className="text-gray-700 leading-relaxed">{item.solution}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-6">
//             {/* Client Info */}
//             <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl p-6 text-white shadow-lg">
//               <h3 className="text-xl font-bold mb-4">Project Details</h3>
//               <div className="space-y-3">
//                 <div>
//                   <p className="text-orange-100 text-sm mb-1">Client</p>
//                   <p className="font-semibold">{projectData.client}</p>
//                 </div>
//                 <div>
//                   <p className="text-orange-100 text-sm mb-1">Project Size</p>
//                   <p className="font-semibold">{projectData.size}</p>
//                 </div>
//                 <div>
//                   <p className="text-orange-100 text-sm mb-1">Location</p>
//                   <p className="font-semibold">{projectData.location}</p>
//                 </div>
//               </div>
//             </div>

//             {/* Project Team */}
//             <div className="bg-white rounded-2xl p-6 shadow-md">
//               <div className="flex items-center gap-2 mb-4">
//                 <Users className="w-6 h-6 text-orange-600" />
//                 <h3 className="text-xl font-bold text-gray-900">Project Team</h3>
//               </div>
//               <div className="space-y-3">
//                 {projectData.team.map((member, idx) => (
//                   <div key={idx} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
//                     <p className="text-sm text-gray-500">{member.role}</p>
//                     <p className="font-semibold text-gray-900">{member.name}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Actions */}
//             <div className="bg-white rounded-2xl p-6 shadow-md space-y-3">
//               <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 transition-all">
//                 <Share2 className="w-5 h-5" />
//                 Share Project
//               </button>
//               <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-all">
//                 <Download className="w-5 h-5" />
//                 Download PDF
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Inspired by This Project?
//           </h2>
//           <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//             Let's discuss how we can bring your vision to life with the same level of excellence
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="px-8 py-4 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 transition-all shadow-xl">
//               Start Your Project
//             </button>
//             <button className="px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-xl">
//               View More Projects
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }