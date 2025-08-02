import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}

export default App;