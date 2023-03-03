import * as React from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

export const SearchForm = ({ searchString, setSearchString, setTestSections }) => {

    const navigate = useNavigate() 

    const inputHandler = (e) => {
        setSearchString(e.target.value)
    }

    const submitHandler = async (e) => {
        //e.preventDefault()
        console.log(searchString)
        await fetch(`http://localhost:8090/search-result?searchString=${searchString}`,
            {
                method: "POST",
            })
            .then(res => res.json())
            .then(result => {
                setTestSections(result);
            })
        }
        navigate("/search-result")
        
    

return (
    <>
        <h3> Поиск </h3>
        <form action="/search-result" className="col align-self-center input-wrapper">
            <div className="input-group mb-0 input-wrapper">
                <input id="searchString" type="text" name="searchString" placeholder="Введите название теста или раздела" className="form-control input ai"
                    value={searchString} onChange={inputHandler} />
                <button type="button" onClick={submitHandler} className="search">Начать поиск</button>
            </div>
        </form>
    </>
)
}