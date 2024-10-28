import styled, {ThemeProvider}from "styled-components"
import {darkTheme} from "./utils/Themes"
import Navbar from './components/Navbar'
import {BrowserRouter} from 'react-router-dom'
import HeroSection from "./components/section/Hero"
import Skills from "./components/section/Skills"
import Experience from "./components/section/Experience"
import Education from "./components/section/Education"
import StarCanvas from "./components/canvas/Star"
import Project from "./components/section/Project"
import Contact from "./components/section/Contact"
import Footer from "./components/section/Footer"
const Body = styled.div`
  background-color: ${({theme})=> theme.bg};
  width: 100%;
  color: ${({theme})=> theme.text_primary};
  position: relative;
  overflow-x: hidden;
  height: 90vh;
`;
const Wrapper = styled.div`
   padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
  )
`;
function App() {

  return <ThemeProvider theme={darkTheme}>
    <BrowserRouter>
        <StarCanvas/>
      <Navbar/>
      <Body>
        <div>
          <HeroSection/>
          <Wrapper>
            <Skills/>
            <Experience/>
          </Wrapper>
          <Project/>
          <Wrapper>
            <Education/>
          </Wrapper>
          <Contact/>
          <Footer/>
        </div>
      </Body>
    </BrowserRouter>
  </ThemeProvider>
}

export default App
