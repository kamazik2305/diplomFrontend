import * as React from "react"
import { useParams } from "react-router";
import "./TestStyle.css"

export const TestList = () =>
{
    const [idSectionTest, setIdSectionTest] = React.useState('');
    const [testName, setTestName] = React.useState('');

    const [tests, SetTests] = React.useState([]);
    const [testSections, setTestSections] = React.useState([]);
    const {id} = useParams();

    const addTestClick = (e) =>{
        //e.preventDefault()
        //alert(idSectionTest)
        const test = {testName, idSectionTest}
        fetch(`http://localhost:8090/tests/add-test`, {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(test)
        }).then(()=>{
        console.log("Тест добавлен")
        })
    }

    const addTestToSectionClick = () =>{
        const test = {testName}
        fetch(`http://localhost:8090/test-sections/${id}/add`, {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(test)
        }).then(()=>{
        console.log("Тест удалён")
        })
    }

    const deleteTestClick = (id) => {
        //id.preventDefault()
        //const testSection = {idSection}
        fetch(`http://localhost:8090/tests/delete/${id}`, {
        method:"DELETE"
        }).then(() =>{
            console.log("Тест удалён")
        })
        var test = document.getElementById(id)
        test.parentNode.removeChild(test)  
    }

    React.useEffect(()=>{
        fetch(`http://localhost:8090/test-sections/${id}`, {method:"GET"})
        .then(res => res.json())
        .then((result) =>{
            SetTests(result)
        })
    }, [])

    React.useEffect(() => {
        fetch("http://localhost:8090/test-sections", {method:"GET"})
        .then(res=>res.json())
        .then((result)=> {
            setTestSections(result);
        }
        )
    }, [])

    return (
        <>
            <div className="test">
                <h1>Добавить тест</h1>
                <form >
                    <input type="text" name="testName" placeholder="Введите назавание теста" className="form-control" autoComplete="off"
                    value={testName} onChange={(e)=> {setTestName(e.target.value)}  } />
                    
                    <select id="selectSection" name="dick" onChange={ (e)=> {setIdSectionTest(e.target.value)} }>  
                        <option value="null" > Выберете раздел </option>
                        { testSections.map(section => (
                            <option  key={section.id} value={section.id}> {section.testSectionTitle} </option>
                        )) }
                    </select>
                    <button type="submit" onClick={addTestClick} className="section-btn">Добавить тест</button>
                </form>
            </div>

            <div className="test">
                <h1>Добавить тест в раздел</h1>
                <form >
                    <input type="text" name="testName" placeholder="Введите назавание теста" className="form-control" autoComplete="off"
                    value={testName} onChange={(e)=> {setTestName(e.target.value)}  } />
                    <button type="submit" onClick={addTestToSectionClick} className="section-btn">Добавить тест</button>
                </form>
            </div>


            {tests.map(test =>(
            <div className="mt-5 test-section-container" key={test.idTest} id={test.idTest} >
            <div className="test-section">
                <p>ID: {test.idTest}; ID раздела: {test.idSectionTest}; Имя: {test.testName}  </p>
                <nav className="navbar">
                    <a className="section-btn text-decoration-none">Перейти к тесту</a>
                    <a className="section-btn text-decoration-none">Редактировать</a>
                    <form>
                        <button type="button" className="section-btn text-decoration-none"
                        onClick={() => deleteTestClick(test.idTest)} >Удалить</button>
                    </form>
                </nav>
                <a className="section-btn text-decoration-none">Список вопросов</a>
            </div>
        </div>
            ))}

            
        </>
        
    )
}
