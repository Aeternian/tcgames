import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import ImageCarousel from '../components/ImageCarousel';
import GameGrid from '../components/GameGrid';
import Paginator from '../components/Paginator';
import { db } from '../firebase';
import { collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore';

export default function Home() {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 12;

  useEffect(() => {
    const fetchGames = async () => {
      const q = query(collection(db, 'juegos'), where('juego_estado', '==', 'alta'));
      const querySnapshot = await getDocs(q);
      const gamesList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setGames(gamesList);
      setFilteredGames(gamesList);
    };

    fetchGames();
  }, []);

  const lastFiveGames = [...games]
    .sort((a, b) => new Date(b.juego_fecin) - new Date(a.juego_fecin)) // Ordena por fecha descendente
    .slice(0, 5); // Toma los últimos 5 juegos

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = filteredGames.slice(indexOfFirstGame, indexOfLastGame);

  return (
    <div>
      <SearchBar setFilteredGames={setFilteredGames} games={games} />
      <ImageCarousel games={lastFiveGames} />
      <GameGrid games={currentGames} />
      <Paginator 
        totalGames={filteredGames.length} 
        gamesPerPage={gamesPerPage} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
      />
    </div>
  );
}
