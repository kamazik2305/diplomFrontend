import { Link } from "react-router-dom"
import "./TestSectionStyle.css"

export const TestSection = ({ id, testSectionTitle }) => {


    const deleteClick = (idSection) => {
        //id.preventDefault()
        //const testSection = {idSection}
        fetch(`http://localhost:8090/test-sections/delete/${idSection}`, {
        method:"DELETE"
        }).then(() =>{
            console.log("раздел удалён")
        })
        let testSection = document.getElementById(idSection)
        testSection.parentNode.removeChild(testSection)  
    }

    return (
        <div id={id} className="test-section">
            <p> {id} </p>
            <p> {testSectionTitle} </p>
            <nav>
                <Link className="section-btn text-decoration-none"
                    to={`/test-sections/${id}`} > Перейти к разделу</Link>
                <a className="section-btn text-decoration-none">Редактировать</a>
                <form>
                    <button type="button" className="section-btn text-decoration-none"
                    onClick={() => deleteClick(id)}    >Удалить</button>
                </form>
            </nav>
        </div>
    )

}