import {serverUrl} from "../shared/constants";

export type User = {
    username: string,
    imageUrl: string
}

export async function fetchUser (authToken:string): Promise<User|null> {
    try {
        const response = await fetch(`https://${serverUrl}/users`, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        });
        const userData = await response.json();
        return userData.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        return null
    }
};