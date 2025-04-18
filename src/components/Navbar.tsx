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

            <div className="flex w-full h-24 border-b-2">

                <div className="flex items-center w-3/4 md:w-1/2 h-full ">
                    <Link to="/" className='block ml-2'>
                        <img src={ResaControl} className='h-20 w-["100px"] my-2'/>
                    </Link>
                </div>

                <div className="flex w-1/4 md:w-1/2 h-full items-center justify-end">
                {
                    
                    width > 700 ?
                                    
                    <>
                        <Button colorPalette={"black"} color={"white"} asChild marginRight={"30px"}>
                            <Link to="/signup">Sign up</Link>
                        </Button>

                        <Button variant={"ghost"} asChild marginRight={"30px"} >
                            <Link to="/signin">Sign in</Link>
                        </Button>
                    </>

                    :

                        isOpen ?

                        <div>
                            
                        </div>
                        

                        :

                        <IoMdMenu onClick={(prev) => setOpen(!prev)} />
                
                    
                }
                </div>

            </div>
        
            
        
        </>
        
    )
}

