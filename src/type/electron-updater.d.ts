interface VersionInfo {
  update: boolean;
  version: string;
  newVersion?: string;
}

interface ErrorType {
  message: string;
  error: Error;
}

interface PanelContextType {
  filter: any[]; // You can replace 'any' with a more specific type if available
  setFilter: React.Dispatch<React.SetStateAction<any[]>>;
  sorter: any[]; // Replace 'any' with a more specific type if available
  setSorter: React.Dispatch<React.SetStateAction<any[]>>;
}
