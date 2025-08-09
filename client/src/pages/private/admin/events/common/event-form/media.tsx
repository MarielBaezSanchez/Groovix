import { Button, Upload } from "antd";
import { Trash2 } from "lucide-react"; // <-- Agrega esta línea
import type { EventFormStepProps } from ".";

function Media({
  currentStep,
  setCurrentStep,
  selectedMediaFiles,
  setSelectedMediaFiles,
}: EventFormStepProps) {
  const onSelectedMediaRemove = (index: number) => {
    const existingSelectedMediaFiles = [...selectedMediaFiles];
    const newSelectedMediaFiles = existingSelectedMediaFiles.filter(
      (_, i) => i !== index
    );
    setSelectedMediaFiles(newSelectedMediaFiles);
  }
  return (
    <div>
      <Upload
        listType="picture-card"
        beforeUpload={(file) => {
          setSelectedMediaFiles((prev: any) => [...prev, file]);
          return false; // Previene la carga automática
        }}
        multiple
        showUploadList={false}
      >
        <span className="text-gray-500 text-xs">
          Click aqui para cargar imagen
        </span>
      </Upload>
      <div className="flex flex-wrap-5">
        {selectedMediaFiles.map((file: any, index: any) => (
          <div
            className="border p-3 border-solid border-gray-200 flex flex-col gap-5"
            key={file.name}
          >
            <img
              src={URL.createObjectURL(file)}
              alt="media"
              className="w-40 h-40"
            />
            <button
              type="button"
              className="flex justify-center items-center mx-auto text-red-500 hover:text-red-700"
              onClick={() => onSelectedMediaRemove(index)}
              title="Remover imagen"
            >
              <Trash2 size={30} />
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-between col-span-3" >
        <Button onClick={() => setCurrentStep(currentStep - 1)}> Regresar </Button>
        <Button type="primary" onClick={() => setCurrentStep(currentStep + 1)}>Siguiente </Button>        
      </div>
    </div>
  );
}

export default Media;
