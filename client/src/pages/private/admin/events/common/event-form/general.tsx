import { Button, Form, Input, Tag } from "antd";
import type { EventFormStepProps } from ".";
import { useState } from "react";

function General({
  currentStep,
  setCurrentStep,
  eventData,
  setEventData,
}: EventFormStepProps) {
  const [guestInputValue, setGuestInputValue] = useState("");

  const onGuestAdd = () => {
    const existingGuests = eventData.guests || [];
    const newGuests = guestInputValue.split(",");
    setEventData({
      ...eventData,
      guests: [...existingGuests, ...newGuests],
    }); setGuestInputValue("");
  };

  const onGuestRemove = (index: number) => {
    const existingGuests = eventData.guests || [];
    const newGuests = existingGuests.filter((guest: string, i: number) => i !== index);
    setEventData({
      ...eventData,
      guests: newGuests,
    });
  };

  return (
    <div className="flex flex-col gap-5">
      <Form.Item label="Nombre del evento" required>
        <Input
          placeholder="Nombre del evento"
          value={eventData.name}
          onChange={(e) => setEventData({ ...eventData, name: e.target.value })}
        />
      </Form.Item>

      <Form.Item label="Descripción" required>
        <Input.TextArea
          placeholder="Descripción del evento"
          value={eventData.description}
          onChange={(e) =>
            setEventData({ ...eventData, description: e.target.value })
          }
        />
      </Form.Item>

      <Form.Item label="Organizador" required>
        <Input.TextArea
          placeholder="Organizador del evento"
          value={eventData.organizer}
          onChange={(e) =>
            setEventData({ ...eventData, organizer: e.target.value })
          }
        />
      </Form.Item>

      <Form.Item label="Lista de invitados (separados por comas)" required>
        <div className="flex gap-5">
            <Input
          placeholder="Lista de invitados (separados por comas)"
          value={guestInputValue}
          onChange={(e) => setGuestInputValue(e.target.value)}
        />
        <Button onClick={onGuestAdd} disabled={!guestInputValue}>Agregar</Button>
        </div>
      </Form.Item>

      <div className="flex flex-wrap gap-5">
        {eventData.guests?.map((guest: string, index: number) => (
            <Tag closable onClose={() => onGuestRemove(index)}>
                {guest}
            </Tag>
        ))}
      </div>
    </div>
  );
}

export default General;
