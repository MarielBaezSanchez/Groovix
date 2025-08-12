import { useEffect, useState } from "react";
import usersGlobalStore, { type UsersStoreType } from "../../../store/users-store";
import { message } from "antd";
import { getEvents } from "../../../api-services/events-service";
import type { EventType } from "../../../interfaces";
import EventCard from "./common/event-card";
import Filters from "./common/filters";


function Homepage() {
  const [events, setEvents] = useState<EventType[]>([]);
  const [filters, setFilters] = useState({
    searchText:"",
    date: "",
  });
  const [loading, setLoading] = useState(false);
  const { currentUser } = usersGlobalStore() as UsersStoreType;


  const getData = async () => {
    try {
      setLoading(true);
      const response = await getEvents();
      setEvents(response.data);
    } catch (error) {
      message.error("Falla al obtener los eventos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  
  return (
    <div>
      <p>Welcome, {currentUser?.name}!</p>
      <Filters filters={filters} setFilters={setFilters} onFilter={getData}/>

      <div className="flex flex-col gap-7 mt-7">
        {events.map((event: any) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  )
}

export default Homepage