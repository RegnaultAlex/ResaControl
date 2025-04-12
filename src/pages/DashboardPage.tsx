import { UserAuth } from '@/compenents/AuthContext'
import React from 'react'
import SignInPage from './SignInPage';

const DashboardPage = () => {


    const { session } = UserAuth();


    

    return (

        session ?

        <>
        
            
        
        
        </>


        :


        <SignInPage/>

    )
}

export default DashboardPage
