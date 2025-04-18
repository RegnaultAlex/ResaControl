import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import resaControl from '@/assets/ResaControlText.svg'
import { UserAuth } from '../auth/AuthContext'
import { getRestaurantsName } from '@/../supabase/queries'
import { FaHouse } from "react-icons/fa6";
import { IoRestaurantSharp } from "react-icons/io5";
import { IoIosStats } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { FaHistory } from "react-icons/fa";

const DashboardLayout = ({ children } : { children : React.ReactElement }) => {


    const [restaurant, setRestaurants] = useState<Array<any> | null>([]);
    const navigate = useNavigate();

    const { session, loading } = UserAuth();

    

    useEffect(() => {

        if (loading) return;
    
        if (!session) {
            navigate('/signin');
            return;
        }
    
        getRestaurantsName(session.user.id)
        .then(({ data, error }) => {
            if (error) 
            {
                console.error("An error occurred:", error);
            } 
            else
            {
                setRestaurants(data);
            }
        })
        .catch((err) =>
            console.error("An error occurred retrieving restaurants names: ", err)
        );

    }, [loading, session]);
    







    return (

        loading ?


        <div className='flex justify-center content-center h-screen overflow-hidden'>
            <h1>Loading ...</h1>
        </div>

        :

        <div className='block h-screen overflow-hidden'>

            {/* Navbar */}
            <nav className='flex justify-between items-center w-full border-b-1 border-[#e6e6e6] h-24'>
                <Link to={"/"} className='w-44 ml-6'>
                    <img src={resaControl}/>
                </Link>

                <div className='flex justify-between h-full'>
                    <ul className='my-auto font-sans'>

                        { restaurant!.length > 0 && <li>{restaurant![0].name}</li> }

                    </ul>
                </div>
            </nav>
        
            {/* SideBar */}
            <div id="sidebar" className='block border-r-1 border-[#e6e6e6] h-[calc(100vh-96px)] w-64 max-h-screen'>
                
                <ul className='flex flex-col h-full'>

                    <li>
                        <Link to={"/restaurants"}>
                            <FaHouse className='icon'/>Restaurants
                        </Link>    
                    </li>
                    <li>
                        <Link to={"/reservations"}>
                            <IoRestaurantSharp className='icon'/>Reservations
                        </Link>    
                    </li>
                    <li>
                        <Link to={"/reservations"}>
                            <FaHistory className='icon'/>Historique
                        </Link>    
                    </li>
                    <li>
                        <Link to={"/statistiques"}>
                            <IoIosStats className='icon'/>Statistiques
                        </Link>    
                    </li>
                    <li className='mt-auto'>
                        <Link to={"/parametres"}>
                            <IoIosSettings className='icon'/>Paramètres
                        </Link>    
                    </li>
                    


                </ul>


            </div>
        
            <div>
                {children}
            </div>
        
        </div>
  )
}

export default DashboardLayout
