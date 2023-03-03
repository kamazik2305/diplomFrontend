import * as React from "react"

export const Search =() => {

    const [searchString, setSearchString] = React.useState('');
    const [testSections, setTestSections] = React.useState([]);

    function click()
    {
        alert(searchString);
    }

    React.useEffect(() => {
        fetch("http://localhost:8090/search-result", {method:"POST"})
        .then(res=>res.json())
        .then((result)=> {
            setTestSections(result);
        }
        )
    }, [])

    return(
        <>
        <div className="test-section ">
                <h1>Поиск разделов</h1>
                <form action="/search">
                    <input type="text" name="searchString" placeholder="Введите назавание раздела" autoComplete="off"
                    value={searchString} onChange={(e) => setSearchString(e.target.value)}  />
                    <button type="submit" className="section-btn" onClick={click}>Поиск</button>
                </form>
        </div>

        




        </>
        
        
    )
}