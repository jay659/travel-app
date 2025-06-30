import { account,database ,appwriteConfig } from  "~/appwrite/client";
import { ID , OAuthProvider, Query } from 'appwrite';
export const loginWithGoogle = async() =>{
    console.log('cal')
    try{
        account.createOAuth2Session(
            OAuthProvider.Google, // provider
            `${window.location.origin}/`, 
            `${window.location.origin}/400`, 
            
        );
    }catch(e){
        console.error("Error during OAuth2 session creation:", e);
    }

}
export const logoutUser = async() =>{
     try {
        await account.deleteSession("current");
    } catch (e) {
        console.error("Error during logout:", e);
    }
    
}
export const getUSers = async(id:string) =>{
    try{
        const { documents, total } =await database.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.usersCollectionId,
            [
                Query.equal('accountId',id)
            ]
            
        )
        // total > 0
    }catch(e){
        console.log(e)
    }
}

export const getExistingUsers = async() =>{
    try{

    }catch(e){
        console.log(e)
    }
}
export const storeUserData = async() =>{
    try{
        const user = await account.get();
        if (!user) throw new Error("User not found");

        const { providerAccessToken } = (await account.getSession("current")) || {};
        const profilePicture = providerAccessToken ? await getGooglePicture(providerAccessToken) : null ;
        const createduser = await database.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.usersCollectionId,
            ID.unique(),
            {
                accountId: user.$id,
                email: user.email,
                name: user.name,
                imageUrl: profilePicture,
                joinedAt: new Date().toISOString(),
            }
        )
    }catch(e){
        console.log("error storing user data",e)
    }
}
const getGooglePicture = async (accessToken: string) => {
    try {
        const response = await fetch(
            "https://people.googleapis.com/v1/people/me?personFields=photos",
            { headers: { Authorization: `Bearer ${accessToken}` } }
        );
        if (!response.ok) throw new Error("Failed to fetch Google profile picture");

        const { photos } = await response.json();
        return photos?.[0]?.url || null;
    } catch (error) {
        console.error("Error fetching Google picture:", error);
        return null;
    }
};