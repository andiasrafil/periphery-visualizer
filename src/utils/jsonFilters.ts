export function extractUniqueValues(data: any[], key: string): string[] {
  const values = new Set<string>();
  
  data.forEach(item => {
    if (Array.isArray(item[key])) {
      item[key].forEach((value: string) => values.add(value));
    } else if (item[key]) {
      values.add(item[key]);
    }
  });

  return Array.from(values).sort();
}

export function filterJsonData(data: any[], kind: string, hint: string): any[] {
  if (!Array.isArray(data)) return [];
  
  return data.filter(item => {
    const kindMatch = !kind || item.kind === kind;
    const hintMatch = !hint || (
      Array.isArray(item.hints) && 
      item.hints.includes(hint)
    );
    return kindMatch && hintMatch;
  });
}