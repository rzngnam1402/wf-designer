import './flow.css'
import { useRef, useState } from 'react'

const Flow = () => {
    const [checked, setChecked] = useState([])

    const checkbox1Ref = useRef();
    const checkbox2Ref = useRef();
    const checkbox3Ref = useRef();
    const checkbox4Ref = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (checkbox1Ref.current.checked) {
            checked.push(checkbox1Ref.current.id);
        }
        if (checkbox2Ref.current.checked) {
            checked.push(checkbox2Ref.current.id);
        }
        if (checkbox3Ref.current.checked) {
            checked.push(checkbox3Ref.current.id);
        }
        if (checkbox4Ref.current.checked) {
            checked.push(checkbox4Ref.current.id);
        }
        setChecked(checked);
        console.log(checked);
    }

    return (
        <div className='flow__container'>
            <div className="flow__boxes">
                <div className='flow__box'>
                    <input type="checkbox" ref={checkbox1Ref} id="director" />
                    <label htmlFor="director" ><h1>DIRECTOR</h1></label>
                </div>
                <div className='flow__box'>
                    <input type="checkbox" ref={checkbox2Ref} id="coo" />
                    <label htmlFor="coo" ><h1>COO</h1></label>
                </div>
                <div className='flow__box'>
                    <input type="checkbox" ref={checkbox3Ref} id="cfo" />
                    <label htmlFor="cfo"><h1>CFO</h1></label>
                </div>
                <div className='flow__box'>
                    <input type="checkbox" ref={checkbox4Ref} id="bo" />
                    <label htmlFor="bo"><h1>BO</h1></label>
                </div>
            </div>
            <button type="text" className="flow__submit" onClick={(event) => handleSubmit(event)}>Submit</button>
        </div >
    )
}

export default Flow