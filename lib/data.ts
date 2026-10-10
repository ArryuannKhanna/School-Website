// All site content lives here. Edit this file to update the website.
// Items marked "TODO" are placeholders — replace them with the school's real details.

export const school = {
  name: "PM SHRI GSSS Dagshai",
  fullName: "PM SHRI Government Senior Secondary School, Dagshai",
  location: "Dagshai, District Solan, Himachal Pradesh",
  board: "Himachal Pradesh Board of School Education (HPBOSE)",
  address: "Dagshai Cantonment, Tehsil & District Solan, Himachal Pradesh – 173210", // TODO: verify PIN
  phone: "+91 00000 00000", // TODO
  email: "gsssdagshai@example.com", // TODO
  hours: "Mon – Sat, 9:00 AM – 3:30 PM", // TODO: verify
  udise: "TODO", // UDISE code
};

export const stats = [
  { value: "6 – 12", label: "Classes" },
  { value: "HPBOSE", label: "Affiliation" },
  { value: "Free", label: "Education & textbooks" },
  { value: "PM SHRI", label: "Model school" },
];

export type NewsItem = {
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  category: "Announcement" | "Event" | "Achievement" | "Admissions";
  summary: string;
  body: string[];
};

export const news: NewsItem[] = [
  {
    slug: "admissions-open-2027-28",
    title: "Admissions open for session 2027–28",
    date: "2026-10-05",
    category: "Admissions",
    summary:
      "Registration for Classes 6, 9 and 11 is now open at the school office. Parents can also send an enquiry online.",
    body: [
      "Registration for the 2027–28 academic session is now open for Classes 6, 9 and 11. Admission to other classes is subject to availability of seats.",
      "Parents and guardians may collect the admission form from the school office during working hours, or send an enquiry through the Admissions page of this website.",
      "Please bring the original documents listed on the Admissions page along with one set of photocopies at the time of admission.",
    ],
  },
  {
    slug: "annual-sports-meet",
    title: "Annual Sports Meet held on the school ground",
    date: "2026-09-20",
    category: "Event",
    summary:
      "Students competed in athletics, kho-kho, kabaddi and volleyball across house teams in a day full of energy.",
    body: [
      "The school held its Annual Sports Meet with students from all classes taking part in track events, kho-kho, kabaddi, volleyball and tug-of-war.",
      "The Principal congratulated the winners and thanked the physical education department and house in-charges for organising the event.",
    ],
  },
  {
    slug: "science-exhibition",
    title: "Students showcase projects at district science exhibition",
    date: "2026-08-28",
    category: "Achievement",
    summary:
      "Our science club presented working models on renewable energy and water conservation at the district-level exhibition in Solan.",
    body: [
      "Members of the school science club represented the school at the district-level science exhibition held in Solan.",
      "The team presented working models on solar energy for hill homes and rainwater harvesting, and received appreciation from the judges.",
    ],
  },
  {
    slug: "independence-day-2026",
    title: "Independence Day celebrated with flag hoisting and cultural programme",
    date: "2026-08-15",
    category: "Event",
    summary:
      "The school community gathered for flag hoisting, followed by patriotic songs, a Pahari folk dance and a speech competition.",
    body: [
      "The 80th Independence Day was celebrated in the school with flag hoisting by the Principal, followed by the National Anthem.",
      "Students presented patriotic songs, a Pahari folk dance and speeches on the theme of the nation's progress.",
    ],
  },
  {
    slug: "eco-club-plantation-drive",
    title: "Eco Club plantation drive around Dagshai",
    date: "2026-07-18",
    category: "Event",
    summary:
      "Students planted native saplings near the school campus as part of the PM SHRI green school initiative.",
    body: [
      "As part of the PM SHRI green school initiative, the Eco Club organised a plantation drive near the school campus.",
      "Students planted native saplings and took a pledge to care for them through the year.",
    ],
  },
  {
    slug: "half-yearly-exam-schedule",
    title: "Half-yearly examination date sheet released",
    date: "2026-09-02",
    category: "Announcement",
    summary:
      "The date sheet for half-yearly examinations is available at the school notice board and with class teachers.",
    body: [
      "The date sheet for the half-yearly examinations has been released. Students can collect a copy from their class teacher or check the school notice board.",
    ],
  },
];

export type Faculty = {
  name: string;
  role: string;
  subject: string;
  department: "Administration" | "Science" | "Humanities" | "Languages" | "Mathematics" | "Commerce" | "Co-curricular";
  qualification: string;
};

// TODO: replace with the actual staff list.
export const faculty: Faculty[] = [
  { name: "Principal Name", role: "Principal", subject: "Administration", department: "Administration", qualification: "M.A., B.Ed." },
  { name: "Lecturer Name", role: "Lecturer", subject: "Physics", department: "Science", qualification: "M.Sc., B.Ed." },
  { name: "Lecturer Name", role: "Lecturer", subject: "Chemistry", department: "Science", qualification: "M.Sc., B.Ed." },
  { name: "Lecturer Name", role: "Lecturer", subject: "Biology", department: "Science", qualification: "M.Sc., B.Ed." },
  { name: "Lecturer Name", role: "Lecturer", subject: "Mathematics", department: "Mathematics", qualification: "M.Sc., B.Ed." },
  { name: "Lecturer Name", role: "Lecturer", subject: "English", department: "Languages", qualification: "M.A., B.Ed." },
  { name: "Lecturer Name", role: "Lecturer", subject: "Hindi", department: "Languages", qualification: "M.A., B.Ed." },
  { name: "Lecturer Name", role: "Lecturer", subject: "History", department: "Humanities", qualification: "M.A., B.Ed." },
  { name: "Lecturer Name", role: "Lecturer", subject: "Political Science", department: "Humanities", qualification: "M.A., B.Ed." },
  { name: "Lecturer Name", role: "Lecturer", subject: "Economics", department: "Commerce", qualification: "M.A., B.Ed." },
  { name: "Teacher Name", role: "TGT", subject: "Sanskrit", department: "Languages", qualification: "Shastri, B.Ed." },
  { name: "Teacher Name", role: "TGT", subject: "Non-Medical", department: "Mathematics", qualification: "B.Sc., B.Ed." },
  { name: "Teacher Name", role: "TGT", subject: "Arts", department: "Humanities", qualification: "B.A., B.Ed." },
  { name: "Teacher Name", role: "DPE", subject: "Physical Education", department: "Co-curricular", qualification: "M.P.Ed." },
  { name: "Teacher Name", role: "Computer Teacher", subject: "Computer Science", department: "Science", qualification: "MCA" },
  { name: "Teacher Name", role: "Drawing Master", subject: "Fine Arts", department: "Co-curricular", qualification: "Diploma in Fine Arts" },
];

export type GalleryItem = {
  title: string;
  category: "Campus" | "Events" | "Sports" | "Academics" | "Cultural";
  // Put photos in /public/gallery and set src: "/gallery/your-photo.jpg".
  // Items without src show a coloured placeholder tile.
  src?: string;
};

export const gallery: GalleryItem[] = [
  { title: "Morning assembly", category: "Campus" },
  { title: "School building", category: "Campus" },
  { title: "View of the hills from campus", category: "Campus" },
  { title: "Independence Day parade", category: "Events" },
  { title: "Annual Day stage", category: "Events" },
  { title: "Plantation drive", category: "Events" },
  { title: "Volleyball match", category: "Sports" },
  { title: "100 m sprint", category: "Sports" },
  { title: "Kabaddi finals", category: "Sports" },
  { title: "Science lab practical", category: "Academics" },
  { title: "Smart classroom", category: "Academics" },
  { title: "Library reading hour", category: "Academics" },
  { title: "Pahari folk dance", category: "Cultural" },
  { title: "Rangoli competition", category: "Cultural" },
  { title: "Music and choir", category: "Cultural" },
];
