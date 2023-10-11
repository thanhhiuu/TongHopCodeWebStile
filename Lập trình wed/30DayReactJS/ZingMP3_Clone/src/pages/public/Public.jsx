
import { Outlet } from 'react-router-dom'
import { SliderBarLeft   } from '../../components/Index'
function Public() {
    return (
        <div className='flex '>
            <div className='w-[240px] h-[100vh] '>
                < SliderBarLeft />
            </div>
            <div className='flex-auto' >
                <Outlet />
            </div>
        </div>
    )
}

export default Public

