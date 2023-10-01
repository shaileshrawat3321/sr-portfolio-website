// dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// components and pages 
import Header from "./components/Header"
import Footer from "./components/Footer"
import ContactPage from "./pages/ContactPage"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ErrorPage from "./pages/ErrorPage"
import ProjectsPage from "./pages/ProjectsPage"
import SkillsPage from "./pages/SkillsPage"

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
