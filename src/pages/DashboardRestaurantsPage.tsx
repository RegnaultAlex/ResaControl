import { UserAuth } from '@/components/auth/AuthContext'

export const DashboardRestaurantsPage = () => {

    const { session, loading = true } = UserAuth()

    console.log(loading)



  return (

    
        loading ?


        <div className='flex justify-center content-center h-screen overflow-hidden'>
            <h1>Loading ...</h1>
        </div>

        :

        <div></div>


  )
}
