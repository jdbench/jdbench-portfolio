import Dashboard from "../components/Dashboard";
import About from "../components/About";
import Contact from "../components/Contact";
import Work from "../components/Work";

export default function Page() {
    return (
        <>
            <div id="dashboard" className="main-home">
                <Dashboard />
            </div>
            <div id="about" className="main-about">
                <About />
            </div>
            <div id="work" className="main-work">
                <Work />
            </div>
            <div id="contact" className="main-contact">
                <Contact />
            </div>
        </>
    );
}
