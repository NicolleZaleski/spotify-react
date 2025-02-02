import React from "react";
import '../../vars.css';
import '../Playlist/Playlist.css';


import foto1 from '../images/playlist/1.jpeg';
import foto2 from '../images/playlist/2.jpeg';
import foto3 from '../images/playlist/3.jpeg';
import foto4 from '../images/playlist/4.jpeg';
import foto5 from '../images/playlist/5.jpeg';
import foto6 from '../images/playlist/6.jpeg';
import foto7 from '../images/playlist/7.jpeg';
import foto8 from '../images/playlist/8.jpeg';
import foto9 from '../images/playlist/9.jpeg';
import foto10 from '../images/playlist/10.jpeg';
import foto11 from '../images/playlist/11.jpeg';
import foto12 from '../images/playlist/12.jpeg';
import foto13 from '../images/playlist/13.jpeg';
import foto14 from '../images/playlist/14.jpeg';
import foto15 from '../images/playlist/15.jpeg';
import foto16 from '../images/playlist/16.jpeg';

const Playlist = () => {
    return(
        <div className="playlist-container">
                <div id="result-playlist">
                    <div className="playlist">
                        <span id="greeting">Boa tarde</span>
                        <span className="session">Navegar por todas as seções</span>
                    </div>

                    <div className="offers_scroll-container">
                        <div className="offer_list">
                            <section className="offer_list-item">
                                <div className="cards">
                                    <div className="cards card1">
                                        <img src={foto1} alt=""/>
                                        <span>Rock Classic</span>
                                    </div>
                                </div>

                                <div className="cards">
                                    <div className="cards card2">
                                        <img src={foto13} alt=""/>
                                        <span>Blues Classic</span>
                                    </div>
                                </div>

                                <div className="cards">
                                    <div className="cards card3">
                                        <img src={foto15} alt=""/>
                                        <span>Brazilian Rock</span>
                                    </div>
                                </div>

                                <div className="cards">
                                    <div className="cards card4">
                                        <img src={foto7} alt=""/>
                                        <span>Rockabilly</span>
                                    </div>
                                </div>

                                <div className="cards">
                                    <div className="cards card5">
                                        <img src={foto6} alt=""/>
                                        <span>The 60's Era</span>
                                    </div>
                                </div>

                                <div className="cards">
                                    <div className="cards card6">
                                        <img src={foto5} alt=""/>
                                        <span>70's ClassNameics</span>
                                    </div>
                                </div>

                                <div className="cards">
                                    <div className="cards card7">
                                        <img src={foto8} alt=""/>
                                        <span>The Best of 70's</span>
                                    </div>
                                </div>

                                <div className="cards">
                                    <div className="cards card8">
                                        <img src={foto12} alt=""/>
                                        <span>Glam Rock</span>
                                    </div>
                                </div>

                                <div className="cards">
                                    <div className="cards card9">
                                        <img src={foto4} alt=""/>
                                        <span>80's ClassNameics'</span>
                                    </div>
                                </div>

                                <div className="cards">
                                    <div className="cards card10">
                                        <img src={foto9} alt=""/>
                                        <span>80 HITS</span>
                                    </div>
                                </div>

                                <div className="cards">
                                    <div className="cards card11">
                                        <img src={foto2} alt=""/>
                                        <span>90's Underground</span>
                                    </div>
                                </div>

                                <div className="cards">
                                    <div className="cards card12">
                                        <img src={foto10} alt=""/>
                                        <span>The Best of 90's</span>
                                    </div>
                                </div>

                                <div className="cards">
                                    <div className="cards card13">
                                        <img src={foto11} alt=""/>
                                        <span>Grunge</span>
                                    </div>
                                </div>

                                <div className="cards">
                                    <div className="cards card14">
                                        <img src={foto3} alt=""/>
                                        <span>Voice of the 00's</span>
                                    </div>
                                </div>

                                <div className="cards">
                                    <div className="cards card15">
                                        <img src={foto14} alt=""/>
                                        <span>Nu Metal</span>
                                    </div>
                                </div>

                                <div className="cards">
                                    <div className="cards card16">
                                        <img src={foto16} alt=""/>
                                        <span>MPB</span>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <div id="result-artist" className="hidden">
                    <div className="grid-container">
                        <div className="artist-card" id="">
                            <div className="card-img">
                                <img id="artist-img" className=" artist-img"/>
                                <div className="play">
                                    <span className="fa fa-solid fa-play"></span>
                                </div>
                            </div>
                            <div className="card-text">
                                <div title="Foo Fighters" className="vst"></div>
                                <span className="artist-name" id="artist-name"></span>
                                <span className="artist-categorie">Artista</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    );
};

export default Playlist