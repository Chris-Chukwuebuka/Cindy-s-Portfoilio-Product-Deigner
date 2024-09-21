import './App.css';
import AppHeader from './components/header';
import AppIntro from './components/intro';
import AppLogo from './components/logos';
import AppAbout from './components/about';
import AppServices from './components/experience';
import AppSkills from './components/skills';
import AppCall from './components/cta';
import AppProjects from './components/projects';
import AppFooter from './components/footer';
import AppFooterbar from './components/footbar';

function App() {
  return (
    <div className="App">
      <header class="main-header">
        <AppHeader />
      </header>
      <main>
        <AppIntro />
        <AppLogo />
        <AppAbout />
        <AppServices />
        <AppSkills />
        <AppCall />
        <AppProjects />
        <AppFooter />
        <AppFooterbar />
      </main>
    </div>
  );
}

export default App;
