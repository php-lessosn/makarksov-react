export const Image = () => {
  const image = decodeURIComponent(
    new URLSearchParams(window.location.search).get("img")
  );

  if (!image) {
    return null;
  }

  return (
    <>
      <h1>Портфолио</h1>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-4">
            <div
              className="card"
              style={{
                width: "18rem",
                height: "18rem",
                marginBottom: "10px"
              }}
            >
              <img
                alt={""}
                src={image}
                className="card-img-top"
                style={{
                  margin: "auto",
                  display: "block",
                  cursor: "pointer"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
