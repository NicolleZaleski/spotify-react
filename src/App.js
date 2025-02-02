import './App.css';
import Header from './Componentes/hearder/header';
import Sidebar from './Componentes/Sidebar/Sidebar';
import Playlist from './Componentes/Playlist/Playlist'
import Footer from './Componentes/Footer/Footer';

function App() {
  return (
    <div>
      <Sidebar/>
      <main>
        <div class="main-container">
          <Header/>
          <Playlist/>
        </div>
      </main>
      <Footer/>
  
    </div>
    
  );
}

export default App;
