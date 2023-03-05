import * as React from "react"
import { useParams } from "react-router";

export const SearchResult = () =>{

    const [testSections, setTestSections] = React.useState([])

    return (
        <div>
            <h1>Результаты поиска</h1>
            {testSections?.map(section =>(
                <div key={section.id}>
                    <p> {section.id} </p>
                </div>
            ))}
        </div>
    )

}