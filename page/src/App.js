import logo from './logo.svg';
import './App.css';
import LoginForm from './LoginPages';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>LOGIN PAGE
          <LoginForm></LoginForm>
        </p>
        
       
      </header>
    </div>
  );
}

export default App;
