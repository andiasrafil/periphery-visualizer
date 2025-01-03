export function formatJson(data: any): string {
  try {
    return JSON.stringify(data, null, 2);
  } catch (error) {
    console.error('Error formatting JSON:', error);
    return 'Error formatting JSON';
  }
}