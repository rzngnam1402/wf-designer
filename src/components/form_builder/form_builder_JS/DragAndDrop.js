// ---------------------------------------------------------------------------
// Functions used to handle event drag and drop
// HandleDragStart: handle event: Drag Start
// HandleDragOver: handle event: Drag Over
// HandleDragLeave: handle event: Drag Leave
// HandleDragEnd: handle event: Drag End
// HandleDrop: handle event: Drop
// ---------------------------------------------------------------------------

export const handleDragStart = (e) => {
  const dropZones = [...document.getElementsByClassName("dropZone")];
  dropZones.forEach((dropZone) => {
    dropZone.classList.add("dragStart");
  });
};

export const handleDragOver = (e) => {
  e.preventDefault();
  e.target.classList.remove("dragStart");
  e.target.classList.add("dragOver");
  return true;
};

export const handleDragLeave = (e) => {
  e.preventDefault();
  e.target.classList.remove("dragOver");
  e.target.classList.add("dragStart");
};

export const handleDragEnd = (e) => {
  e.preventDefault();
  const dropZones = [...document.getElementsByClassName("dropZone")];
  dropZones.forEach((dropZone) => {
    dropZone.classList.remove("dragOver");
    dropZone.classList.remove("dragStart");
  });
};

// export const handleDrop = (e) => {
//     e.preventDefault();
// const dropZone = document.getElementsByClassName('dropZone')[0]
// dropZone.classList.add('dragDrop');
// }
