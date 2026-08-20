import { aboutCopy } from "@/data/site";

export function AboutSection() {
  return (
    <div className="about-page">
      <h1 className="page-title">About</h1>
      <p className="provisional-note">
        About is provisional. No approved Figma about frame has been supplied.
      </p>
      <p data-copy-status={aboutCopy.biography.status}>
        {aboutCopy.biography.text}
      </p>
      <h2>Education</h2>
      <p data-copy-status={aboutCopy.education.status}>
        {aboutCopy.education.text}
      </p>
      <h2>Experience</h2>
      <p data-copy-status={aboutCopy.experience.status}>
        {aboutCopy.experience.text}
      </p>
      <h2>Awards</h2>
      <p data-copy-status={aboutCopy.awards.status}>{aboutCopy.awards.text}</p>
    </div>
  );
}
