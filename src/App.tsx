import { useState } from 'react';
import { FileUpload } from './components/FileUpload';
import { JsonViewer } from './components/JsonViewer';

function App() {
  const [jsonData, setJsonData] = useState<any>(null);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Periphery JSON Visualizer</h1>
        <FileUpload onJsonUpload={setJsonData} />
        {jsonData && <JsonViewer data={jsonData} />}
      </div>
    </div>
  );
}

export default App;