import Navbar from '@/components/Navbar'

const ErrorPage = () => {


  return (

    <>
    
      <Navbar/>

      <div className='flex flex-col justify-center items-center h-screen'>
          <h1 className='text-8xl'>404</h1>
          <h3 className='text-3xl'>Oops, This Page Not Found !</h3>
      </div>

    </>

  )
}

export default ErrorPage;
