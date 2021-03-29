import { useState, useEffect, useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'
import Divider from '../divider/Divider'
import ThemeColors from '../themes/ThemeColors'
import ListItem from './ListItem'

//props
// data
//searchable
// xsmal small medium large
// title
// ordered



const List = (props) => {
    const colors = ThemeColors[useContext(ThemeContext).theme]
    const [data, setData] = useState(props.data)
    const [loaded, setIsLoaded] = useState(false)
    const [searchable, setSearchable] = useState(props.searchable)
    const [inputValue, setInputValue] = useState('')
    const [margin, setMargin] = useState(20)

    useEffect(() => {
        if (props.size ===  'xs') {
            setMargin(8)
        }
        if (props.size ===  'small') {
            setMargin(13)
        }
        if (props.size ===  'md') {
            setMargin(20)
        }
        if (props.size ===  'lg') {
            setMargin(28)
        }
        setIsLoaded(true)
    }, [props.theme, inputValue])

    const search = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <div className="listContainer">
            <style jsx>{`
                .listContainer {
                    width: 100%;
                }
                .listHeader {
                    display: flex;
                    align-items: center;
                }
                h3 {
                    margin: 0px 16px 0px 0px;
                    color: ${colors
                        ? colors.contrast
                        : ThemeColors.light.contrast};
                }
                input {
                    height: 20px;
                }
                ol {
                    margin: 0;
                    padding: 0;
                    list-style-position: inside;
                }
                ul {
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                }

                .test {
                    width: 100%;
                    height: 1px;
                    background-color: red;
                    margin: ${margin} auto;
                }
            `}</style>
            {loaded ? (
                <>
                    <div className="listHeader">
                        {props.title ? <h3>{props.title}</h3> : null}
                        {searchable ? (
                            <input onChange={search} type="text"></input>
                        ) : null}
                    </div>
                    <Divider margin={margin}></Divider>
                    {props.ordered ? (
                        <ol>
                            {data
                                .filter((data) => data.includes(inputValue))
                                .map((filteredData, index) => (
                                    <List.Item 
                                        margin={margin}
                                        key={index}
                                    >
                                        {filteredData}
                                    </List.Item >
                                ))}
                        </ol>
                    ) : (
                        <ul>
                            {data
                                .filter((data) => data.includes(inputValue))
                                .map((filteredData, index) => (
                                    <List.Item 
                                        margin={margin}
                                        theme={props.theme}
                                        key={index}
                                    >
                                        {filteredData}
                                    </List.Item >
                                ))}
                        </ul>
                    )}
                </>
            ) : null}
        </div>
    )
}

List.Item = ListItem

export default List
