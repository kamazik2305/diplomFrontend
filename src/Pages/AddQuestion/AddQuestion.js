import * as React from "react"

export const AddQuestion = () => {

    const [questionTypes, setQuestionTypes] = React.useState([]);

    return(
        <div>
            <h1>Добавить вопрос</h1>
            <form>
                <input id="txt" type="text" name="questionText" placeholder="Введите текст вопроса" class="form-control" autocomplete="off"/>
                <select id="selectType" name="selectType" onchange="alertValue(value)">
                    <option value="0">Выберете тип вопроса</option>
                    <option>1 тип</option>
                    <option>2 тип</option>
                    <option>3 тип</option>
                </select>
            </form>
        </div>
    )
}