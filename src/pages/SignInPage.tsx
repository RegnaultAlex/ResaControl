import { useState } from 'react';
import { Button, Input, Field, FieldRequiredIndicator, InputGroup } from "@chakra-ui/react";
import { CiLock, CiMail } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import resaControl from '@/assets/ResaControlText.svg'
import { UserAuth } from '@/components/auth/AuthContext';


const SignInPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    const { SignIn } = UserAuth();

    const handleSignIn = async (e: React.FormEvent) => {

        e.preventDefault();

        try 
        {
            const result = await SignIn({ email, password });
            
            if (result!.success)
            {
                navigate("/dashboard");
            }
            else
            {
                setError("Les identifiants ne sont pas corrects !")
            }

        }
        catch(err)
        {
            setError("Erreur lors de l'inscription")
        }
        
        
    }



    return (

            <div className={"h-screen w-full flex justify-center items-center"}>

                <Link to={"/"} className='absolute top-6 left-6'>
                    <img src={resaControl} width={"150px"}/>
                </Link>

                <form onSubmit={handleSignIn} className={"flex flex-col px-6 sm:px-12 md:px-14 lg:px-20 py-14 rounded-md"}>

                    <h1 className={"text-4xl mb-10 self-center select-none"}>Connexion</h1>

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
                                width={"260px"}
                            />                    
                        </InputGroup>
                        <Field.ErrorText>ce champ est requis</Field.ErrorText>
                    </Field.Root>
                    


                    <Field.Root required className='mt-4'>
                        <Field.Label>
                            Mot de passe 
                            <FieldRequiredIndicator/>
                        </Field.Label>
                        <InputGroup startElement={<CiLock/>}>
                            <Input type="password"
                                id="password"
                                name="password"
                                placeholder="**********"
                                onChange={(e) => setPassword(e.target.value)}
                                paddingLeft={"1"}
                                variant={"subtle"}
                                width={"260px"}
                            />
                        </InputGroup>
                        <Link to={"/resetpassword"} className='text-sm underline text-teal-600'>Mot de passe oublié !</Link>
                        <Field.ErrorText>ce champ est requis</Field.ErrorText>
                    </Field.Root>


                    <Button type='submit' 
                            variant={'solid'} 
                            color={"white"} 
                            backgroundColor={"teal.600"} 
                            className='w-full py-6 mt-10'
                            disabled={email === "" || password === ""}
                            >
                        Se connecter
                    </Button>

                    {error && <span className={"text-red-500 mt-6"}>{error}</span>}

                </form>

            </div>

    )
}

export default SignInPage;