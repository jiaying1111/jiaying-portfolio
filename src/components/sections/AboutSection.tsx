"use client";

import Image from "next/image";
import { AboutRoleAccordion } from "@/components/about/AboutRoleAccordion";
import { aboutContent, socialControls } from "@/data/site";
import { useLocale } from "@/i18n/LocaleProvider";
import { localize } from "@/i18n/localize";
import { ui } from "@/i18n/ui";

function EntryIndex({ index, date }: { index: string; date: string }) {
  return (
    <div className="about-entry__index-wrap">
      <span className="about-entry__index">{index}</span>
      <p className="about-entry__date">{date}</p>
    </div>
  );
}

export function AboutSection() {
  const { locale } = useLocale();
  const copy = ui(locale);
  const content = localize(aboutContent, locale);
  const controls = localize(socialControls, locale);
  const skillPills = [
    ...content.skills.languages,
    ...content.skills.items,
  ];

  return (
    <main className="about measure">
      <div className="about__intro">
        <div className="about__intro-copy">
          <h1 className="about__title">{content.title}</h1>
          <div className="about__social">
            {controls.map((control) =>
              control.href ? (
                <a
                  key={control.id}
                  className={`about-circle about-circle--${control.id}`}
                  href={control.href}
                  aria-label={control.label}
                  {...(control.href.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={control.icon.src} alt="" width={26} height={26} />
                </a>
              ) : (
                <span
                  key={control.id}
                  className={`about-circle about-circle--${control.id}`}
                  aria-hidden="true"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={control.icon.src} alt="" width={26} height={26} />
                </span>
              ),
            )}
          </div>
          <p className="about__bio">{content.biography}</p>
        </div>
        <div className="about__portrait">
          <Image
            src={content.portrait.src}
            alt={content.portrait.alt}
            fill
            sizes="(max-width: 899px) 320px, 532px"
            priority
          />
        </div>
      </div>

      <div className="about__rule" />

      <section className="about-section" aria-labelledby="about-education">
        <h2 className="about-section__title" id="about-education">
          {copy.education}
        </h2>
        <ol className="about-entries">
          {content.education.map((entry) => (
            <li key={entry.index}>
              <div className="about-entry">
                <EntryIndex index={entry.index} date={entry.date} />
                <div>
                  <p className="about-entry__organization">
                    {entry.institution}
                  </p>
                  <p className="about-entry__role">{entry.qualification}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section
        className="about-section about-section--flow"
        aria-labelledby="about-experience"
      >
        <h2 className="about-section__title" id="about-experience">
          {copy.selectedExperience}
        </h2>
        <AboutRoleAccordion
          entries={content.experience}
          sectionId="about-experience"
        />
      </section>

      <div className="about__rule" />

      <section className="about-section" aria-labelledby="about-awards">
        <h2 className="about-section__title" id="about-awards">
          {copy.awards}
        </h2>
        <ol className="about-entries">
          {content.awards.map((entry) => (
            <li key={entry.index}>
              <div className="about-entry">
                <EntryIndex index={entry.index} date={entry.date} />
                <div>
                  {entry.href ? (
                    <a
                      className="about-entry__organization about-entry__link"
                      href={entry.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {entry.title} ↗
                    </a>
                  ) : (
                    <p className="about-entry__organization">{entry.title}</p>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <div className="about__rule" />

      <section className="about-section" aria-labelledby="about-skills">
        <h2 className="about-section__title" id="about-skills">
          {copy.personalSkills}
        </h2>
        <ul className="about-skills">
          {skillPills.map((skill) => (
            <li key={skill} className="about-skill">
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
