export const Header = () => {
  const data = ["Home", "About", "Contact"];
  return (
    <div
      style={{
        padding: "10px 40px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <a href="/" style={{ display: "flex", alignItems: "center" }}>
        <img
          src="/favicon.ico"
          style={{ width: "40px", marginRight: 5 }}
          alt=""
        />
        <h4>Pokemon</h4>
      </a>
      <div style={{ display: "flex" }}>
        {data.map((item, index) => (
          <h4 style={{ marginLeft: 15 }}>{item}</h4>
        ))}{" "}
      </div>
    </div>
  );
};
