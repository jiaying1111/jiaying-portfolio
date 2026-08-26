import Image from "next/image";
import { aboutContent, socialControls } from "@/data/site";
import type { AboutRoleEntry } from "@/data/site";

function EntryIndex({ index, date }: { index: string; date: string }) {
  return (
    <div className="about-entry__index-wrap">
      <span className="about-entry__index">{index}</span>
      <p className="about-entry__date">{date}</p>
    </div>
  );
}

function RoleEntries({ entries }: { entries: readonly AboutRoleEntry[] }) {
  return (
    <ol className="about-entries">
      {entries.map((entry) => (
        <li key={`${entry.index}-${entry.organization}`}>
          <div className="about-entry">
            <EntryIndex index={entry.index} date={entry.date} />
            <div>
              <p className="about-entry__organization">{entry.organization}</p>
              <p className="about-entry__role">{entry.role}</p>
              <ul className="about-entry__bullets">
                {entry.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function AboutSection() {
  const skillPills = [
    ...aboutContent.skills.languages,
    ...aboutContent.skills.items,
  ];

  return (
    <main className="about measure">
      <div className="about__intro">
        <div>
          <h1 className="about__title">{aboutContent.title}</h1>
          <div className="about__social">
            {socialControls.map((control) =>
              control.href ? (
                <a
                  key={control.id}
                  className="about-circle"
                  href={control.href}
                  aria-label={control.label}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={control.icon.src} alt="" width={26} height={26} />
                </a>
              ) : (
                <span
                  key={control.id}
                  className="about-circle"
                  aria-hidden="true"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={control.icon.src} alt="" width={26} height={26} />
                </span>
              ),
            )}
          </div>
          <p className="about__bio">{aboutContent.biography}</p>
        </div>
        <div className="about__portrait">
          <Image
            src={aboutContent.portrait.src}
            alt={aboutContent.portrait.alt}
            fill
            sizes="(max-width: 899px) 320px, 532px"
            priority
          />
        </div>
      </div>

      <div className="about__rule" />

      <section className="about-section" aria-labelledby="about-education">
        <h2 className="about-section__title" id="about-education">
          Education
        </h2>
        <ol className="about-entries">
          {aboutContent.education.map((entry) => (
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
          Experience
        </h2>
        <RoleEntries entries={aboutContent.experience} />
      </section>

      <div className="about__rule" />

      <section className="about-section" aria-labelledby="about-extracurricular">
        <h2 className="about-section__title" id="about-extracurricular">
          Extracurricular Activities
        </h2>
        <RoleEntries entries={aboutContent.extracurricular} />
      </section>

      <div className="about__rule" />

      <section className="about-section" aria-labelledby="about-awards">
        <h2 className="about-section__title" id="about-awards">
          Awards
        </h2>
        <ol className="about-entries">
          {aboutContent.awards.map((entry) => (
            <li key={entry.index}>
              <div className="about-entry">
                <EntryIndex index={entry.index} date={entry.date} />
                <div>
                  <p className="about-entry__organization">{entry.title}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <div className="about__rule" />

      <section className="about-section" aria-labelledby="about-skills">
        <h2 className="about-section__title" id="about-skills">
          Personal Skills
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
