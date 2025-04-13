import { supabase } from "./supabase"


/////////////////////////////////////
// Related to restaurants queries //
///////////////////////////////////


export const getRestaurantsName = async (userid: string) => {
    
    const { data, error } = await supabase
                                    .from("restaurant")
                                    .select("restaurant_name")
                                    .eq("restaurant_owner", userid);
    
    return { data, error };
}

export const addRestaurants  = async (restaurant : { name: string,  places: number, owner: string }) => {

    const { error } = await supabase
                                .from("restaurant")
                                .insert([restaurant]);

    return { error };
}

export const editRestaurant = async () => {
    // TO DO
}

export const deleteRestaurant = async () => {
    // TO DO
}