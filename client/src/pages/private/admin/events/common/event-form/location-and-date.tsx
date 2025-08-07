

import type { EventFormStepProps } from '.'
import { Button, Form, Input } from 'antd'

function LocationAndDate( {
  eventData,
  setEventData,
  setCurrentStep,
  currentStep,
} : EventFormStepProps) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
      <Form.Item
      label='Ubicacion'
      >
        <Input placeholder="Dirección del evento"
        value={eventData.location}
        onChange={(e) => setEventData({ ...eventData, location: e.target.value })}
        />
      </Form.Item>

      <Form.Item label='Codigo postal'>
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
          onChange={(e) => setEventData({ ...eventData, data: e.target.value })}
        />
        </Form.Item>

      <Form.Item label='Hora de inicio'>
        <Input
          placeholder='Selecciona la hora de inicio'
          value={eventData.startTime}
          type="time"
          onChange={(e) => setEventData({ ...eventData, startTime: e.target.value })}
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