import React,{useState, useEffect,useRef} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value: '');


    const inputRef =useRef(null)

    useEffect(() =>{
        inputRef.current.focus()
    });

    const handleChange = n =>{
        setInput(n.target.value);
    };

    const handleSubmit = n =>{
        n.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random()*10000),
            text:input
        });
        
        setInput('');
        };


  return (
   <form className='todo-form' onSubmit={handleSubmit}>
    {props.edit ?(  
    <>
    <input
        type="text" 
        placeholder='update your item' 
        value={input}
        name='text'
        className='todo-input edit'
        onChange={handleChange}
        ref={inputRef}
        />
        <button className='todo-button'>Update</button>
        </>
        ):( 
            
            <>
            <input
            type="text" 
            placeholder='Add in a list' 
            value={input}
            name='text'
            className='todo-input'
            onChange={handleChange}
            ref={inputRef}
            />
            <button className='todo-button'>+</button>
            </>
            )}
       
   </form>
  )
}

export default TodoForm;
