import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Certificates } from "@/components/main/certificates";
import { Achievements } from "@/components/main/achievements";
import { Skills } from "@/components/main/skills";
import { Projects } from "@/components/main/projects";
import { Footer } from "@/components/main/footer";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Encryption />
        <Skills />
        <Certificates />
        <Achievements />
        <Projects />
      </div>
    </main>
  );
}
