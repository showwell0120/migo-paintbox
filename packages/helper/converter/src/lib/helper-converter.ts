export function helperConverter(): string {
  return 'helper-converter';
}

const KB = 1024;
const MB = KB * 1024;
const GB = MB * 1024;

export const getDisplayedSize = (bytes: number, digits = 2) => {
  if (!bytes) {
    return '0 B';
  }
  if (bytes < KB) {
    return `${bytes} B`;
  } else if (bytes >= KB && bytes < MB) {
    return `${(bytes / KB).toFixed(digits)} KB`;
  } else if (bytes >= MB && bytes < GB) {
    return `${(bytes / MB).toFixed(digits)} MB`;
  } else {
    return `${(bytes / GB).toFixed(digits)} GB`;
  }
};
