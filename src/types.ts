import { Session } from '@supabase/supabase-js';


export interface userConnection 
{ 
    email : string, 
    password : string 
}

export type AuthContextType = {
    session: Session | null;
    loading: boolean;
    SignIn: ({ email, password }: { email: string; password: string }) => Promise<{ success: boolean; error: any } | { success: boolean; data: any } | undefined>;
    SignUp: ({ email, password }: { email: string; password: string }) => Promise<{ success: boolean; error: any } | { success: boolean; data: any } | undefined>;
    SignOut: () => Promise<void>;
};