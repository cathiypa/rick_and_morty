import styles from "./Detail.module.css";

import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { setCharacter } from "./characterModule";

export default function Detail(props){ 

    const { detailId} = useParams();
    const {character, setCharacter} = useState({});

    function characterDetails(props){
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter(props.id);
      }, [props.id, setCharacter]);
    }

    return ( 
        <div> 
            <Link to="/home" > 
                <button>Go Back</button>
            </Link>
            <h1>Detail</h1>
            <h2>{character.name}</h2>
            <img src={character.img} alt={character.name} />
            <h2>{character.gender}</h2>
            <h2>{character.status}</h2>
            <h2>{character.specie}</h2>
            <h2>{character.origin.name}</h2>

        </div>
    )
}