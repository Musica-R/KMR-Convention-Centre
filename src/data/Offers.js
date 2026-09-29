import {
  FaBed, FaGem, FaUtensils, FaLightbulb, FaMusic, FaParking,
} from "react-icons/fa";

// Icons are stored as components (not JSX) so any file can render them: const Icon = o.icon
export const offers = [
  { icon: FaBed, title: "2 AC rooms", text: "Comfortable rooms for families and wedding parties." },
  { icon: FaGem, title: "Bridal room", text: "A private suite for pre-ceremony calm and final touch-ups." },
  { icon: FaUtensils, title: "In-house catering", text: "Local and global cuisines, with transparent pricing." },
  { icon: FaLightbulb, title: "Lighting and sound", text: "Professional lighting and sound, with power back-up." },
  { icon: FaMusic, title: "DJ setup", text: "A DJ setup to keep the energy up till the end." },
  { icon: FaParking, title: "Easy parking", text: "Paved courtyard and parking, with accessible spaces." },
];