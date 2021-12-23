import { useEffect, useState } from "react";

const validateEmail = email => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!validateEmail(email) && email) {
      setErrorMessage("Емейл неправильный");
    } else {
      setErrorMessage("");
    }
  }, [email]);

  return (
    <>
      <h1>Вход</h1>
      <div className={"container"}>
        <div className="row justify-content-start">
          <div className="col-4">
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className={`form-label`}
              >
                Email address
              </label>
              <input
                type="email"
                className={`form-control ${errorMessage && "is-invalid"}`}
                id="exampleFormControlInput1"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="name@example.com"
              />
              {errorMessage && (
                <div className="invalid-feedback">{errorMessage}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput2" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleFormControlInput2"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Оставаться в системе
              </label>
            </div>
            <button type="button" className="btn btn-primary">
              Войти
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
