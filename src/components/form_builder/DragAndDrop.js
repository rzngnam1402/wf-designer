
import ReactDOM from 'react-dom/client';




export const handleDragStart = (e, id, element) => {
    console.log('Drag start here 1');
}

export const handleDragOver = (e) => {
    // e.preventDefault();
    console.log('Drag over here');
    return true;
}

export const handleDragEnd = (e) => {
    console.log('Drag end here');
}

export const handleDrop = (e) => {
    console.log(`Drop here`);
}