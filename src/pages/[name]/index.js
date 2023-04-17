import styles from "@/styles/Detail.module.css";
import { useQuery } from "@apollo/client";
import { GET_QUERY_POKEMON_DETAILS } from "@/queries/profile";
import PokemonDetailCard from "@/components/PokemonDetailCard";
import { useRouter } from "next/router";
import EvolutionComponent from "@/components/EvolutionComponent";
import { useState } from "react";
const Details = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { query } = router;
  const { name } = query;
  const { loading: detailLoading, data: pokemonData } = useQuery(
    GET_QUERY_POKEMON_DETAILS,
    {
      variables: {
        // id: id,
        name: name,
      },
    }
  );
  if (detailLoading) {
    return <div>loading</div>;
  }

  return (
    <div className={styles.container} style={{ position: "relative" }}>
      <PokemonDetailCard values={pokemonData.pokemon} />
      <button
        style={{
          backgroundColor: "#4CAF50",
          border: "none",
          color: "white",
          padding: "15px 32px",
          textAlign: "center",
          textDcoration: "none",
          display: "inline-block",
          margin: "4px 2px",
          cursor: "pointer",
          boxShadow:
            "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
        }}
        onClick={() => setOpen(true)}
      >
        Show evolution
      </button>
      <div
        id="evolutionModal"
        style={{
          position: "absolute",
          display: open ? "flex" : "none",
          left: " 50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          padding: 50,
          background: "white",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        }}
      >
        <EvolutionComponent
          setOpen={setOpen}
          values={pokemonData.pokemon.evolutions}
        />
      </div>
    </div>
  );
};

export default Details;
