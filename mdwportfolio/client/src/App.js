import React from 'react';
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Home from './pages/Home/Home';
import Quotes from './pages/Projects/Quotes/Quotes';
//import MarkdownPreviewer from './pages/Projects/MarkdownPreviewer/MarkdownPreviewer';
import Drumpad from './pages/Projects/Drumpad/Drumpad';
import Calculator from './pages/Projects/Calculator/Calculator';
import Timer from './pages/Projects/Clock25_5/Clock25_5';
import BarGraph from './pages/Projects/BarGraph/BarGraph';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import './App.css';

export default function App() {
  return (
    <div id="App">
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/home" element={<Home />}>
          <Route path="/home/quotes" element={<Quotes />} />
          {/* <Route path="markdownpreviewer" element={<MarkdownPreviewer />} /> */}
          <Route path="/home/drumpad" element={<Drumpad />} />
          <Route path="/home/calculator" element={<Calculator />} />
          <Route path="/home/clock25+5" element={<Timer />} />
          <Route path="/home/bargraph" element={<BarGraph />} />
          <Route path="/home/about" element={<About />} />
          <Route path="/home/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}