
function Table(props){
//f
    return(
        // Some code will go in here
        <table>
            
            <thead>
                <tr>
                    <th>Name</th>
                    <th>URL</th>
                </tr>
            </thead>

            <tbody>
                
                {
        props.data.map((favLink,index)=>{
            return(<tr key={index}>
                <td>{favLink.name}</td>
                <td>{favLink.URL}</td>
            </tr>)
        })
         }   
            </tbody>

        </table>
    )

}

export default Table