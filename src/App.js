import logo from './logo.svg';
import './App.css';
import Content from './component/Content';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App justify-center">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
