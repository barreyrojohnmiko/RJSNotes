interface AddNoteObject {
  titleText: string;
  contentText: string;
  timestamp: string;
  charactersCount: number;
  handleGoHome: () => void,
  handleSave: () => void,
  handleTitleTextChange: (event: any) => void,
  handleContentextChange: (event: any) => void,
}

export default AddNoteObject;
