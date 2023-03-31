import * as React from "react"
import { Link } from "react-router-dom"
import "./HeaderStyle.css"

export const Header = () => {

    return (
        <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom site-head">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"></link>
            <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
                <span className="fs-4 btn-grey">IQ test</span>
            </a>

            <nav className="d-inline-flex mt-0 mt-md-0 ms-md-auto navbar">
                <form action="/search-result" className="col align-self-center input-wrapper">
                    <div className="input-group mb-0 input-wrapper">
                        <input id="searchString" type="text" name="searchString" placeholder="Введите название теста или раздела"
                         className="form-control input ai" />
                        <button type="button" className="search">Начать поиск</button>
                    </div>
                </form>
                <Link className="me-3 py-2 btn-grey text-decoration-none col align-self-center" to="/">Главная</Link>
                <Link className="me-3 py-2 btn-grey text-decoration-none col align-self-center" to="/test-sections">Тесты</Link>
                <Link className="me-3 py-2 btn-grey text-decoration-none col align-self-center" to="/about">О проекте</Link>
                <Link className="me-3 py-2 btn-grey text-decoration-none col align-self-center" to="/registration">Регистрация</Link>
            </nav>
        </div>
    )
}