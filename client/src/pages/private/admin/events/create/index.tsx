import PageTitle from "../../../../../components/page-title"
import EventForm from "../common/event-form"

function CreateEventPage() {
  return (
    <div>
        <PageTitle title="Crear Evento" />

        <div className="mt-5"><EventForm /></div>
    </div>
  )
}

export default CreateEventPage