
import "bootstrap/dist/css/bootstrap.css"
import Listgroud from './components/Listgroud'

function App() {
  const user = [
    'Nguyen Thanh Hieu', 
    'Vu Quynh Nhu',
    'Huynh Van Truong'
];
const hanldSelectItem = (element: string) => {
  console.log(element)
}
  return (
    <>
      <Listgroud user={user} heading={"Xin chào"} onSelectItem={hanldSelectItem} />
    </>
  )
}

export default App
