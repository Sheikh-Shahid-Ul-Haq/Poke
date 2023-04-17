import styles from "@/styles/Detail.module.css";

const PokemonDetailCard = ({ values }) => {
  return (
    <div className={styles.detailCard}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={values.image} alt={values.name} />
      </div>
      <div className={styles.info}>
        <div>
          <h1> {values.name} </h1>
        </div>
        {values.types && (
          <div>
            <h3>Type</h3>
            {values.types.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "inline-flex",
                  padding: "5px 10px 5px 10px",
                  margin: "8px 8px 8px 0px",
                  borderRadius: 5,
                  //   color: "white",
                  minWidth: "70px",
                  justifyContent: "center",
                  marginRight: 9,
                  backgroundColor: "cadetblue",
                }}
              >
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}
        {values.resistant && (
          <div>
            <h3>Resistance</h3>

            {values.resistant.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "inline-flex",
                  padding: "5px 10px 5px 10px",
                  borderRadius: 5,
                  //   color: "white",
                  minWidth: "70px",
                  justifyContent: "center",
                  marginRight: 9,
                  marginBottom: 9,
                  backgroundColor: "cadetblue",
                }}
              >
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}
        {values.weaknesses && (
          <div>
            <h3>Weaknesses</h3>

            {values.weaknesses.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "inline-flex",
                  padding: "5px 10px 5px 10px",
                  borderRadius: 5,
                  //   color: "white",
                  minWidth: "70px",
                  justifyContent: "center",
                  marginRight: 9,
                  marginBottom: 9,
                  backgroundColor: "cadetblue",
                }}
              >
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}
        <div style={{ display: "flex", alignItems: "center" }}>
          <h3 style={{ paddingRight: 8 }}>Classification: </h3>
          {values.classification}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailCard;
