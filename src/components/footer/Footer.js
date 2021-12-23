import { Link } from "react-router-dom";

export const Footer = () => (
  <nav
    className="navbar navbar-expand-lg navbar-light bg-light"
    style={{ position: "fixed", bottom: "0", width: "100%" }}
  >
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        Рекламное агентство «Маркет»
      </Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              Главная
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link active"
              aria-current="page"
              to="/portfolio"
            >
              Портфолио
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link active"
              aria-current="page"
              to="/contacts"
            >
              Контакты
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/signup">
              Вход
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
