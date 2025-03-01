import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload } from "lucide-react";
export const ProofUpload = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Handle file upload
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive
  } = useDropzone({
    onDrop
  });
  return <div className="border rounded-lg bg-white">
      <div className="p-4 border-b bg-gray-50">
        <h3 className="font-medium">Proof Upload</h3>
      </div>
      <div className="p-4">
        <div {...getRootProps()} className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50">
          <input {...getInputProps()} />
          <Upload className="w-6 h-6 mx-auto mb-2 text-gray-400" />
          {isDragActive ? <p className="text-sm text-gray-600">Drop the files here...</p> : <p className="text-sm text-gray-600">
              Drag & drop files here, or click to select files
            </p>}
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
            <span className="text-sm">receipt.pdf</span>
            <span className="text-xs text-gray-500">2.3 MB</span>
          </div>
        </div>
      </div>
    </div>;
};