import * as React from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

export const SearchForm = () => {

return (
    <>
        <h3> Поиск </h3>
        <form action="/search-result" className="col align-self-center input-wrapper">
            <div className="input-group mb-0 input-wrapper">
                <input id="searchString" type="text" name="searchString" placeholder="Введите название теста или раздела" className="form-control input ai"
                 />
                <button type="button" className="search">Начать поиск</button>
            </div>
        </form>
    </>
)
}