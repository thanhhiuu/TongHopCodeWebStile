import { useState } from "react";

interface Props {
    user: string[],
    heading: string;
    onSelectItem: (element: string) => void
}

function Listgroud({user, heading, onSelectItem}: Props) { // props: Props

    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <>
            <ul className="list-group">
                {/* {user.length >= 0?"test kiến thức":"Độ dài = 0"} */}
               {/*  {user.length > 0&&"Bú liếm"} // user.length mà đúng thì xuất hiện "Bú liếm", ngược lại */}
               <h1>{heading}</h1>
                {user.map((element, index) => (
                    <li className={selectedIndex === index ?"list-group-item active":"list-group-item"} 
                    key={index}
                    onClick={() => { setSelectedIndex(index);
                                        onSelectItem(element);
                    }}>{element}</li>

                )) }
            
</ul>
        </>
    )
}

export default Listgroud
