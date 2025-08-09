import axios from "axios";

export const createEvent = async (eventData: any) => {
    const response:any = axios.post("/api/events/create-event", eventData);
    return response.data;
}