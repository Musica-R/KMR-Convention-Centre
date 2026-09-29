import { FiCalendar, FiMapPin, FiGrid, FiClock, FiUser, FiUsers } from "react-icons/fi";
import { HiOutlineSparkles, HiOutlineBuildingOffice2 } from "react-icons/hi2";

import front from "../assets/wed.webp";
import entrance from "../assets/kmr.png";
import pic1 from "../assets/pic1.webp";
import pic2 from "../assets/pic2.webp";
import pic3 from "../assets/pic3.webp";
import pic4 from "../assets/pic4.webp";
import pic5 from "../assets/pic5.webp";
import pic6 from "../assets/pic6.webp";
import pic7 from "../assets/wed2.webp";

export const site = {
  name: "KMR Convention Centre",
  since: 2019,
  capacity: 1200,
  phoneDisplay: "+91 94473 81865",
  phoneLink: "tel:+919447381865",
  whatsapp: "919447381865",
  map: "https://maps.app.goo.gl/pVhwYLaoVAhfosiL8", // main directions link
  mapShare: "https://maps.app.goo.gl/Hvz3RDazgYFuEtDu6", // second Google Maps link
  hours: "Monday to Sunday, 9:00 am – 5:00 pm",
  address: ["Near Petrol Pump, Kunnukadu", "Thenkurussi, Palakkad 678671", "Kerala"],
};

export const images = { front, entrance };

// Add more photos here and the Gallery page updates automatically.
export const gallery = [
  { src: front, alt: "Front view with paved courtyard" },
  { src: entrance, alt: "Entrance porch and parking" },
  { src: pic1, alt: "wed1" },
  { src: pic2, alt: "wed2" },
  { src: pic3, alt: "wed3" },
  { src: pic4, alt: "wed4" },
  { src: pic5, alt: "wed5" },
  { src: pic6, alt: "wed6" },
  { src: pic7, alt: "wed7" },
];

export const reviews = [
  {
    title: "Spacious auditorium",
    text: "Guests describe the auditorium and convention hall as roomy and comfortable, even for large crowds.",
    name: "Priya Nair",
    role: "Wedding Host",
    photo: "photo-1494790108377-be9c29b29330",
    rating: 5,
  },
  {
    title: "Parking is never a worry",
    text: "Ample parking space means guests arrive, celebrate and leave without hassle.",
    name: "Rahul Menon",
    role: "Corporate Event Planner",
    photo: "photo-1507003211169-0a1dd7228f2d",
    rating: 5,
  },
  {
    title: "Good facilities",
    text: "An air-conditioned hall, a dedicated food area and car parking make the day run smoothly.",
    name: "Anitha Krishnan",
    role: "Reception Guest",
    photo: "photo-1438761681033-6461ffad8d80",
    rating: 5,
  },
  {
    title: "Great for big events",
    text: "Well suited to weddings, receptions and other large gatherings.",
    name: "Suresh Kumar",
    role: "Family Function Host",
    photo: "photo-1500648767791-00dcc994a43e",
    rating: 5,
  },
  {
    title: "Praised dining",
    text: "Guests have singled out the in-house catering, which serves both local and global flavours.",
    name: "Meera Raghavan",
    role: "Engagement Ceremony Host",
    photo: "photo-1534528741775-53994a69daeb",
    rating: 5,
  },
];

// Quick Topics chips (label + icon)
export const searches = [
  { label: "Banquet Halls", icon: FiUser },
  { label: "Kalyana Mandapams", icon: FiUsers },
  { label: "AC Banquet Halls", icon: HiOutlineBuildingOffice2 },
];

// tone -> icon circle colour (gold, violet, blue, green, pink)
export const faqs = [
  {
    q: "How can I book a banquet hall at KMR Convention Centre?",
    a: "Get in touch with us during working hours, Monday to Sunday, 9:00 am – 5:00 pm, to make a booking. You can call, message on WhatsApp or send an enquiry from the Contact page.",
    icon: FiCalendar,
    tone: "gold",
    actions: true,
  },
  {
    q: "What amenities are available at KMR Convention Centre in Palakkad?",
    a: "The venue has a wheelchair-accessible entrance and exit, wheelchair-accessible car parking, 2 air-conditioned rooms, a bridal room, parking for 20 cars and electricity back-up.",
    icon: FiMapPin,
    tone: "violet",
  },
  {
    q: "What is the typical size of a banquet hall?",
    a: "Sizes vary from venue to venue and are usually matched to the number of guests. Our hall can host up to 1200 guests.",
    icon: FiGrid,
    tone: "blue",
  },
  {
    q: "Can I visit KMR Convention Centre before booking?",
    a: "Yes. You can visit in person during working hours to see the hall, facilities and amenities before you decide.",
    icon: FiClock,
    tone: "green",
  },
  {
    q: "Can I customise the decoration at KMR Convention Centre?",
    a: "Yes. Outside decorators are allowed, and you can talk to us about the decoration or arrangement you have in mind.",
    icon: HiOutlineSparkles,
    tone: "pink",
  },
];

// About page images (local files)
export const aboutImages = {
  story1: pic1,
  story2: entrance,
  hall: pic2,
  wedding: "/assets/wed.jpg",
  reception: "/assets/rec.jpg",
  corporate: "/assets/cor.jpg",
  birthday: "/assets/fam.jpg",
  cta: front,
};