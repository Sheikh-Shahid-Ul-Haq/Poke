const EvolutionComponent = ({ values, setOpen }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button
        style={{
          alignSelf: "flex-end",
          fontSize: "50px",
          backgroundColor: "white",
          border: "none",
          color: "#A50021",
          padding: 5,
          cursor: "pointer",
        }}
        onClick={() => setOpen(false)}
      >
        &times;
      </button>

      <div style={{ display: "flex" }}>
        {values?values.map((item, index) => (
          <EvolutionItem values={item} />
        )):
        <div>No Evolution</div>
        }
      </div>
    </div>
  );
};

const EvolutionItem = ({ values }) => {
  return (
    <div
      style={{
        padding: 10,
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img
        src={values.image}
        alt={values.name}
        style={{
          aspectRatio: 1,
          objectFit: "contain",
          width: "100%",
        }}
      />
      <h4>{values.name}</h4>
    </div>
  );
};

export default EvolutionComponent;
