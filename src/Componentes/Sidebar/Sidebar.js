import React from "react";


import '../../vars.css';
import '../Sidebar/Sidebar.css';

import logoSpotify from "../images/logo-spotify.png"

const Sidebar = () => {
    return (
        <div class="sidebar">
            <nav class="sidebar__navigation">
                <div class="logo">
                    <img src={logoSpotify} alt="Logo do Spotify"/>
                </div>
                <ul>
                    <li><a href="#">
                        <span class="fa fa-home"></span>
                        <span>Início</span>
                    </a></li>
                    <li><a href="#">
                        <span class="fa fa-search"></span>
                        <span>Buscar</span>
                    </a></li>
                </ul>
            </nav>
            <div class="sidebar_library">
                <div class="conteudo">
                    <div class="cont"  href="#">
                        <span class="fa fa-compact-disc"></span>
                        <span class="bib">Sua Biblioteca</span>
                    </div>
                    <span  class="fa fa-plus"></span>
                </div>
                <div class="playlist">
                    <h2 class="titulo">Crie sua primeira playlist</h2>
                    <h2 class="frase">É fácil, vamos te ajudar.</h2>
                    <button class="button_playlist">Criar playlist</button>
                </div>
                <div class="cookies">
                    <span>Cookies</span>
                </div>
                <div class="languages">
                    <button class="languages_button">
                        <span class="fa fa-globe"></span>
                        <span>Português do Brasil</span>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Sidebar