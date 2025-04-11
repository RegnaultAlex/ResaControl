import { useState } from 'react';
import { supabase } from "../../lib/supabase.ts";
import { Button, Input, Field, FieldRequiredIndicator, InputGroup } from "@chakra-ui/react";
import { CiLock, CiMail } from "react-icons/ci";
import { Link, redirect } from 'react-router-dom';
import resaControl from '@/assets/resaControl.svg'
import { PiWarningCircleLight } from "react-icons/pi";



const SignUp = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmedPassword, setConfirmedPassword] = useState<string>("");
    const [message, setMessage] = useState<string | null>(null);

    const handleSignUp = async (e: React.FormEvent) => {

        e.preventDefault();


        if (password !== confirmedPassword) { setMessage("Les mots de passe ne correspondent pas !"); return;}

        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password
        });

        if (!error)
        {
            setMessage("Connexion réussie");
            console.log(data);
            setTimeout(() => {
                redirect("/");
            }, 3000);
        }
        else
        {
            setMessage("Cette adresse email est déjà utilisée !")
        }

    }


    return (

            <div className={"h-screen w-full flex justify-center items-center"}>

                <Link to={"/"} className='absolute top-6 left-6'>
                    <img src={resaControl} width={"150px"}/>
                </Link>

                <form onSubmit={handleSignUp} className={"flex flex-col px-6 sm:px-12 md:px-14 lg:px-20 py-14 bg-gray-200 rounded-md"}>

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
                    
                    <br/>

                    <Field.Root required>
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

                    <br/>

                    <Field.Root required>
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

                    <br/><br/>

                    <Button type='submit'
                            variant={'solid'} 
                            color={"white"} 
                            backgroundColor={"teal.600"} 
                            className={'w-full py-6 disabled:cursor-not-allowed'} 
                            disabled={email === "" || password === "" || password !== confirmedPassword}>
                        S'enregistrer
                    </Button>

                    {message && <span className={message.includes("!") ? "text-red-500 mt-6" : "text-blue-600 mt-6"}>{message}</span>}

                </form>

            </div>

    )
}

export default SignUp;