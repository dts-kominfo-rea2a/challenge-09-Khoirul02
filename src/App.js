import './App.css';

// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';
import Header from './components/Header'; 
import Contact from './components/Contact';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header/>
      <div className='main'>
        <div className='content'>
        <div className='container'>
        <Contact data={contacts[0]}/>
        <Contact data={contacts[1]}/>
        <Contact data={contacts[2]}/>
        <Contact data={contacts[3]}/>
        <Contact data={contacts[4]}/>
        <Contact data={contacts[5]}/>
        </div>
        </div>
      </div>
      <div className='footer'><p>Khoirul Huda &#169; 2022 - React Developer</p></div>
    </div>
  );
}

export default App;
