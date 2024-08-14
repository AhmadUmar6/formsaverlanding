import Link from 'next/link';
import Image from 'next/image';
import SparklesText from "@/components/magicui/sparkles-text"; // Import SparklesText

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image src="/icon.png" alt="Logo" width={50} height={50} />
      <SparklesText sparklesCount="2" text="FormSaver" className="text-white font-medium text-xl" /> 
    </Link>
  );
}
