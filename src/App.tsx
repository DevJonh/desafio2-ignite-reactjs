import { useEffect, useState } from "react";

import { Button } from "./components/Button";
import { MovieCard } from "./components/MovieCard";

// import { SideBar } from './components/SideBar';
// import { Content } from './components/Content';

import { api } from "./services/api";

import "./styles/global.scss";

import { GenreResponseProps, SideBar } from "./components/SideBar";
import { Content } from "./components/Content";

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  );

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
        setSelectedGenre={setSelectedGenre}
        setSelectedGenreFather={setSelectedGenreId}
      />

      <div className="container">
        <header>
          <span className="category">
            Categoria:<span> {selectedGenre.title}</span>
          </span>
        </header>

        <Content selectedGenreId={selectedGenreId} />
      </div>
    </div>
  );
}
