import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import resaControl from '@/assets/resaControl.svg'
import { UserAuth } from './AuthContext'
import { getRestaurantsName } from '../../supabase/queries'
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
            console.error("An error occurred retrieving restaurants names:", err)
        );

    }, [loading, session]);
    







    return (

        loading ?


        <div className='flex justify-center align-middle h-screen overflow-hidden'>
            <h1>Loading ...</h1>
        </div>


        :

        <div className='block h-screen overflow-hidden'>

            {/* Navbar */}
            <nav className='flex justify-between items-center w-full border-b-2 h-24'>
                <Link to={"/"}>
                    <img src={resaControl}/>
                </Link>

                <div className='flex justify-between h-full'>
                    <ul className='my-auto font-sans'>

                        { restaurant!.length > 0 && <li>{restaurant![0].name}</li> }

                    </ul>
                </div>
            </nav>
        
            {/* SideBar */}
            <div className='block border-r-2 border-gray h-[calc(100vh-96px)] w-80 max-h-screen'>
                
                <ul className='flex flex-col h-full'>

                    <li>
                        <Link to={"/restaurants"}>
                            <FaHouse className='inline-block mr-3 mt-[-8px] size-6'/>Restaurants
                        </Link>    
                    </li>
                    <li>
                        <Link to={"/reservations"}>
                            <IoRestaurantSharp className='inline-block mr-3 mt-[-8px] size-6'/>Reservations
                        </Link>    
                    </li>
                    <li>
                        <Link to={"/reservations"}>
                            <FaHistory className='inline-block mr-3 mt-[-8px] size-6'/>Historique
                        </Link>    
                    </li>
                    <li>
                        <Link to={"/statistiques"}>
                            <IoIosStats className='inline-block mr-3 mt-[-7px] size-6'/>Statistiques
                        </Link>    
                    </li>
                    <li>
                        <Link to={"/parametres"}>
                            <IoIosSettings className='inline-block mr-3 mt-[-5px] size-6'/>Paramètres
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
