import React from "react";
import Project1 from "./Project1";
import Project2 from "./Project2";
import MainPage from "./MainPage";
import News from "./News";
import Gallery from "./Gallery";
import Contact from "./Contact";
import ContactForm from "./ContactForm";

function App() {
  return (
    <div>
      <MainPage />
      <Project1 />
      <Project2 />
      <News />
      <Gallery />
      <Contact />
      <ContactForm />
    </div>
  );
}

export default App;
