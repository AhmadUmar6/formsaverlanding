'use client'
import Logo from '@/components/Logo'; // Import the Logo component

export default function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="absolute top-10 left-10 right-0 z-20 flex items-center p-4 bg-transparent">
      <div className="flex items-center space-x-4" style={{ fontFamily: 'monospace' }}>
        <Logo /> {/* Use the Logo component */}
        <nav className="flex space-x-4">
          <a
            href="#"
            className="text-white hover:underline cursor-pointer"
            onClick={() => scrollToSection('section2')}
          >
            Features
          </a>
          <a
            href="#"
            className="text-white hover:underline cursor-pointer"
            onClick={() => scrollToSection('section3')}
          >
            Use Cases
          </a>
        </nav>
      </div>
    </header>
  );
}
