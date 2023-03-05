import * as React from "react"
import { useParams } from "react-router";
import "./TestSectionStyle.css"

export default function TestSection(){
    
    
    const [testSectionTitle, setTestSectionTitle] = React.useState('');
    const [testSections, setTestSections] = React.useState([]);
    //const {idSection} = useParams()

    const[searchString, setSearchString] = React.useState('');
    const[searchSections, setSearchSections] = React.useState([]);

    const addClick = (e) => {
        //e.preventDefault()
        const testSection={testSectionTitle: testSectionTitle}
        console.log(testSectionTitle)
        fetch("http://localhost:8090/test-sections/add", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(testSection)
        }).then(()=>{
        console.log("Раздел добавлен")
      })
    }

    function ckic()
    {
        alert("dick")
    }

    const deleteClick = (id) => {
        //id.preventDefault()
        //const testSection = {idSection}
        fetch(`http://localhost:8090/test-sections/delete/${id}`, {
        method:"DELETE"
        }).then(() =>{
            console.log("раздел удалён")
        })
        let testSection = document.getElementById(id)
        testSection.parentNode.removeChild(testSection)  
    }
    
    React.useEffect(() => {
        fetch("http://localhost:8090/test-sections", {method:"GET"})
        .then(res=>res.json())
        .then((result)=> {
            setTestSections(result);
        }
        )
    }, [])


    return(
        <>
            <div className="test-section ">
                <h1>Добавить раздел</h1>
                <form>
                    <input type="text" name="testSectionTitle" placeholder="Введите назавание раздела" autoComplete="off"
                    value={testSectionTitle} onChange={(e) => setTestSectionTitle(e.target.value)}  />
                    <button type="submit" className="section-btn" onClick={addClick}>Добавить раздел</button>
                </form>
            </div>

            <div className="mt-5 test-section-container">
                <h1>Список разделов</h1>
                {testSections.map(section =>(
                    <div className="test-section" key={section.id} id={section.id}>
                    <p>{section.testSectionTitle}</p>
                    <p>{section.id}</p>
                    <nav className="navbar">
                        <a className="section-btn text-decoration-none"
                        href={`/test-sections/${section.id}`} > Перейти к разделу</a>
                        <a className="section-btn text-decoration-none">Редактировать</a>
                        <form>
                            <button type="button" className="section-btn text-decoration-none"
                             onClick={() => deleteClick(section.id)}>Удалить</button>
                        </form>
                    </nav>
                </div>
                )
                )}
                
            </div>
        </>

        
    )
}






