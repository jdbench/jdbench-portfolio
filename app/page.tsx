import Dashboard from "../components/Dashboard";

export default function Page() {
  return (
    <>
      <div id="dashboard" className="main-home"><Dashboard /></div>
      <div id="skills"className="main-skills">Skills</div>
      <div id="projects"className="main-projects">Projects</div>
      <div id="about" className="main-about">About</div>
    </>
  );
}
