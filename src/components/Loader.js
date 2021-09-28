import { PulseLoader } from "react-spinners"

function Loader({ loading }) {
    return (
        <div className='flex justify-center items-center' style={{ height: '100vh' }}>
            <PulseLoader color='#0075cc' loading={loading} speedMultiplier='0.9' />
        </div>
    )
}

export default Loader
