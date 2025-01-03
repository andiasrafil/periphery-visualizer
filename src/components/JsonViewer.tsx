import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import json from 'react-syntax-highlighter/dist/esm/languages/hljs/json';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { formatJson } from '../utils/formatters';
import { FilterControls } from './FilterControls';
import { extractUniqueValues, filterJsonData } from '../utils/jsonFilters';

SyntaxHighlighter.registerLanguage('json', json);

interface JsonViewerProps {
  data: any;
}

export function JsonViewer({ data }: JsonViewerProps) {
  const [selectedKind, setSelectedKind] = React.useState('');
  const [selectedHint, setSelectedHint] = React.useState('');

  const jsonArray = Array.isArray(data) ? data : [data];
  const kinds = extractUniqueValues(jsonArray, 'kind');
  const hints = extractUniqueValues(jsonArray, 'hints');
  
  const filteredData = filterJsonData(jsonArray, selectedKind, selectedHint);
  const formattedJson = formatJson(filteredData);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">JSON Preview</h2>
      
      <FilterControls
        kinds={kinds}
        hints={hints}
        selectedKind={selectedKind}
        selectedHint={selectedHint}
        onKindChange={setSelectedKind}
        onHintChange={setSelectedHint}
      />

      <div className="overflow-auto max-h-[600px]">
        <SyntaxHighlighter 
          language="json" 
          style={docco}
          customStyle={{
            backgroundColor: 'transparent',
            padding: '0',
          }}
        >
          {formattedJson}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}