const ButtonGroup = ({ next, previous, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div
      className="carousel-button-group"
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        position: "absolute",
      }}
    >
      <button
        style={{
          border: "none",
          padding: "10px",
          height: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          color: "white",
          background: "#586472",
        }}
        className={currentSlide === 0 ? "disable" : ""}
        onClick={() => previous()}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button
        onClick={() => next()}
        style={{
          border: "none",
          padding: "10px",
          height: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          color: "white",
          background: "#586472",
        }}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default ButtonGroup;
