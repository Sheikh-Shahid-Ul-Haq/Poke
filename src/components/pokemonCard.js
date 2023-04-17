import styles from "@/styles/Home.module.css";

export const PokemonCard = ({ values, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={values.image} alt={values.image} />
      </div>

      <p>
        <span>{values.number}</span>
      </p>
      <h5>{values.name}</h5>
      {values.types &&
        values.types.map((item, index) => (
          <div
            key={index}
            className={
              item == "Fire"
                ? styles.fire
                : item == "Water"
                ? styles.water
                : item == "Poison"
                ? styles.poison
                : styles.grass
            }
            style={{
              display: "inline-flex",
              padding: "5px 10px 5px 10px",
              borderRadius: 5,
              // color: "white",
              minWidth: "70px",
              justifyContent: "center",
              marginRight: 9,
            }}
          >
            <span>{item}</span>
          </div>
        ))}
    </div>
  );
};
