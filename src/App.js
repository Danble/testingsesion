import React from 'react';
import Footer from './components/footer'
import Ticket from './components/ticket'

function App() {
  return (
    <div className="App">
      <Ticket name="Super Bowl" />
      <Footer />
    </div>
  );
}

export default App;
