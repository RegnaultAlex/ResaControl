import { Link } from 'react-router-dom'
import resaControl from '@/assets/ResaControlText.svg'


const ErrorPage = () => {


  return (

    <>


      <div className='flex flex-col justify-center items-center h-screen'>

          <Link to={"/"} className='absolute top-6 left-6'>
              <img src={resaControl} width={"150px"}/>
          </Link>


          <h1 className='text-8xl'>404</h1>
          <h3 className='text-3xl'>Oops, This Page Not Found !</h3>
      </div>

    </>

  )
}

export default ErrorPage;
