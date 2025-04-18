import { useState } from 'react';
import { supabase } from "../../supabase/supabase.ts";
import { Button, Input, Field, FieldRequiredIndicator, InputGroup } from "@chakra-ui/react";
import { CiMail } from "react-icons/ci";
import { Link } from 'react-router-dom';
import resaControl from '@/assets/resaControl.svg'


const ForgotPasswordPage = () => {


    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const handlePwdReset = async () => {

        if (email === "" || !email.includes("@"))
        {
            setMessage("Veuillez entrer une adresse email valide !");
            return ;
        }

        const { error } = await supabase.auth.resetPasswordForEmail(email);

        if (!error) setMessage("Email envoyé");

    }
    



    return (

        <div className={"h-screen w-full flex justify-center items-center"}>


            
            <Link to={"/"} className='absolute top-6 left-6'>
                <img src={resaControl} width={"150px"}/>
            </Link>

            <form onSubmit={handlePwdReset} className={"flex flex-col px-6 sm:px-12 md:px-14 lg:px-20 py-14 bg-gray-200 rounded-md"}>

                <h1 className={"text-4xl mb-10 self-center select-none w-90"}>Mot de passe oublié</h1>

                <Field.Root required>
                    <Field.Label>
                        Email 
                        <FieldRequiredIndicator/>
                    </Field.Label>
                    <InputGroup startElement={<CiMail/>}>
                        <Input type='email'
                            name='email'
                            id='email'
                            placeholder="moi@exemple.com"
                            onChange={(e) => setEmail(e.target.value)}
                            paddingLeft={"1"}
                            variant={"subtle"}
                            width={"100%"}
                        />                    
                    </InputGroup>
                    <Field.ErrorText>ce champ est requis</Field.ErrorText>
                </Field.Root>
                
                <br/>

                <Button type='submit' 
                        variant={'solid'} 
                        color={"white"} 
                        backgroundColor={"teal.600"} 
                        className='w-full py-6'
                        disabled={email === ""}
                    >
                    Envoyer
                </Button>

                {message && <span className={message.includes("!") ? "text-red-500 mt-6" : "text-blue-600 mt-6"}>{message}</span>}

            </form>

        </div>

)
}

export default ForgotPasswordPage
