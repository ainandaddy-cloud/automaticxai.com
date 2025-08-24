export interface Testimonial {
  name: string;
  position: string;
  company: string;
  text: string;
  rating: number;
}

export const testimonialsData: Testimonial[] = [
  {
    name: "Amit Kapoor",
    position: "Co-founder",
    company: "MarketNest",
    text: "We saved over 400 hours every month by automating our support and follow-ups. The efficiency gains have been remarkable.",
    rating: 5
  },
  {
    name: "Lisa Grant",
    position: "CEO",
    company: "DwellTech Realty",
    text: "Their voice AI solution transformed our lead qualification process with a 30% improvement in conversion rates.",
    rating: 5
  },
  {
    name: "Carlos Medina",
    position: "Operations Manager",
    company: "EcomGenix",
    text: "AutomaticxAI helped us reduce operational costs by $8,000 monthly while significantly improving customer experience.",
    rating: 5
  },
  {
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "TechFlow Solutions",
    text: "The chatbot implementation doubled our qualified leads while reducing response time from hours to seconds.",
    rating: 5
  }
];