import axios from "axios";

export const createEvent = async (eventData: any) => {
    const response:any = axios.post("/api/events/create-event", eventData);
    return response.data;
}

export const getEvents = async () => {
    const response: any = await axios.get("/api/events/get-events")
    return response.data
}