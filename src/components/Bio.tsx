import "../styles/bio.css";
import headshot from "../assets/images/headshot.jpeg";

export default function Bio() {
  return (
    <div className="bio">
      <div className="bio-content">
        <div className="bio-text">
          <p>
            Nathan Rantala is a sound designer, audio engineer, and music
            producer with a degree in Music Production & Engineering and a minor
            in Audio Post Production from Berklee College of Music. He
            specializes in editing, designing, and mixing audio that enhances
            emotion and storytelling across visual media.
          </p>
          <p>
            Alongside his post-production work, he enjoys writing and producing
            original music under his artist project All I Do Is Daydream, which
            influences his creative sensibility. Outside of audio, Nathan is
            also a magician and runs his own YouTube channel A Million Card
            Tricks, where he shares magic performances and tutorials with over
            half a million subscribers. His goal is to collaborate closely with
            directors, editors, and artists to help bring their ideas to life.
          </p>
        </div>
        <div className="bio-photo">
          <img src={headshot} alt="Nathan Rantala" className="headshot" />
        </div>
      </div>
    </div>
  );
}
