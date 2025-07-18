import Link from "next/link";

import { FOOTER_DATA } from "@/constants";


export const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-br from-[#0a0026] via-[#1a0a3c] to-[#0a0026] text-gray-200 pt-12 pb-6 px-4 overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-[url('/stars.svg')] opacity-40 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a3c]/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center gap-10">
        <div className="w-full flex flex-wrap items-start justify-center gap-10">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[200px] flex flex-col items-center justify-start gap-2"
            >
              <h3 className="font-bold text-lg mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 drop-shadow-glow">
                {column.title}
              </h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                <Link
                  key={`${column.title}-${name}`}
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-2 my-2 px-4 py-2 rounded-full bg-[#1a0a3c]/60 hover:bg-[#2a0e61]/80 transition shadow-md hover:shadow-purple-700/40 text-cyan-200 hover:text-purple-300"
                >
                  {Icon && <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-gradient-to-br from-purple-700 to-cyan-700 shadow-md mr-2"><Icon className="h-5 w-5 text-white" /></span>}
                  <span className="text-base font-medium tracking-wide">{name}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col items-center mt-8">
          <div className="w-full h-0.5 bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 opacity-40 mb-4" />
          <div className="text-base text-center text-gray-300 font-semibold tracking-wide">
            &copy; Anadi Gupta {new Date().getFullYear()} &mdash; Space Technology Portfolio
          </div>
          <div className="mt-2 text-xs text-gray-500 text-center">
            Designed with <span className="text-purple-400">&#10024;</span> and passion for space
          </div>
        </div>
      </div>
    </footer>
  );
};
