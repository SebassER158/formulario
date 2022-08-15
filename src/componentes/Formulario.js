import React, { useState } from 'react';

export default function Formulario() {

    const [form, setForm] = useState("");
    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleChecked=(e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.checked
        })
    }

    const sendData= (e) =>{
        e.preventDefault();
        alert("Formulario enviado correctamente");
        console.log(form);
    }

  return (
    <div>
        <h1>Evaluacion React</h1>
        <form onSubmit={sendData}>
            <p>1.- Describe React features:</p>
            <label htmlFor="jsx">JSX:</label>
            <input type="text" id="jsx" name="jsx" defaultValue={form.jsx} onChange={handleChange} /><br />

            <label htmlFor="components">Components:</label>
            <input type="text" id="components" name="components" defaultValue={form.components} onChange={handleChange} /><br />

            <label htmlFor="vd">Virtual DOM:</label>
            <input type="text" id="vd" name="vd" defaultValue={form.vd} onChange={handleChange} /><br />

            <label htmlFor="owdb">One-way data-binding:</label>
            <input type="text" id="owdb" name="owdb" defaultValue={form.owdb} onChange={handleChange} /><br />

            <label htmlFor="performance">Performance:</label>
            <input type="text" id="performance" name="performance" defaultValue={form.performance} onChange={handleChange} /><br /><br />
            <hr />

            <p>2.- Modern Web browsers can read JSX directly</p>
            <label htmlFor='readjsxt'>true</label>
            <input type="checkbox" name="readjsxt"  id="readjsxt"  onChange={handleChecked} />
            <label htmlFor='readjsxf'>false</label>
            <input type="checkbox" name="readjsxf"  id="readjsxf"  onChange={handleChecked} />

            <p>3.- In a web browser a JSX file needs to be transformed into a regular JavaScript object</p>
            <label htmlFor='jsxfilet'>true</label>
            <input type="checkbox" name="jsxfilet"  id="jsxfilet" onChange={handleChecked} />
            <label htmlFor='jsxfilef'>false</label>
            <input type="checkbox" name="jsxfilef"  id="jsxfilef" onChange={handleChecked} />

            <p>4.- DOM stands for Document Only Module</p>
            <label htmlFor='domt'>true</label>
            <input type="checkbox" name="domt"  id="domt" onChange={handleChecked} />
            <label htmlFor='domf'>false</label>
            <input type="checkbox" name="domf"  id="domf" onChange={handleChecked} />
            <hr />

            <p>5.- The next component belongs to ES6 standards</p>
            <select name='component5' onChange={handleChange}>
                <option defaultValue="true">true</option>
                <option defaultValue="false">false</option>
            </select>

            <p>6.- The next component belongs to ES6 standards</p>
            <select name='component6' onChange={handleChange}>
                <option defaultValue="true">true</option>
                <option defaultValue="false">false</option>
            </select>
            <hr />
            <p>7.- The next Require declaration belongs to ES6 standards</p>
            <label htmlFor="es6t" >true</label>
            <input type="radio" id="es6t" name="es6" onChange={handleChecked} />
            <label htmlFor="es6f">false</label>
            <input type="radio" id="es6f" name="es6" onChange={handleChecked} />

            <p>8.- The next Require declaration belongs to ES6 standards</p>
            <label htmlFor="es6t8">true</label>
            <input type="radio" id="es6t8" name="es68" onChange={handleChecked} />
            <label htmlFor="es6t8">false</label>
            <input type="radio" id="es6f8" name="es68" onChange={handleChecked} />
            <hr />

            <p>9.- Describe steps to create a new React app</p>
            <textarea name="steps" id="steps" defaultValue={form.steps} onChange={handleChange} />

            <p>10.- Explain how lists work in React</p>
            <textarea name="listwork" id="listwork" defaultValue={form.listwork} onChange={handleChange} />

            <p>11.- Write an example of simple form in React:</p>
            <textarea name="simpleform" id="simpleform" defaultValue={form.simpleform} onChange={handleChange} />

            <p>12.- Write an arrow function example:</p>
            <textarea name="afunction" id="afunction" defaultValue={form.afunction} onChange={handleChange} />

            <p>13.- What is a state in React?</p>
            <textarea name="statereact" id="statereact" defaultValue={form.statereact} onChange={handleChange} />

            <p>14.- What is the use of render() in React?</p>
            <textarea name="userender" id="userender" defaultValue={form.userender} onChange={handleChange} />

            <p>15.- How do you update the state of a component?</p>
            <textarea name="upstate" id="upstate" defaultValue={form.upstate} onChange={handleChange} />

            <p>16.- What are props in React?</p>
            <textarea name="propsreact" id="propsreact" defaultValue={form.propsreact} onChange={handleChange} />

            <p>17.- How do you pass props between components? Write an example.</p>
            <textarea name="passprops" id="passprops" defaultValue={form.passprops} onChange={handleChange} />

            <p>18.- How can you embed two or more components into one? Write an example</p>
            <textarea name="embedtwo" id="embedtwo" defaultValue={form.embedtwo} onChange={handleChange} />

            <p>19.- Explain the lifecycle methods of components</p>
            <label htmlFor="gts" >getInitialState: </label>
            <input name="gts" id="gts" defaultValue={form.gts} onChange={handleChange} /><br /><br />
            <label htmlFor="cdm" >componentDidMount: </label>
            <input name="cdm" id="cdm" defaultValue={form.cdm} onChange={handleChange} /><br /><br />
            <label htmlFor="scu" >shouldComponentUpdate: </label>
            <input name="scu" id="scu" defaultValue={form.scu} onChange={handleChange} /><br /><br />
            <label htmlFor="cdu" >componentDidUpdate: </label>
            <input name="cdu" id="cdu" defaultValue={form.cdu} onChange={handleChange} /><br /><br />
            <label htmlFor="cwu" >componentWillUnmount: </label>
            <input name="cwu" id="cwu" defaultValue={form.cwu} onChange={handleChange} /><br /><br />

            <p>20.- What is Redux?</p>
            <textarea name="isredux" id="isredux" defaultValue={form.isredux} onChange={handleChange} /><br /><br />

            <button type="submit">Enviar</button>
            <br /><br /><br />
        </form>
    </div>
  )
}
