import React, { lazy, Suspense, useState, useEffect, createContext } from 'react';
import styled, { createGlobalStyle, ThemeProvider, css } from 'styled-components/macro';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import Helmet, { HelmetProvider } from 'react-helmet-async';
import Header from '../components/Header';
import NavToggle from '../components/NavToggle';
import Theme from '../utils/Theme';
import GothamBook from '../fonts/gotham-book.woff2';
import GothamMedium from '../fonts/gotham-medium.woff2';

const Home = lazy(() => import('../screens/Home'));
const Contact = lazy(() => import('../screens/Contact'));
const BellsGC = lazy(() => import('../screens/BellsGC'));
const MystGang = lazy(() => import('../screens/MystGang'));
const ArMTG = lazy(() => import('../screens/ArMTG'));
const Robotics = lazy(() => import('../screens/Robotics'));
const BattleBots = lazy(() => import('../screens/BattleBots'));
const NotFound = lazy(() => import('../screens/NotFound'));
const Lab = lazy(() => import('../screens/Lab'));

const prerender = navigator.userAgent === 'ReactSnap';
export const AppContext = createContext();

const fontStyles = `
  @font-face {
    font-family: 'Gotham';
    font-weight: 400;
    src: url(${GothamBook}) format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'Gotham';
    font-weight: 500;
    src: url(${GothamMedium}) format('woff2');
    font-display: swap;
  }
`;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(Theme);

  useEffect(() => {
    if (!prerender) {

    var d = new Date();
	  console.info( "%c© Cody Bennett 2018-%d\n%cSay hello https://codyb.co/contact\n%chttps://github.com/CodyJasonBennett%c", "font-size:34px; font-weight:200; letter-spacing:0.02em; line-height:1.4em; font-family:helvetica,arial; color:rgba(0,0,0,0.9);", d.getFullYear(), "font-size:21px; font-weight:200; letter-spacing:0.2em; line-height:1.4em; font-family:helvetica,arial; color:rgba(0,0,25,0.5);", "font-size:21px; font-weight:200; letter-spacing:0.2em; line-height:1.4em; font-family:helvetica,arial;color:#0F669D;font-weight:bold;", "font-size:34px; line-height:1.4em;" );

	}
    window.history.scrollRestoration = 'manual';
  }, []);

  const setTheme = (overrides) => {
    setCurrentTheme({ ...Theme, ...overrides });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HelmetProvider>
      <ThemeProvider theme={currentTheme}>
        <BrowserRouter>
          <Route render={({ location }) => (
            <React.Fragment>
              <Helmet>
                <link rel="preload" href={`${GothamBook}`} as="font" crossorigin="crossorigin" />
                <link rel="preload" href={`${GothamMedium}`} as="font" crossorigin="crossorigin" />
                <style>{fontStyles}</style>
              </Helmet>
              <GlobalStyles />
              <SkipToMain href="#MainContent">Skip to main content</SkipToMain>
              <Header toggleMenu={toggleMenu} menuOpen={menuOpen} />
              <NavToggle onClick={toggleMenu} menuOpen={menuOpen} />
              <TransitionGroup component={React.Fragment} >
                <Transition key={location.pathname} timeout={300}>
                  {status => (
                    <AppContext.Provider value={{ status, setTheme }}>
                      <MainContent status={status} id="MainContent" role="main">
                        <Helmet>
                          <link rel="canonical" href={`https://codyb.co/${location.pathname}`} />
                        </Helmet>
                        <Suspense fallback={<React.Fragment />}>
                          <Switch location={location}>
                            <Route exact path="/" component={Home} />
                            <Route path="/contact" component={Contact} />
							              <Route path="/lab" component={Lab} />
                            <Route path="/projects/bellsgc" component={BellsGC} />
                            <Route path="/projects/mystgang" component={MystGang} />
                            <Route path="/projects/armtg" component={ArMTG} />
                            <Route path="/projects/battlebots" component={BattleBots} />
                            <Route path="/projects/gcpsrobotics" component={Robotics} />
                            <Route component={NotFound} />
                          </Switch>
                        </Suspense>
                      </MainContent>
                    </AppContext.Provider>
                  )}
                </Transition>
              </TransitionGroup>
            </React.Fragment>
          )} />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
};

const GlobalStyles = createGlobalStyle`
  html,
  body {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
    font-family: ${props => props.theme.fontStack};
    background: ${props => props.theme.colorBackground(1)};
    color: ${props => props.theme.colorText(1)};
    border: 0;
    margin: 0;
    width: 100vw;
    overflow-x: hidden;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  ::selection {
    background: ${props => props.theme.colorPrimary(1)};
  }
`;

const MainContent = styled.main`
  width: 100%;
  overflow-x: hidden;
  position: relative;
  transition: opacity 0.3s ease;
  opacity: 0;

  ${props => props.status === 'exiting' && css`
    position: absolute;
    opacity: 0;
  `}

  ${props => props.status === 'entering' && css`
    position: absolute;
    opacity: 0;
  `}

  ${props => props.status === 'entered' && css`
    transition-duration: 0.5s;
    opacity: 1;
  `}
`;

const SkipToMain = styled.a`
  position: fixed;
  clip: rect(1px,1px,1px,1px);
  top: 16px;
  left: 50%;
  width: 1px;
  height: 1px;
  overflow: hidden;
  color: ${props => props.theme.colorBackground(1)};
  z-index: 99;
  transform: translate3d(-50%, -40px, 0);
  transition: transform 0.4s ${props => props.theme.curveFastoutSlowin};
  background: ${props => props.theme.colorPrimary(1)};
  padding: 8px 16px;
  text-decoration: none;
  font-weight: 500;
  line-height: 1;
  clip-path: ${props => props.theme.clipPath(8)};

  &:focus {
    clip: auto;
    width: auto;
    height: auto;
    outline: none;
    transform: translate3d(-50%, 0, 0);
  }
`;

export default App;