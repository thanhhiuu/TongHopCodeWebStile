
import { useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [content, setContent] = useState('')
  const [list, setList] = useState<{id: string, content: string}[]>([])


  const handlAdd = () => {
    if( list.some(item => item.content === content)) {
      toast.error('Tên bị trùng vui lòng đổi !', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      return
    }
    toast.success("Thêm thành công")
    setContent("")
    setList(prev => [...prev, {id: content?.replace(/\s/g, ''), content: content}])
    
  }

  const HanlderDelete = (id:string) => {
  if(confirm("Bạn có muốn xóa không?") === false) {
    return;
  }
   setList(prev => prev.filter(item => item.id !== id));

   toast.error("Xóa thành công");
  }
  console.log(list)
  return (
    <>
    <div className='relative top-60 left-3 translate-x-4 outline-none'>
      <input type="text" className='py-2 w-[400px]' value={content} onChange={(e) => {setContent(e.target.value)} } />
      <button className='rounded-xl bg-blue-500 mx-2 w-[100px] h-[43px]' onClick={handlAdd}>Add</button>
    </div>
    
    <div className='mt-10 absolute top-80 left-2/4  -translate-x-8 '>
      <p className='font-bold uppercase'>Contents:</p> 
      {list.map(item => {
      if (typeof item === 'string') {
        return <p key={item}>
          <span>{item}</span>
        </p> 
      }
      return <p key={item.id} className='flex justify-between content-center'>
        <span className='text-xl mb-3'>{item.content}</span>
        <span onClick={() => HanlderDelete(item.id)} className='text-red-500  text-xl ms-8'>X</span>
        </p>
      })}
    </div>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
      {/* Same as */}
    <ToastContainer />
    </>
  )
}
export default App
