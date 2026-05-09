import React from "react";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import LucasAlmeida from "../../assets/EquipeGallery/LucasAlmeida.png";
import BiaSantos from "../../assets/EquipeGallery/BiaSantos.png";
import RicardoOliveira from "../../assets/EquipeGallery/RicardoOliveira.png";
import CarlaMendes from "../../assets/EquipeGallery/CarlaMendes.png";


const team = [
  {
    name: "Lucas Almeida",
    role: "Full Stack Developer",
    image: LucasAlmeida,
  },
  {
    name: "Bia Santos",
    role: "UI/UX Designer",
    image: BiaSantos,
  },
  {
    name: "Ricardo Oliveira",
    role: "Motion Designer",
    image: RicardoOliveira,
  },
  {
    name: "Carla Mendes",
    role: "Frontend Engineer",
    image: CarlaMendes,
  },
  {
    name: "Carla Mendes",
    role: "Frontend Engineer",
    image: CarlaMendes,
  },
  {
    name: "Lucas Almeida",
    role: "Full Stack Developer",
    image: LucasAlmeida,
  },
  {
    name: "Bia Santos",
    role: "UI/UX Designer",
    image: BiaSantos,
  },
  {
    name: "Ricardo Oliveira",
    role: "Motion Designer",
    image: RicardoOliveira,
  },
  {
    name: "Carla Mendes",
    role: "Frontend Engineer",
    image: CarlaMendes,
  },
  {
    name: "Carla Mendes",
    role: "Frontend Engineer",
    image: CarlaMendes,
  },
];

function Cards({ pessoa }) {
  return (
    <article className="group w-full rounded-md bg-white p-3 shadow-[0_8px_24px_rgba(25,25,50,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(25,25,50,0.10)]">
      <div className="overflow-hidden rounded-sm bg-slate-100">
        <img
          src={pessoa.image}
          alt={pessoa.name}
          className="h-32 w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="pt-3">
        <h3 className="text-[11px] font-bold leading-tight text-slate-900">
          {pessoa.name}
        </h3>
        <p className="mt-1 text-[8px] font-medium text-slate-400">
          {pessoa.role}
        </p>

        <div className="mt-4 flex items-center gap-2">
          <a
            href="#"
            aria-label={`GitHub de ${pessoa.name}`}
            className="grid h-5 w-5 place-items-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-violet-100 hover:text-violet-700"
          >
            <FiGithub size={10} strokeWidth={2.2} />
          </a>
          <a
            href="#"
            aria-label={`LinkedIn de ${pessoa.name}`}
            className="grid h-5 w-5 place-items-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-violet-100 hover:text-violet-700"
          >
            <CiLinkedin size={10} strokeWidth={2.2} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function DevsDesignersSection() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f7f9] px-6 py-10 font-sans text-slate-900">
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-lime-200/45 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-8 h-56 w-56 rounded-full bg-violet-100/50 blur-3xl" />

      <section className="relative mx-auto max-w-6xl">
        <header className="mb-8">
          <h1 className="text-2xl font-extrabold tracking-tight text-violet-700 sm:text-3xl">
            Desenvolvedores & Designers
          </h1>
          <p className="mt-1 text-[10px] font-medium text-slate-400 sm:text-xs">
            A força criativa por trás de cada linha de código.
          </p>
        </header>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {team.map((pessoa, index) => (
            <Cards key={`${pessoa.name}-${index}`} pessoa={pessoa} />
          ))}
        </div>
      </section>
    </main>
  );
}
