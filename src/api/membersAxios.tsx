import axios from "axios";

const membersAxios = axios.create({
    baseURL: 'https://api.shoot-manage.com', 
    headers: {
    "Content-Type": "application/json",   

  },
});

export const getMemberInfo = async (accessToken:string) => {
    try {
      const response = await membersAxios.get("/api/v1/members", {
        headers: {
            "Authorization": `Bearer ${accessToken}`,
        },
      });
  
      // API 응답 구조에 맞게 반환
      if (response.data.success) {
        return {
          username: response.data.data.username,
          profileImg: response.data.data.profileImg,
          userId: response.data.data.userId,
        };
      } else {
        throw new Error(`Failed to fetch user info: ${response.data.status}`);
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
      throw error;
    }
  };
  

// const instance = axios.create({


//     const { success, data } = response.data;

//     if (success) {
//       console.log("사용자 정보:", data);
//       return data;
//     } else {
//       console.error("요청 실패: ", response.data);
//       throw new Error("요청 실패");
//     }
//   } catch (error: any) {
//     console.error("API 호출 오류:", error.response || error.message);
//     throw error;
//   }
// };
