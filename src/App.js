import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Continuous Cloud Consulting
        </p>
        <p>Technical consulting company that specalizes in kubernetes and DevOps principles.</p>
        <p>Please contact continuouscloudconsulting@gmail.com for all inquiries.</p>
      </header>
      <footer><p>Copyright Continuous Cloud LLC Jacksonville, FL</p></footer>
    </div>
  );
}

export default App;
