import { useState } from 'react';
import { Button, Input, Field, FieldRequiredIndicator, InputGroup } from "@chakra-ui/react";
import { CiLock, CiMail } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import resaControl from '@/assets/ResaControlText.svg'
import { PiWarningCircleLight } from "react-icons/pi";
import { UserAuth } from '@/components/auth/AuthContext';




const SignUpPage = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmedPassword, setConfirmedPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    const { SignUp } = UserAuth();


    const handleSignUp = async (e : React.FormEvent) => {

        e.preventDefault();

        try 
        {
            const result = await SignUp({ email, password });
            
            if (result!.success)
            {
                navigate("/");
            }
            else
            {
                setError("Cette adresse e-mail est déjà utilisée !")
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

                <form onSubmit={handleSignUp} className={"flex flex-col px-6 sm:px-12 md:px-14 lg:px-20 py-14  rounded-md"}>

                    <h1 className={"text-4xl mb-10 self-center select-none"}>Créez votre compte</h1>

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
                        <Field.ErrorText>Ce champ est requis</Field.ErrorText>
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
                                width={"100%"}
                            />
                        </InputGroup>
                        <span className={password.length >= 8 ? 'text-xs text-gray-700' : 'text-xs text-red-700'}>
                            <PiWarningCircleLight className='inline-block'/> 8 caractères minimum
                        </span>
                        <Field.ErrorText>Ce champ est requis</Field.ErrorText>
                    </Field.Root>


                    <Field.Root required className='mt-4'>
                        <Field.Label>
                            Confirmez votre mot de passe 
                            <FieldRequiredIndicator/>
                        </Field.Label>
                        <InputGroup startElement={<CiLock/>}>
                            <Input type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="**********"
                                onChange={(e) => setConfirmedPassword(e.target.value)}
                                paddingLeft={"1"}
                                variant={"subtle"}
                                width={"100%"}
                            />
                        </InputGroup>
                        <Field.ErrorText>Ce champ est requis</Field.ErrorText>
                    </Field.Root>


                    <Button type='submit'
                            variant={'solid'} 
                            color={"white"} 
                            backgroundColor={"teal.600"} 
                            className={'w-full py-6 disabled:cursor-not-allowed mt-10'} 
                            disabled={email === "" || password === "" || password !== confirmedPassword}>
                        S'enregistrer
                    </Button>

                    {error && <span className={"text-red-500 mt-6"}>{error}</span>}

                </form>

            </div>

    )
}

export default SignUpPage;