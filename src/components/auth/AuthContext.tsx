import { createContext, useState, useContext, useEffect } from 'react';
import { supabase } from '../../../supabase/supabase';
import { Session } from '@supabase/supabase-js';


const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({ children } : { children : React.ReactElement }) => {

    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);


    // Sign Up
    const SignUp = async ({ email, password } : { email : string, password : string }) => {


        try
        {
            const { data, error } = await supabase.auth.signUp({
                email: email.toLowerCase(),
                password: password
            });
    
            if (error)
            {
                console.error("Probleme lors d'inscription : ", error);
                return { success: false, error: error };
            }
    
            return { success: true, data: data };
        }
        catch (err)
        {
            console.error("Erreur SignUp : ", err);
        }

    }


    // Sign In
    const SignIn = async ({ email, password } : { email : string, password : string }) => {

        try 
        {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email.toLowerCase(),
                password: password
            });

            if (error)
            {
                console.error("Erreur lors de la connexion");
                return { success: false, error: error };
            }
            
            console.log("Connexion réussi !")
            return { success: true, data: data };
        }
        catch (err)
        {
            console.error("Erreur SignIn : ", err);
        }




    }


    useEffect(() => {

        supabase.auth.getSession().then(({data: {session}}) => {
            setSession(session);
            setLoading(false);
        })

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            setLoading(false);
        });

        return () => {
            subscription.unsubscribe();
        }

    }, [])



    // Sign Out
    const SignOut = async() => {

        const { error } = await supabase.auth.signOut();

        if (error)
        {
            console.error("There was an error : ", error);
        }

        setSession(null);
    }


    return (
        <AuthContext.Provider value={{ session, loading, SignIn, SignUp, SignOut }} >
            {children}
        </AuthContext.Provider>
    )

}

export const UserAuth = () => {
    const context = useContext(AuthContext);

    if (!context) 
    {
        throw new Error("Error");
    }

    return context;
}


type AuthContextType = {
    session: Session | null;
    loading: boolean;
    SignIn: ({ email, password }: { email: string; password: string }) => Promise<{ success: boolean; error: any } | { success: boolean; data: any } | undefined>;
    SignUp: ({ email, password }: { email: string; password: string }) => Promise<{ success: boolean; error: any } | { success: boolean; data: any } | undefined>;
    SignOut: () => Promise<void>;
};