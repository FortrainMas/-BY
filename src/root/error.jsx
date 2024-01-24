import './error.scss'

import { Link, useRouteError } from "react-router-dom";


export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <h1>Упс!</h1>
      <p>Извините, что-то пошло не так</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">
        <h1>Вернуться в каталог</h1>
      </Link>
    </div>
  );
}