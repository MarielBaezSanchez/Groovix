import { message } from "antd"
import { useEffect, useState } from "react";
import { getCurrentUser } from "../../../api-services/users-service";

function Homepage() {
  const [user, setUser] = useState<any>(null);

  const getData = async () => {
    try {
      const response = await getCurrentUser();
      setUser(response.data); // ERRRRRRRRORRRRRR
    } catch (error: any) {
      message.error(error.response.data.message || error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="p-6">
      <h1>HomePage</h1>
      <p>Welcome, {user?.name}!</p>
    </div>
  )
}

export default Homepage