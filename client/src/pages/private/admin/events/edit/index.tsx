import { useEffect, useState } from "react"
import PageTitle from "../../../../../components/page-title"
import EventForm from "../common/event-form"
import { useParams } from "react-router-dom"
import { message } from "antd"
import { getEventById } from "../../../../../api-services/events-service"
import Spinner from "../../../../../components/spinner"

function EditEventPage() {
  const [eventData, setEventData] = useState({})
  const [loading, setLoading] = useState(false)
  const params: any = useParams()

  const getData = async () => {
    try {
      setLoading(true)
      const response: any = await getEventById(params.id)
      setEventData(response.data)
    } catch (error) {
      message.error("Error al obtener los datos del evento")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData();
  }, []);


  if (loading) {
    return <div className="flex justify-center items-center h-screen">
      <Spinner />
    </div>
  }
  return (
    <div>
        <PageTitle title="Editar Evento" />
        <div className="mt-5">
          <EventForm initialData={eventData} type="edit" />
        </div>
    </div>
  )
}

export default EditEventPage;