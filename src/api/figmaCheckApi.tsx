import axios from "axios";

const figmaCheckAxios = axios.create({
    baseURL: 'https://api.shoot-manage.com', 
    headers: {
        "Content-Type": "application/json",   
    },
});

export const figmaCheckApi = async (accessToken: string) => {
    try {
        const response = await figmaCheckAxios.get("/api/v1/auth/figma", {
            headers: {
                "Authorization": `Bearer ${accessToken}`,
            },
        });

        if (response.data.success) {
            return {
              figmaId: response.data.data.figmaId,
              email: response.data.data.email,
            };
          } else {
            throw new Error(`Failed to fetch user info: ${response.data.status}`);
          }
        } catch (error) {
        console.error("Error fetching Figma account info:", error);
        throw error; 
    }
};
