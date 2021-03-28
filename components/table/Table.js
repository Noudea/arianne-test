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

                {/* <table>
  <caption>Récapitulatif des groupes punk les plus célébres du RU</caption>
  <thead>
    <tr>
      <th scope="col">Groupe</th>
      <th scope="col">Année de formation</th>
      <th scope="col">Nombre d'albums</th>
      <th scope="col">Morceau le plus célèbre</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Buzzcocks</th>
      <td>1976</td>
      <td>9</td>
      <td>Ever fallen in love (with someone you shouldn't've)</td>
    </tr>
    <tr>
      <th scope="row">The Clash</th>
      <td>1976</td>
      <td>6</td>
      <td>London Calling</td>
    </tr>

      ... quelques lignes supprimées pour condenser le texte

    <tr>
      <th scope="row">The Stranglers</th>
      <td>1974</td>
      <td>17</td>
      <td>No More Heroes</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="2">Total albums</th>
      <td colspan="2">77</td>
    </tr>
  </tfoot>
</table> */}
            </div>
        </>
    )
}

export default Table
