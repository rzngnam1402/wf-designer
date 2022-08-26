
import './ItemContent.css'

function ItemContent(props) {
    // -----------------------------------------------
    // Return represent of dragged and dropped item 
    // -----------------------------------------------
    return (
        (props.id === '2') &&
        <div className="ItemContent">
            Day la Item in toolBox : Container
        </div>
    )
}

export default ItemContent