import Layout from "./components/layout";
import "./App.css";
import Projects from "./components/projects";
import AboutMe from "./components/aboutMe";
import ContactInfo from "./components/contactInfo";
import MainBanner from "./components/mainBanner";

function App() {
  return (
    <div className="App">
      <Layout>
        <MainBanner />
        <Projects />
        <AboutMe />
        <ContactInfo />
      </Layout>
    </div>
  );
}

export default App;
