import { useState } from 'react'
import './form.css'

const ConditionForm = () => {
    const [inputFields, setInputFields] = useState([
        {
            parameters: '', operators: '', value: '',
        },
    ])

    const handleAdd = (index, event) => {
        event.preventDefault();
        const nextState = [...inputFields];
        setInputFields([...nextState, {
            parameters: '', operators: '', value: '',
        }])
    }

    const handleChangeInput = (index, event) => {
        const values = [...inputFields];
        values[index][event.target.id] = event.target.value;
        setInputFields(values)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputFields);
        inputFields.map(inputFields =>  { console.log(`${inputFields.parameters} ${inputFields.operators} ${inputFields.value}`) }
        )
    }

    return (
        <div >
            <form >
                <div className="wf__form">
                    <div className="wf__title">Set Condition</div>
                    {
                        inputFields.map((inputField, index) => (
                            <div key={index}>
                                <div className="wf__input-container ic1">
                                    <input
                                        type="text"
                                        id="parameters"
                                        className="input"
                                        placeholder="Parameters"
                                        value={inputField.parameters}
                                        onChange={event => handleChangeInput(index, event)}
                                        required
                                    />
                                </div>
                                <div className="wf__input-container ic2">
                                    <input
                                        type="text"
                                        id="operators"
                                        className="input"
                                        placeholder="Operators"
                                        value={inputField.operators}
                                        pattern="^(\+|-|\*|\/|=|>|<|>=|<=|&|\||%|!|\^|\(|\))$"
                                        onChange={event => handleChangeInput(index, event)}
                                        required
                                    />
                                </div>
                                <div className="wf__input-container ic2">
                                    <input
                                        type="text"
                                        id="value"
                                        className="input"
                                        placeholder="Value"
                                        value={inputField.value}
                                        onChange={event => handleChangeInput(index, event)}
                                        required
                                    />
                                </div>
                                <button
                                    className='wf__add'
                                    onClick={event => handleAdd(index, event)}
                                >
                                    +
                                </button>
                                {/* <button
                      className='remove'
                      onClick={() => handleRemove(index)}
                    >
                      -
                    </button> */}
                            </div>
                        ))
                    }
                    <button type="text" className="wf__submit" onClick={handleSubmit}>Submit</button>
                </div>
            </form>

        </div >
    );
}


export default ConditionForm