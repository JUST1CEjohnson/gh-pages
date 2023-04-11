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
        <p>Continuous Cloud provides consulting services for small businesses, and offers a variety of services from building out core infrastructure to developing software and solutions
          for a company that wants to migrate to the cloud. What we offer here is technical expertise and years of enterprise knowledge. Services will vary per client but our focus is primarily on 
          kubernetes and containerization, although we are experiencedin traditional infrastructure as well. Please feel free to contact us with any questions you may have or for anything 
          you would like to know more about. Rates will vary per project and can be discussed via e-mail.
        </p>
      </header>
      <footer><p>Copyright Continuous Cloud LLC Jacksonville, FL</p></footer>
    </div>
  );
}

export default App;
