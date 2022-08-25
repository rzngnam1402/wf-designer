
function ToolBoxItem({ listItem }) {
    console.log(listItem);
    return (
        <>
            {
                listItem.map((item) => {
                    return < li key={item.id} className="toolBox_item" > {item.content}</li>
                })

            }
        </>
    )
}

export default ToolBoxItem