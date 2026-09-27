"use client";

import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getWhatsAppUrl } from "@/data/siteConfig";
import { ArrowUpRight } from "lucide-react";
import GoogleTrustBadge from "@/components/GoogleTrustBadge";

const experiences = [
  {
    number: "01",
    title: "Family Escapes",
    description:
      "Journeys designed around spending time together, with a pace that works for everyone.",
  },
  {
    number: "02",
    title: "Romantic Getaways",
    description:
      "A change of scenery, a little time away and a journey built around the two of you.",
  },
  {
    number: "03",
    title: "Group Adventures",
    description:
      "Bring your people together and make the journey part of the memory.",
  },
  {
    number: "04",
    title: "First Time Abroad",
    description:
      "Not sure where to start? Begin with an idea and let the planning become simple.",
  },
  {
    number: "05",
    title: "Celebration Trips",
    description:
      "Birthdays, anniversaries, milestones or simply an excuse to get away.",
  },
  {
    number: "06",
    title: "Something Different",
    description:
      "Have a destination or idea that doesn't fit a category? Tell us about it.",
  },
];

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen bg-[#F7F5F0] text-[#101A2E]">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#101A2E] px-5 pb-24 pt-40 text-white sm:px-8 sm:pb-32 lg:px-12">
        <div className="absolute right-[-120px] top-[-140px] h-[520px] w-[520px] rounded-full border border-[#B87543]/15" />

        <div className="absolute right-[-40px] top-[-60px] h-[360px] w-[360px] rounded-full border border-[#B87543]/10" />

        <div className="relative mx-auto max-w-[1440px]">
          <p className="eyebrow mb-6 !text-[#E2B18D]">Experiences</p>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h1 className="display-heading text-7xl sm:text-8xl lg:text-[9rem]">
                Travel,
                <br />
                <span className="italic text-[#E2B18D]">your way.</span>
              </h1>
            </div>

            <div className="lg:col-span-4 lg:pb-5">
              <p className="max-w-md font-sans text-sm leading-7 text-white/50 sm:text-base">
                A family holiday, a romantic escape, a trip with friends or
                something completely your own. Start with what matters to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EXPERIENCE LIST
      ========================================================= */}
      <section className="bg-[#F7F5F0] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16 max-w-2xl">
            <p className="eyebrow mb-5">Find your kind of journey</p>

            <h2 className="display-heading text-6xl sm:text-7xl">
              What are you
              <br />
              <span className="italic text-[#B87543]">travelling for?</span>
            </h2>
          </div>

          <div className="border-t border-[#101A2E]/10">
            {experiences.map((experience) => (
              <a
                key={experience.number}
                href="/plan"
                className="group grid grid-cols-12 items-center gap-4 border-b border-[#101A2E]/10 py-8 transition-all duration-500 hover:px-3 sm:py-10"
              >
                <div className="col-span-2 sm:col-span-1">
                  <span className="font-sans text-[10px] tracking-[0.2em] text-[#B87543]">
                    {experience.number}
                  </span>
                </div>

                <div className="col-span-8 sm:col-span-9">
                  <h3 className="font-serif text-4xl font-light sm:text-5xl lg:text-6xl">
                    {experience.title}
                  </h3>

                  <p className="mt-2 max-w-xl font-sans text-xs leading-5 text-[#697181] sm:text-sm">
                    {experience.description}
                  </p>
                </div>

                <div className="col-span-2 flex justify-end sm:col-span-2">
                  <span className="flex h-10 w-10 items-center justify-center border border-[#101A2E]/15 text-[#101A2E]/50 transition-all duration-300 group-hover:border-[#B87543] group-hover:bg-[#B87543] group-hover:text-white">
                    ↗
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW IT WORKS
      ========================================================= */}
      <section className="bg-[#07101F] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-5 !text-[#E2B18D]">How it works</p>

              <h2 className="display-heading text-6xl sm:text-7xl lg:text-[6rem]">
                Simple
                <br />
                from the
                <br />
                <span className="italic text-[#E2B18D]">start.</span>
              </h2>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="border-t border-white/10">
                <div className="grid grid-cols-12 gap-5 border-b border-white/10 py-8 sm:py-10">
                  <div className="col-span-2">
                    <span className="font-sans text-[10px] tracking-[0.2em] text-[#B87543]">
                      01
                    </span>
                  </div>

                  <div className="col-span-10">
                    <h3 className="font-serif text-3xl font-light sm:text-4xl">
                      Tell us what you have in mind
                    </h3>

                    <p className="mt-3 max-w-lg font-sans text-sm leading-6 text-white/40">
                      A destination, a date, a reason to travel — or simply an
                      idea you're still figuring out.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-5 border-b border-white/10 py-8 sm:py-10">
                  <div className="col-span-2">
                    <span className="font-sans text-[10px] tracking-[0.2em] text-[#B87543]">
                      02
                    </span>
                  </div>

                  <div className="col-span-10">
                    <h3 className="font-serif text-3xl font-light sm:text-4xl">
                      Shape the journey
                    </h3>

                    <p className="mt-3 max-w-lg font-sans text-sm leading-6 text-white/40">
                      Discuss the details with us and work out what makes sense
                      for your trip.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-5 border-b border-white/10 py-8 sm:py-10">
                  <div className="col-span-2">
                    <span className="font-sans text-[10px] tracking-[0.2em] text-[#B87543]">
                      03
                    </span>
                  </div>

                  <div className="col-span-10">
                    <h3 className="font-serif text-3xl font-light sm:text-4xl">
                      Get ready to go
                    </h3>

                    <p className="mt-3 max-w-lg font-sans text-sm leading-6 text-white/40">
                      Once the details are sorted, your journey can finally
                      become the part you're excited about.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="bg-[#F7F5F0] px-5 py-28 sm:px-8 sm:py-36 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-4xl">
            <p className="eyebrow mb-6">Your trip doesn't need a label</p>

            <h2 className="display-heading text-6xl sm:text-7xl lg:text-[7.5rem]">
              Have something
              <br />
              <span className="italic text-[#B87543]">else in mind?</span>
            </h2>

            <p className="mt-8 max-w-lg font-sans text-sm leading-7 text-[#697181] sm:text-base">
              Tell us what you're imagining. The best place to start is a
              conversation.
            </p>

            <a
              href="/plan"
              className="group mt-10 inline-flex items-center gap-5 bg-[#101A2E] px-7 py-5 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#B87543]"
            >
              Start Planning
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <div className="mt-6">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#697181] transition-colors hover:text-[#B87543]"
              >
                WhatsApp · +91 97243 91674
              </a>
            </div>

            <div className="mt-8">
              <GoogleTrustBadge variant="pill" />
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </main>
  );
}
