import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:border-[#634ddf] transition-all duration-300 bg-[#0300145e] backdrop-blur-sm"
    >
      <div className="w-full h-[200px] overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="relative p-6">
        <div className="flex items-center mb-3">
          <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            {title}
          </h1>
        </div>
        <p className="mt-2 text-gray-300 text-sm leading-relaxed">{description}</p>
        <div className="mt-4 inline-block py-1 px-3 bg-[#2A0E61] rounded-full text-xs text-cyan-300 hover:bg-[#422dad] transition-colors">
          View Details →
        </div>
      </div>
    </Link>
  );
};
