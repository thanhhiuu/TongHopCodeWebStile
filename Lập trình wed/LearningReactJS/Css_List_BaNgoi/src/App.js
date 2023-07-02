
import './App.css';
import Example from './Components/Example';
import ListReact from './Components/List_React';
// import ToanBaNgoi from './Components/Toan_BaNgoi';

function App() {
  const User = [
    {
      name: "Thanh Trung",
      blog: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, nihil!",
      btn: "More"
    },
    {
      name: "Thanh Hieu",
      blog: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, nihil!",
      btn: "New"
    },
    {
      name: "Thanh Dat",
      blog: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, nihil!",
      btn: "Live More"
    }
  ]
  return (
  <>
   {/* <ToanBaNgoi/> */} 
   {User.map((user, key) => {
    //  return <ListReact name={user.name}  blog={user.blog} btn={user.btn}/>
   
   })}
      <Example/>
  </>
  );
}

export default App;
