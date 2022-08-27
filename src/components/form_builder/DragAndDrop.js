// ---------------------------------------------------------------------------
// Functions used to handle event drag and drop
// HandleDragStart: Xu ly khi event: Drag Start
// HandleDragOver: Xu ly khi event: Drag Over
// HandleDragLeave: Xu ly khi event: Drag Leave
// HandleDragEnd: Xu ly khi event: Drag End
// HandleDrop: Xu ly khi event: Drop
// ---------------------------------------------------------------------------



export const handleDragStart = (e) => {
    const dropZones = [...document.getElementsByClassName('dropZone')]
    dropZones.forEach((dropZone) => {
        dropZone.classList.add('dragStart');
    })
}

export const handleDragOver = (e) => {
    e.preventDefault();
    e.target.classList.remove('dragStart');
    e.target.classList.add('dragOver');
    return true;
}

export const handleDragLeave = (e) => {
    e.preventDefault();
    e.target.classList.remove('dragOver');
    e.target.classList.add('dragStart');
}

export const handleDragEnd = (e) => {
    e.preventDefault();
    const dropZones = [...document.getElementsByClassName('dropZone')]
    dropZones.forEach((dropZone) => {
        dropZone.classList.remove('dragOver');
        dropZone.classList.remove('dragStart');
    })
}

// export const handleDrop = (e) => {
//     e.preventDefault();
    // const dropZone = document.getElementsByClassName('dropZone')[0]
    // dropZone.classList.add('dragDrop');
// }