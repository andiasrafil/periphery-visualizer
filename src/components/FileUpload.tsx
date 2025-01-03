import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';

interface FileUploadProps {
  onJsonUpload: (data: any) => void;
}

export function FileUpload({ onJsonUpload }: FileUploadProps) {
  const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const json = JSON.parse(e.target?.result as string);
        onJsonUpload(json);
      } catch (error) {
        alert('Invalid JSON file');
      }
    };
    reader.readAsText(file);
  }, [onJsonUpload]);

  return (
    <div className="mb-8">
      <label 
        htmlFor="file-upload"
        className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-white hover:bg-gray-50"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <Upload className="w-8 h-8 mb-2 text-gray-500" />
          <p className="mb-2 text-sm text-gray-500">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-500">JSON files only</p>
        </div>
        <input
          id="file-upload"
          type="file"
          className="hidden"
          accept=".json"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
}