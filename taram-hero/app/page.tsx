'use client';

import Image from 'next/image';
import { FiCalendar, FiArrowDown } from 'react-icons/fi';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050A0A] text-white px-4">
      <section className="max-w-5xl mx-auto pt-24 pb-24 text-center space-y-10">
        {/* Bulle du haut */}
        <div className="inline-flex items-center justify-center gap-3 rounded-full border border-emerald-400/40 bg-white/95 px-9 py-4 shadow-[0_0_60px_rgba(74,222,128,0.8)] text-black mx-auto">
          <div className="relative h-8 w-8 overflow-hidden rounded-full bg-emerald-400/10 flex items-center justify-center">
            <Image
              src="/logo-bulle.png"
              alt="Logo bulle"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-sm md:text-base font-semibold tracking-[0.14em] uppercase">
            CRÉER UN SITE WEB{' '}
            <span className="underline decoration-black/80 decoration-2 underline-offset-4">
              VRAIMENT
            </span>{' '}
            UNIQUE
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-[32px] md:text-[52px] font-semibold leading-[1.3]">
          Votre <span className="text-emerald-400">site</span> doit{' '}
          <span className="text-emerald-400">donner envie</span> de
          <br className="hidden md:block" />
          <span className="text-emerald-400">rester</span>, pas de{' '}
          <span className="relative inline-block">
            <span className="text-emerald-400">revenir</span>{' '}
            <span className="text-white">en</span>
            <span className="pointer-events-none absolute inset-x-0 top-[54%] z-10 h-[2px] -translate-y-1/2 rounded-full bg-[#EAF7F2]/70 shadow-[0_0_14px_rgba(74,222,128,0.18)] blur-[0.2px]" />
          </span>{' '}
          <br className="hidden md:block" />
          <span className="relative inline-block">
            <span className="text-emerald-400">arrière</span>
            <span className="pointer-events-none absolute inset-x-0 top-[54%] z-10 h-[2px] -translate-y-1/2 rounded-full bg-[#EAF7F2]/70 shadow-[0_0_14px_rgba(74,222,128,0.18)] blur-[0.2px]" />
          </span>
          .
        </h1>

        {/* Subheadline */}
        <p className="mt-5 text-sm md:text-lg text-zinc-300/80 max-w-3xl mx-auto">
          Design moderne, SEO solide, Suivi complet :
          <br className="hidden md:block" />
          on construit un site qui retient vos visiteurs et vous apporte des résultats.
        </p>

        {/* Boutons */}
        <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <div className="relative">
            <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/70 bg-emerald-400 px-8 py-3 text-sm font-semibold text-black shadow-[0_0_32px_rgba(74,222,128,0.65)] transition hover:bg-emerald-300">
              <FiCalendar className="text-lg" />
              <span>Prendre RDV</span>
            </button>

            {/* "Un p'tit click ?" */}
            <div className="pointer-events-none mt-4 flex justify-center -translate-x-10 opacity-85 sm:hidden">
              <Image
                src="/un-ptit-click.png"
                alt="Un p'tit click ?"
                width={190}
                height={60}
                className="h-auto w-[145px]"
              />
            </div>

            <div className="hidden sm:block pointer-events-none absolute -left-6 -bottom-14 opacity-85 md:-left-8 md:-bottom-16 lg:-left-12">
              <Image
                src="/un-ptit-click.png"
                alt="Un p'tit click ?"
                width={190}
                height={60}
                className="h-auto w-[165px] md:w-[175px]"
              />
            </div>
          </div>

          <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-400/70 px-8 py-3 text-sm font-semibold text-emerald-400/90 bg-transparent transition hover:bg-emerald-400/10">
            <span>Découvrir nos projets</span>
            <FiArrowDown className="text-lg" />
          </button>
        </div>
      </section>
    </main>
  );
}