import React, {useState, useEffect} from "react";
import '../hearder/header.css';
import '../../vars.css';
import '../Sidebar/Sidebar';



import smallRight from "../images/small-right.png";
import smallLeft from "../images/small-left.png";
import search from "../images/search.png";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [artists, setArtists] = useState([]);
  const [filteredArtists, setFilteredArtists] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api-artist/artists.json")
      .then((response) => response.json())
      .then((data) => {
        setArtists(data.artists);
        console.log("🎵 Dados da API:", data.artists); // ✅ Verificando se os dados foram carregados
      })
      .catch((error) => console.error("Erro ao carregar artistas:", error));
  }, []);

  useEffect(() => {
    const results = artists.filter((artist) =>
      artist.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredArtists(results);
    console.log("🎯 Artistas Filtrados:", results); // ✅ Verificando se o filtro está funcionando
  }, [searchInput, artists]);

  return (
    <nav className="header_navigation">
      <div className="navigation">
        <button className="arrow-left">
          <img src={smallLeft} alt="Seta Esquerda" />
        </button>
        <button className="arrow-right">
          <img src={smallRight} alt="Seta Direita" />
        </button>

        <div className="header_search">
          <img src={search} alt="" /> {/* Feche a tag corretamente */}
          <input
            id="search-input"
            type="text"
            placeholder="O que você quer ouvir?"
            maxLength="800"
            value={searchInput}  // Adicionado para atualizar o estado
            onChange={(e) => setSearchInput(e.target.value)} // Atualiza o estado ao digitar
          />
        </div>

        <div className="header_login">
          <button className="subscribe">Inscreva-se</button>
          <button className="login">Entrar</button>
        </div>
      </div>

      {searchInput && (
        <div className="search_results">
          {filteredArtists.length > 0 ? (
            filteredArtists.map((artist) => (
              <div key={artist.id} className="artist_item">
                <img src={artist.urlImg} alt={artist.name} className="artist_image" />
                <div className="artist_info">
                  <p className="artist_name">{artist.name}</p>
                  <p className="artist_genre">{artist.genre}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="no_results">Nenhum artista encontrado.</p>
          )}
        </div>
      )}
      
    </nav>
  );
};

export default Header;