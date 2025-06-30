import { Button } from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import { IoMdMenu } from "react-icons/io"
import { useState } from 'react'
import ResaControl from '@/assets/ResaControlText.svg'
import { useWindowSize } from 'react-use'




export default function Navbar()
{

    const [isOpen, setOpen] = useState<boolean>(false);
    const { width } = useWindowSize();


    return (
        <>

            <div className="flex justify-between w-full h-24 border-b-2">

                <div className="flex items-center md:w-1/2 h-full pl-14">
                    <Link to="/" className='block ml-2'>
                        <img src={ResaControl} className='h-20 w-["100px"] my-2'/>
                    </Link>
                </div>

                <div className="flex h-full items-center pr-16">
                {
                    
                    width > 525 ?
                                    
                    <>
                        <Button colorPalette={"black"} color={"white"} asChild marginRight={"30px"}>
                            <Link to="/inscription">S'inscrire</Link>
                        </Button>

                        <Button variant={"ghost"} asChild >
                            <Link to="/connexion">Se connecter</Link>
                        </Button>
                    </>

                    :

                        isOpen ?

                        <div>
                            // TO DO
                        </div>
                        

                        :

                        <IoMdMenu onClick={(prev) => setOpen(!prev)} />
                
                    
                }
                </div>

            </div>
        
            
        
        </>
        
    )
}

