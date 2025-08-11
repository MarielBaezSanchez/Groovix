

import type { EventFormStepProps } from '.'
import { Button, Form, Input } from 'antd'

function LocationAndDate({
  eventData,
  setEventData,
  setCurrentStep,
  currentStep,
}: EventFormStepProps) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
      <Form.Item
        label='Ubicación'
      >
        <Input placeholder="Dirección del evento"
          value={eventData.address}
          onChange={(e) => setEventData({ ...eventData, address: e.target.value })}
        />
      </Form.Item>

      <Form.Item label='Ciudad'>
        <Input
          placeholder='Ingresa la ciudad'
          value={eventData.city}
          onChange={(e) => setEventData({ ...eventData, city: e.target.value })}
        />
      </Form.Item>

      <Form.Item label='Código postal'>
        <Input
          placeholder='Ingresa el codigo postal'
          value={eventData.pincode}
          onChange={(e) => setEventData({ ...eventData, pincode: e.target.value })}
        />
      </Form.Item>

      <Form.Item label='Fecha y hora del evento'>
        <Input
          placeholder='Selecciona la fecha y hora'
          value={eventData.date}
          type="date"
          onChange={(e) => setEventData({ ...eventData, date: e.target.value })}
          min={new Date().toISOString().split('T')[0]} // Previene seleccionar fechas pasadas
        />
      </Form.Item>

      <Form.Item label='Hora de inicio'>
        <Input
          placeholder='Selecciona la hora de inicio'
          value={eventData.time}
          type="time"
          onChange={(e) => setEventData({ ...eventData, time: e.target.value })}
        />
      </Form.Item>
      <div className="flex justify-between col-span-3" >
        <Button
          onClick={() => setCurrentStep(currentStep - 1)}
          disabled={currentStep === 0}
        >
          Regresar
        </Button>
        <Button
          type="primary"
          onClick={() => setCurrentStep(currentStep + 1)}
          disabled={
            !eventData.address ||
            !eventData.city ||
            !eventData.pincode ||
            !eventData.date ||
            !eventData.time
          }
        >
          Siguiente
        </Button>

      </div>
    </div>
  )
}

export default LocationAndDate