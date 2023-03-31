import { Link } from "react-router-dom"
import "./TestStyle.css"

export const Test = ({ id, testName }) => {

    const deleteTestClick = (id) => {
        //id.preventDefault()
        //const testSection = {idSection}
        fetch(`http://localhost:8090/tests/delete/${id}`, {
            method: "DELETE"
        }).then(() => {
            console.log("Тест удалён")
        })
        var test = document.getElementById(id)
        test.parentNode.removeChild(test)
    }

    return (
        <div>
            <div className="mt-5 test-section-container" >
                <div className="test-section">
                    <p> {id} </p>
                    <p> {testName} </p>
                    <nav className="navbar">
                        <Link className="section-btn text-decoration-none">Перейти к тесту</Link>
                        <a className="section-btn text-decoration-none">Редактировать</a>
                        <form>
                            <button type="button" className="section-btn text-decoration-none"
                                onClick={() => deleteTestClick(test.idTest)} >Удалить</button>
                        </form>
                    </nav>
                    <a className="section-btn text-decoration-none">Список вопросов</a>
                </div>
            </div>
        </div>
    )
}