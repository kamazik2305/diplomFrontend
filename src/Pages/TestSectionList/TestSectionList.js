import * as React from "react"
import { TestSection } from "../../Components/TestSection/TestSection";


export default function TestSectionList(){
    
    
    const [testSectionTitle, setTestSectionTitle] = React.useState('');
    const [testSections, setTestSections] = React.useState([]);
    //const {idSection} = useParams()

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
                    <TestSection key={section.id} id={section.id} testSectionTitle = {section.testSectionTitle} />
                )
                )}
            </div>
        </>

        
    )
}






