import { Button, message, Table } from "antd";
import PageTitle from "../../../../components/page-title";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  deleteEvent,
  getEvents,
} from "../../../../api-services/events-service";
import { getDateTimeFormat } from "../../../../helpers/data-time-formats";
import { Pen, Trash2 } from "lucide-react";

function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      setLoading(true);
      const response = await getEvents();
      console.log(response);
      setEvents(response.data);
    } catch (error) {
      message.error("no se pudieron obtener los eventos");
    } finally {
      setLoading(false);
    }
  };

  const deleteEventHandler = async (id: string) => {
    try {
      setLoading(true);
      await deleteEvent(id);
      getData();
      message.success("Evento eliminado correctamente");
    } catch (error) {
      message.error("Falla al eliminar el evento");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = [
    {
      title: "Nombre de evento",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Fecha y hora",
      dataIndex: "date",
      render: (date: any, row: any) => {
        return getDateTimeFormat(`${row.date} ${row.time}`); // ✅ usar date + time
      },
      key: "date",
    },

    {
      title: "Organizador",
      dataIndex: "organizer",
      key: "organizer",
    },
    {
      title: "Creado el",
      dataIndex: "createAt",
      render: (date: any) => getDateTimeFormat(date),
    },
    {
      title: "Acciones",
      dataIndex: "actions",
      render: (text: any, record: any) => (
        <div className="flex gap-5">
          <Trash2
            className="cursor-pointer text-red-700"
            size={16}
            onClick={() => deleteEventHandler(record._id)}
          />
          <Pen
            className="cursor-pointer text-yellow-600"
            size={16}
            onClick={() => navigate(`/admin/events/edit-event/${record._id}`)}
          />
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center ">
        <PageTitle title="Events" />
        <Button type="primary" onClick={() => navigate("/admin/events/create")}>
          Crear evento
        </Button>
      </div>

      <Table dataSource={events} columns={columns} loading={loading} />
    </div>
  );
}

export default EventsPage;
