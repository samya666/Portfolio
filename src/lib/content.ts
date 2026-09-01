// -----------------------------------------------------------------------------
// Portfolio content — sourced from Samya Bhattacharjee's résumé.
// Single source of truth so every section stays consistent.
// -----------------------------------------------------------------------------

export const IDENTITY = {
  name: "Samya Bhattacharjee",
  role: "Visual Artist",
  discipline: "Animation · Post-Production · AI Motion",
  summary:
    "Dynamic visual artist crafting compelling visual content across animation, 3D lighting and texturing, compositing, and AI-assisted motion. Fifteen-plus years spanning studio pipelines, broadcast post, and the classroom — now folding a fluent AI toolkit into a classically trained hand.",
  location: "Santipur, Nadia · West Bengal, India",
  email: "samya.pegusus@gmail.com",
  phone: "+91 86176 25059",
  // Split for the oversized hero display type — one fragment per line.
  nameFragments: ["Samya", "Bhattacharjee"],
  // Footer / hero clock module.
  city: "IST",
  timeZone: "Asia/Kolkata",
} as const;

// -----------------------------------------------------------------------------
// Long-form copy. Kept here so the sections stay presentational.
// -----------------------------------------------------------------------------

export const STATEMENT = {
  // Section 002 — the opening statement under the hero.
  intro:
    "I build visual content that holds attention — frames composed with intent, cuts timed to breathe, and light that tells you where to look. Fifteen years across studio pipelines, broadcast post, and the classroom taught me that craft outlasts trend, so I favour the decision that still reads well a year later.",
  locator: "Based in West Bengal // Working globally",

  // Section 007 — about.
  about:
    "I'm a visual artist working across animation, post-production, and systems design for images.",
  philosophy:
    "I enjoy taking a rough idea and finding the version of it that actually moves people — then building it so it survives contact with a real deadline.",
  aboutBody:
    "My work sits between the classical and the computational. I was trained on paper and on 2D keyframes, spent years lighting and texturing in Maya, and now run generative tools alongside a compositing stack. Neither replaces the other: the AI gets me to a look faster, the training tells me whether the look is any good.",
} as const;

export const BANNER = ["good", "frames", "start", "with", "a", "good", "story"] as const;

// -----------------------------------------------------------------------------
// Approach — how the work gets made.
// -----------------------------------------------------------------------------

export type Principle = { title: string; body: string };

export const approach: Principle[] = [
  {
    title: "Story before polish",
    body: "Effects are cheap and story is not. I lock the edit and the read of a sequence before spending a single hour on finish.",
  },
  {
    title: "Classical craft, current tools",
    body: "Composition, timing, and lighting fundamentals learned on 2D and 3D pipelines — applied through whatever software gets there cleanest.",
  },
  {
    title: "Organised by default",
    body: "Named assets, tidy timelines, versioned projects. Post is a team sport, and nobody should have to guess where the footage lives.",
  },
  {
    title: "Delivered, not almost",
    body: "Years of broadcast and education deadlines. I would rather flag a problem early than hand over something that misses the date.",
  },
];

// -----------------------------------------------------------------------------
// Services — what I take on.
// -----------------------------------------------------------------------------

export const services: Principle[] = [
  {
    title: "Post-Production & Editing",
    body: "Story edits, B-roll assembly, colour grading, audio balance, and finishing — from rushes to delivery master.",
  },
  {
    title: "3D Animation & Lighting",
    body: "Character and environment animation, texturing, and lighting or look-development built for a render pipeline.",
  },
  {
    title: "AI Visual Generation",
    body: "Concept frames, plate extension, and motion built with a generative stack, then composited so the seams disappear.",
  },
  {
    title: "Pre-Production & Art",
    body: "Concept illustration, background and matte painting, storyboards, animatics, and scene layout.",
  },
];

// -----------------------------------------------------------------------------
// Showreel — the seven trimmed clips (public/videos/reel/<slug>.mp4 + .jpg).
// Dimensions are the real encoded output, so object-contain stays honest.
// -----------------------------------------------------------------------------

export type Orientation = "portrait" | "landscape" | "wide";

export type Clip = {
  id: string;
  title: string;
  role: string; // what Samya did on it
  tags: string[]; // tools / medium
  year: string;
  src: string;
  poster: string;
  w: number;
  h: number;
  orientation: Orientation;
  className: string; // 12-col placement for the broken editorial grid
};

export const clips: Clip[] = [
  {
    id: "singularity",
    title: "Singularity",
    role: "3D · Lighting & Look-Dev · VFX",
    tags: ["Maya", "Blender", "Nuke X"],
    year: "2024",
    src: "/videos/reel/singularity.mp4",
    poster: "/videos/reel/singularity.jpg",
    w: 1280,
    h: 720,
    orientation: "landscape",
    className: "md:col-span-8",
  },
  {
    id: "teabox",
    title: "Teabox",
    role: "Product Film · Motion Design",
    tags: ["Blender", "After Effects"],
    year: "2024",
    src: "/videos/reel/teabox.mp4",
    poster: "/videos/reel/teabox.jpg",
    w: 1024,
    h: 1280,
    orientation: "portrait",
    className: "md:col-span-4",
  },
  {
    id: "hello",
    title: "Hello",
    role: "Character · Motion",
    tags: ["After Effects", "Toon Boom"],
    year: "2025",
    src: "/videos/reel/hello.mp4",
    poster: "/videos/reel/hello.jpg",
    w: 720,
    h: 1280,
    orientation: "portrait",
    className: "md:col-span-4 md:mt-10",
  },
  {
    id: "pose3-music-video",
    title: "Pose 3 — Music Video",
    role: "Post-Production · Compositing",
    tags: ["After Effects", "Premiere Pro"],
    year: "2023",
    src: "/videos/reel/pose3-music-video.mp4",
    poster: "/videos/reel/pose3-music-video.jpg",
    w: 1280,
    h: 544,
    orientation: "wide",
    className: "md:col-span-8 md:mt-24",
  },
  {
    id: "brightlife",
    title: "BrightLife",
    role: "Commercial · Compositing",
    tags: ["After Effects", "Nuke X"],
    year: "2024",
    src: "/videos/reel/brightlife.mp4",
    poster: "/videos/reel/brightlife.jpg",
    w: 1280,
    h: 720,
    orientation: "landscape",
    className: "md:col-span-7 md:-mt-4",
  },
  {
    id: "finish-the-book",
    title: "Finish The Book",
    role: "Animation · Storytelling",
    tags: ["Toon Boom Harmony", "Photoshop"],
    year: "2023",
    src: "/videos/reel/finish-the-book.mp4",
    poster: "/videos/reel/finish-the-book.jpg",
    w: 1280,
    h: 720,
    orientation: "landscape",
    className: "md:col-span-5 md:mt-16",
  },
  {
    id: "ai-captions",
    title: "AI Captions — WW",
    role: "AI Motion · Compositing",
    tags: ["Runway ML", "ComfyUI", "After Effects"],
    year: "2025",
    src: "/videos/reel/ai-captions.mp4",
    poster: "/videos/reel/ai-captions.jpg",
    w: 720,
    h: 1280,
    orientation: "portrait",
    className: "md:col-span-4 md:col-start-5 md:mt-6",
  },
];

// -----------------------------------------------------------------------------
// Experience — studios, broadcast, and teaching.
// -----------------------------------------------------------------------------

export type Job = {
  role: string;
  org: string;
  location: string;
  period?: string;
  note: string;
};

export const experience: Job[] = [
  {
    role: "Video Editor",
    org: "CNTV",
    location: "Denver, Colorado · USA",
    note: "Editing and post-production for broadcast and online video.",
  },
  {
    role: "Freelance Visual Artist",
    org: "Independent",
    location: "Remote",
    note: "Concept art, illustration, and motion across varied client briefs.",
  },
  {
    role: "Animation Faculty",
    org: "Hi-Tech Film & Broadcast Academy",
    location: "Kolkata",
    note: "Teaching animation craft, pipeline, and production discipline.",
  },
  {
    role: "Post-Production Artist",
    org: "BYJU'S",
    location: "Mumbai",
    note: "Post-production for large-scale educational content.",
  },
  {
    role: "Post-Production Artist",
    org: "Pose3 Pvt. Ltd.",
    location: "Siliguri",
    note: "Music-video and commercial post — compositing and finishing.",
  },
  {
    role: "Pre-Production Artist",
    org: "Trendy Toons",
    location: "Kolkata",
    period: "1 yr 6 mo",
    note: "Storyboards, concept, and pre-production for animated series.",
  },
  {
    role: "Animation Faculty",
    org: "Creative Cinematic Art",
    location: "Siliguri",
    period: "1 yr",
    note: "Mentoring students through the full animation pipeline.",
  },
  {
    role: "Pre-Production Artist",
    org: "Spellbound Studio",
    location: "Pune",
    period: "8 mo",
    note: "Concept development and pre-production design.",
  },
  {
    role: "Animation Faculty",
    org: "Aniguru Pvt. Ltd.",
    location: "Hyderabad",
    period: "1 yr",
    note: "Classroom instruction in 2D and 3D animation.",
  },
  {
    role: "Master Lighting Artist",
    org: "DQ International",
    location: "Hyderabad",
    period: "1 yr 2 mo",
    note: "Lighting and look-development for episodic productions.",
  },
];

// -----------------------------------------------------------------------------
// Toolbox — disciplines, AI tools, and software.
// -----------------------------------------------------------------------------

export const disciplines: string[] = [
  "BG Painting",
  "Concept Art",
  "Graphics Design",
  "Sketching & Painting",
  "Story-Boarding & Animatics",
  "Video Compositing & Editing",
];

export const aiTools: string[] = [
  "Adobe Firefly",
  "Autodesk Flow Studio",
  "AUTOMATIC1111",
  "ComfyUI",
  "ElevenLabs",
  "Google Veo",
  "Higgsfield",
  "Hugging Face",
  "Ideogram",
  "Kling AI",
  "Leonardo AI",
  "LTX Studio",
  "Luma Dream Machine",
  "Midjourney",
  "OpenArt",
  "Runway ML",
  "Seedance",
  "Wan",
];

export const software: string[] = [
  "3ds Max",
  "After Effects",
  "Photoshop",
  "Premiere Pro",
  "Autodesk Maya",
  "Blender",
  "Flash",
  "Nuke X",
  "Toon Boom Animate",
  "Toon Boom Harmony",
  "Toon Boom Storyboard Pro",
];

// -----------------------------------------------------------------------------
// Education & training.
// -----------------------------------------------------------------------------

export type Study = {
  title: string;
  org: string;
  location: string;
  year?: string;
};

export const education: Study[] = [
  {
    title: "Diploma — 2D (Classical) & 3D Animation · specialised in Texturing & Lighting",
    org: "WEBEL Animation Academy",
    location: "Kolkata",
    year: "2007",
  },
  {
    title: "Training in Tattooing Artistry",
    org: "The Rights of the Passage",
    location: "Kolkata",
    year: "2018",
  },
  {
    title: "Diploma in Fine Arts",
    org: "Prachin Kala Kendra",
    location: "Chandigarh",
  },
  {
    title: "Senior Secondary — WBCHSE",
    org: "West Bengal Council of Higher Secondary Education",
    location: "West Bengal",
    year: "2006",
  },
  {
    title: "Secondary — WBBSE",
    org: "West Bengal Board of Secondary Education",
    location: "West Bengal",
    year: "2004",
  },
];
