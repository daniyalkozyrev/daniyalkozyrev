import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoBlock from './components/InfoBlock';
import Adaptation from './components/Adaptation';
import Subjects from './components/Subjects';
import Tasks from './components/Tasks';
import Alumni from './components/Alumni';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <InfoBlock />
        <Adaptation />
        <Subjects />
        <Tasks />
        <Alumni />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;