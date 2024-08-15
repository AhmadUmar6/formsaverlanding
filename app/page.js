"use client";
import "./globals.css"; // Ensure Tailwind is applied
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShimmerButton from "@/components/magicui/shimmer-button";
import Meteors from "@/components/magicui/meteors"; // Import Meteors
import TypingAnimation from "@/components/magicui/typing-animation"; // Import TypingAnimation
import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import { AnimatedList } from "@/components/magicui/animated-list";
import {
  EyeClosedIcon,
  RocketIcon,
  LockClosedIcon,
  MagicWandIcon,
  ReloadIcon
} from "@radix-ui/react-icons";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { BorderBeam } from "@/components/magicui/border-beam";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import Marquee from "@/components/magicui/marquee";
import { FaChrome } from "react-icons/fa";
import { motion } from 'framer-motion';


const features = [
  {
    Icon: LockClosedIcon,
    name: "Secure Local Storage",
    description: "Securely store all form data locally, ensuring privacy.",
    background: <img src="/local.png" className="absolute -right-10 -top-50 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3 bg-[#8c1eff] bg-opacity-100 backdrop-blur-sm shadow-lg shadow-[#3b0003]/20 border border-[#3b0003]/10 transition-all duration-300 hover:shadow-[#3b0003]/40 text-white",
  },
  {
    Icon: RocketIcon,
    name: "Auto Save",
    description: "Enable Auto Save and let every field be captured in real-time.",
    background: <img src="/icon.png" className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 bg-[#ffd319] bg-opacity-100 backdrop-blur-sm shadow-lg shadow-[#3b0003]/20 border border-[#3b0003]/10 transition-all duration-300 hover:shadow-[#3b0003]/40 text-white",
  },
  {
    Icon: EyeClosedIcon,
    name: "Smart Data Exclusion",
    description: "Excludes passwords and sensitive information from being stored.",
    background: <img src="/pass.png" className="absolute right-0 bottom-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4 bg-[#8c1eff] bg-opacity-100 backdrop-blur-sm shadow-lg shadow-[#3b0003]/20 border border-[#3b0003]/10 transition-all duration-300 hover:shadow-[#3b0003]/40 text-white",
  },
  {
    Icon: MagicWandIcon,
    name: "Intuitive & Effortless",
    description: "Start saving form data automatically with just a click.",
    background: <img src="/easyy.png" className="absolute -right-10 bottom-5 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2 bg-[#8c1eff] bg-opacity-100 backdrop-blur-sm shadow-lg shadow-[#3b0003]/20 border border-[#3b0003]/10 transition-all duration-300 hover:shadow-[#3b0003]/40 text-white",
  },
  {
    Icon: ReloadIcon,
    name: "Restore Data",
    description: "Restore your progress with a single click.",
    background: <img src="/restore.png" className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4 bg-[#ffd319] bg-opacity-100 backdrop-blur-sm shadow-lg shadow-[#3b0003]/20 border border-[#3b0003]/10 transition-all duration-300 hover:shadow-[#3b0003]/40 text-white",
  },
];

// BentoDemo Component
export function BentoDemo() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}

const notifications = [
  {
    name: "Auto Save Started",
    description: "FormSaver",
    time: "2m ago",
    icon: "✅",
    color: "#00C9A7",
  },
  {
    name: "Auto Save Stopped",
    description: "FormSaver",
    time: "1m ago",
    icon: "⛔",
    color: "#FFB800",
  },
  {
    name: "Data Restored",
    description: "FormSaver",
    time: "just now",
    icon: "🔄",
    color: "#FF3D71",
  },
];

// Repeat notifications for demo purposes
const repeatedNotifications = Array.from({ length: 10 }, () => notifications).flat();

// Notification component
const Notification = ({ name, description, icon, color, time }) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

// AnimatedListDemo component
export function AnimatedListDemo({ className }) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg border bg-background md:shadow-xl",
        className,
      )}
    >
      <AnimatedList>
        {repeatedNotifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}

// HomePage component
export default function HomePage() {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #000000, #0a0044 4%, #222153 36%, #0a0044 79%, #000000 99%)',
      }}
    >
      <MeteorDemo /> {/* Add MeteorDemo here */}
      <Header />
      <Section1 />
      <Divider />
      <Section2 />
      <Divider />
      <Section3 />
      <Footer />
    </div>
  );
}

// Divider component
function Divider() {
  return (
    <div className="relative w-3/4 mx-auto my-4">
      <div className="border-t border-gray-700"></div>
      <BorderBeam size={250} duration={12} delay={9} />
    </div>
  );
}

// MeteorDemo component
function MeteorDemo() {
  return (
    <div className="absolute inset-5 flex items-center justify-center overflow-hidden">
      <Meteors number={30} />
    </div>
  );
}

// Section1 component
const OrbitingBrowsers = () => {
  return (
    <div className="relative w-48 h-48">
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-lg font-mono text-white">Available on:</span>
      </div>
      {['chrome.png', 'safari.png'].map((browser, index) => (
        <motion.div
          key={browser}
          className="absolute w-12 h-12"
          initial={{ rotate: index * 180 }}
          animate={{
            rotate: [index * 180, index * 180 + 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            top: '50%',
            left: '50%',
            x: '-50%',
            y: '-50%',
          }}
        >
          <motion.div
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img src={browser} alt={browser.split('.')[0]} className="w-20 h-20 object-contain" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

function Section1() {
  return (
    <div className="flex flex-col justify-center items-center text-center min-h-[60vh] mt-40">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 space-y-10 lg:space-y-0 lg:space-x-4">
        {/* Left Section - Orbiting Browsers */}
        <div className="w-full lg:w-1/6 flex justify-center lg:justify-start">
          <OrbitingBrowsers />
        </div>

        {/* Center Section - Main Text and Button */}
        <div className="w-full lg:w-2/4 flex flex-col items-center text-center">
          <div className="relative mb-6">
            <TypingAnimation
              duration={100}
              className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-6xl lg:text-7xl font-serif font-medium leading-tight tracking-tighter text-transparent"
              text="Save Your Form Progress, Restore Anytime."
            />
          </div>
          <div className="flex justify-center w-full mt-6">
            <a href="https://chrome.google.com/webstore" target="_blank" rel="noopener noreferrer">
              <ShimmerButton
                background="#0a0033"
                className="px-12 py-4 text-lg font-medium flex items-center justify-center"
              >
                <FaChrome className="text-white mr-2" />
                <span className="whitespace-pre-wrap text-center text-sm font-medium font-mono leading-none tracking-tight text-white lg:text-lg">
                  Get Started
                </span>
              </ShimmerButton>
            </a>
          </div>
        </div>

        {/* Right Section - Animated List Demo */}
        <div className="w-full lg:w-1/4 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm">
            <div className="absolute inset-0 bg-gray-800 rounded-xl opacity-20"></div>
            <AnimatedListDemo className="relative z-10 p-3 border-transparent bg-transparent rounded-xl max-h-[20rem] overflow-y-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Section2 component
function Section2() {
  return (
    <div
      id="section2"
      className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden"
    >
      <DotPatternDemo />
      <div className="relative z-10 text-center w-full max-w-6xl"> 
        <h2
          className="text-7xl font-serif font-medium mb-12 bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-transparent leading-ttight tracking-tighter"
        >
          Features
        </h2>
        <div className="w-full mx-auto"> 
          <BentoDemo />
        </div>
      </div>
    </div>
  );
}

// Section3 component
function Section3() {
  return (
    <div
      id="section3"
      className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden mb-24"
    >
      <DotPatternDemo />
      <div className="relative z-10 text-center w-full max-w-6xl">
        {/* Header with gradient text */}
        <h2
          className="text-7xl font-serif font-medium mb-12 bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-transparent leading-tight tracking-tighter"
        >
          Use Cases
        </h2>

        {/* Neon Gradient Card with sec3.png */}
        <NeonGradientCard
          className="inline-block items-center justify-center text-center"
          neonColors={{ firstColor: "#ffffff", secondColor: "#ffff00" }}
          borderSize={6}
          borderRadius={40}
        >
          <img
            src="sec3.png"
            alt="Section 3 Content"
            className="block max-w-full h-auto rounded-xl"
          />
        </NeonGradientCard>

        {/* Marquee Component */}
        <div className="mt-12">
          <MarqueeDemo />
        </div>
      </div>
    </div>
  );
}

function MarqueeDemo() {
  const reviews = [
    {
      name: "Alice Johnson",
      username: "@alicej",
      body: "Saving my progress on lengthy legal documents has never been easier. I can pause and resume with confidence!",
      img: "https://avatar.vercel.sh/alice",
    },
    {
      name: "Bob Smith",
      username: "@bobsmith",
      body: "Filling out complex financial forms is now stress-free. I can save my progress as I gather information.",
      img: "https://avatar.vercel.sh/bob",
    },
    {
      name: "Catherine Lee",
      username: "@catherinelee",
      body: "As a student, managing research submissions is a breeze with automatic saving features. No more lost work!",
      img: "https://avatar.vercel.sh/catherine",
    },
    {
      name: "David King",
      username: "@davidking",
      body: "Managing multiple drafts has never been simpler. I can switch between them effortlessly and never lose my ideas.",
      img: "https://avatar.vercel.sh/david",
    },
    {
      name: "Eva Martinez",
      username: "@evam",
      body: "Consistency across multi-step processes is now guaranteed. I can revisit sections without losing any data.",
      img: "https://avatar.vercel.sh/eva",
    },
    {
      name: "Frank Wilson",
      username: "@frankw",
      body: "I can fill out sensitive forms knowing my data is secure. The smart exclusion feature keeps my information safe.",
      img: "https://avatar.vercel.sh/frank",
    },
  ];

  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  const ReviewCard = ({ img, name, username, body }) => {
    return (
      <figure
        className={cn(
          "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
          // light styles
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <img className="rounded-full" width="32" height="32" alt="" src={img} />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium dark:text-white/40">{username}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm dark:text-white/80">{body}</blockquote>
      </figure>
    );
  };

  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}


// DotPatternDemo component
function DotPatternDemo() {
  return (
    <div className="absolute inset-0 z-[5]">
      <DotPattern
        className={cn(
          "h-full w-full",
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
  );
}
