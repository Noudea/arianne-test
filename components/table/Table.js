import ThemeContext from '../contexts/ThemeContext'
import ThemeColors from '../themes/ThemeColors'
import { useContext } from 'react'

const Table = (props) => {
    const colors = ThemeColors[useContext(ThemeContext).theme]

    return (
        <>
            <style jsx>{`
                table {
                    font-size: 14px;
                    line-height: 1.42857143;
                    box-sizing: border-box;
                    border-collapse: collapse;
                    border-spacing: 0;
                    width: 100%;
                }

                thead {
                    font-size: 14px;
                    line-height: 1.42857143;
                    -webkit-font-smoothing: antialiased;
                    border-collapse: collapse;
                    border-spacing: 0;
                    box-sizing: border-box;
                }

                tbody {
                    font-size: 14px;
                    line-height: 1.42857143;
                    -webkit-font-smoothing: antialiased;
                    border-collapse: collapse;
                    border-spacing: 0;
                    box-sizing: border-box;
                }

                th {
                    -webkit-tap-highlight-color: rgba(0,0,0,0);
                    font-size: 14px;
                    line-height: 1.42857143;
                    color: ${colors ? colors.contrast : ThemeColors.light.contrast};
                    border-collapse: collapse;
                    border-spacing: 0;
                    box-sizing: border-box;
                    background: none;
                    border-style: none;
                    border-bottom: 1px dashed ${colors ? colors.contrast : ThemeColors.light.contrast};
                    padding: 10px;
                    text-align: left;
                }

                td {
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                    font-size: 14px;
                    line-height: 1.42857143;
                    color: ${colors ? colors.contrast : ThemeColors.light.contrast};
                    border-collapse: collapse;
                    border-spacing: 0;
                    box-sizing: border-box;
                    background: none;
                    border-style: none;
                    border-bottom: 1px dashed ${colors ? colors.contrast : ThemeColors.light.contrast};
                    padding: 10px;
                }
            `}</style>
            <div>
                <table>
                    <thead>
                        <tr>
                            {Object.keys(props.data[0]).map(function (
                                key,
                                keyIndex
                            ) {
                                return <th key={keyIndex}>{key}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.map((data,index) => (
                            <tr key={index}>
                                {Object.keys(data).map(function (key, keyIndex) {
                                    return <td key={keyIndex}>{data[key]}</td>
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}



export default Table
