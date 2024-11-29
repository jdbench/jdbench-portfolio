import Dashboard from "../components/Dashboard";
import About from "../components/About";

export default function Page() {
    return (
        <>
            <div id="dashboard" className="main-home">
                <Dashboard />
            </div>
            <div id="skills" className="main-skills">
                Skills
            </div>
            <div id="projects" className="main-projects">
                Projects
            </div>
            <div id="about" className="main-about">
                <About />
            </div>
        </>
    );
}
