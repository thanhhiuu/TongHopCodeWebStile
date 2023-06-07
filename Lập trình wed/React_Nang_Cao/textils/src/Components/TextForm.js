import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value) 
    }

    // Credits: A
    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }

    // Credits: Coding Wala
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const [text, setText] = useState(''); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button  className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>In Hoa</button>
            <button  className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>In thường</button>
            <button  className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Xóa</button>
            <button  className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Sao chép</button>
            <button  className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Xóa khoảng trắng</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Bản tóm tắt</h2>
            <p>{text.split(/\s+/).length - 1} khoảng trắng và {text.length} kí tự</p>
            <p>Mất {0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} phút để đọc </p>
            <h2>Bản xem trước</h2> 
            <p>{text.length>0?text:"Nhập vô đi ba ơi !"}</p>
        </div>
        </>
    )
}