
import './ItemContent.css'
import ToolBarHeader from './ItemBoxStructure/toolBarHeader'
import DropZone from './dropZone'


function ItemContent(props) {
    // -----------------------------------------------
    // Return represent of dragged and dropped item 
    // -----------------------------------------------
    // const [checkHover, setCheckHover] = useState(false)

    return (
        // sau nay phai thay bang switch de tim nhung thanh phan voi id khac
        (props.id === '2') &&
        <>
            <div className='ItemContent_container'>
                <div className="ItemContent">
                    <DropZone />
                </div>
                <ToolBarHeader />
            </div>
            <div>
                <DropZone />
            </div>
        </>
    )
}

export default ItemContent