import { FaCopyright } from 'react-icons/fa'; // Import copyright icon from react-icons

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="absolute bottom-6 left-0 right-0 z-20 flex items-center justify-center p-4 bg-transparent">
      <div className="flex items-center space-x-2" style={{ fontFamily: 'monospace' }}>
        <FaCopyright className="text-white" /> {/* Copyright Icon */}
        <span className="text-white">Ahmad Umar {currentYear}</span> {/* Name and Year */}
      </div>
    </footer>
  );
}
