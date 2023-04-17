import styles from "@/styles/Home.module.css";
import { useLazyQuery } from "@apollo/client";
import { GET_QUERY_POKEMONS } from "@/queries/indexPage";
import { PokemonCard } from "../components/pokemonCard";
import client from "@/apollo-client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
export const Home = ({ data: staticData }) => {
  const router = useRouter();
  const [start, setStart] = useState(0);
  const pageSize = 20;
  const [currentView, setCurrentView] = useState(pageSize);
  const [currentData, setCurrentData] = useState([]);

  const [getData, { loading, error, data: clientData }] =
    useLazyQuery(GET_QUERY_POKEMONS);

  const clickNext = (page) => {
    setStart(start + pageSize);
    setCurrentView(currentView + pageSize);

    if (start + pageSize >= 60) {
      getData({ variables: { first: start + pageSize + 20 } });
    } else
      setCurrentData(
        staticData.slice(start + pageSize, currentView + pageSize)
      );
  };

  useEffect(() => {
    if (clientData?.pokemons)
      setCurrentData(clientData.pokemons.slice(start, currentView));
  }, [clientData, start, currentView]);

  const clickPrevious = (page) => {
    setStart(start - pageSize);
    setCurrentView(currentView - pageSize);
    setCurrentData(staticData.slice(start - pageSize, currentView - pageSize));
  };

  useEffect(() => {
    setCurrentData(staticData.slice(start, currentView));
  }, []);
  console.log("STARTR", start);
  return (
    <div>
      <div className={styles.container}>
        {currentData.map((item, index) => (
          <PokemonCard
            values={item}
            key={index}
            onClick={() =>
              router.push({
                pathname: `/${item.name}`,
              })
            }
          />
        ))}
      </div>
      <div
        style={{
          padding: 24,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            display: start == 0 ? "none" : "inline-flex",
            marginRight: 20,
            fontSize: "20px",
            backgroundColor: "#4CAF50",
            border: "none",
            color: "white",
            padding: "5px 5px",
            textAlign: "center",
            textDcoration: "none",
            margin: "4px 2px",
            cursor: "pointer",
            boxShadow:
              "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
          }}
          onClick={clickPrevious}
        >
          &larr;
        </button>
        <button
          onClick={clickNext}
          style={{
            fontSize: "20px",
            backgroundColor: "#4CAF50",
            border: "none",
            color: "white",
            padding: "5px 5px",
            textAlign: "center",
            textDcoration: "none",
            display: "inline-block",
            margin: "4px 2px",
            cursor: "pointer",
            boxShadow:
              "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
          }}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const variables = {
    first: 60,
  };
  const data = await client.query({
    query: GET_QUERY_POKEMONS,
    variables,
  });
  return {
    props: {
      data: data.data.pokemons,
      initialState: client.cache.extract(),
    },
  };
};

export default Home;
