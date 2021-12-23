import { useEffect, useState } from "react";

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

export const Portfolio = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("/images.json").then(response => {
      response.json().then(images => {
        setTimeout(() => {
          setIsLoading(false);
          shuffleArray(images.data);
          setImages(images.data);
        }, 1000);
      });
    });
  }, []);

  return (
    <>
      <h1>Портфолио</h1>
      {isLoading && (
        <div className="container" style={{ marginTop: "50px" }}>
          <div className="row justify-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">
                Загружаются изображения...
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="container">
        <div className="row justify-content-start">
          {images.map((image, index) => (
            <div className="col-4" key={index}>
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
                  onClick={() =>
                    window.open(`/image?img=${encodeURIComponent(image)}`)
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
