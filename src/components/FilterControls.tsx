import { ChangeEvent } from 'react';

interface FilterControlsProps {
  kinds: string[];
  hints: string[];
  selectedKind: string;
  selectedHint: string;
  onKindChange: (kind: string) => void;
  onHintChange: (hint: string) => void;
}

export function FilterControls({
  kinds,
  hints,
  selectedKind,
  selectedHint,
  onKindChange,
  onHintChange,
}: FilterControlsProps) {
  return (
    <div className="flex gap-4 mb-4">
      <div className="flex-1">
        <label htmlFor="kind-filter" className="block text-sm font-medium text-gray-700 mb-1">
          Filter by Kind
        </label>
        <select
          id="kind-filter"
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={selectedKind}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => onKindChange(e.target.value)}
        >
          <option value="">All Kinds</option>
          {kinds.map((kind) => (
            <option key={kind} value={kind}>
              {kind}
            </option>
          ))}
        </select>
      </div>
      <div className="flex-1">
        <label htmlFor="hint-filter" className="block text-sm font-medium text-gray-700 mb-1">
          Filter by Hint
        </label>
        <select
          id="hint-filter"
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={selectedHint}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => onHintChange(e.target.value)}
        >
          <option value="">All Hints</option>
          {hints.map((hint) => (
            <option key={hint} value={hint}>
              {hint}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}