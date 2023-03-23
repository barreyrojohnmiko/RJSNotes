interface NoteEditorObject {
  titleText: string;
  contentText: string;
  timestamp: string;
  charactersCount: number;
  handleGoHome: () => void,
  handleSave: () => void,
  handleDelete?: () => void,
  handleTitleTextChange: (event: any) => void,
  handleContentextChange: (event: any) => void,
}

export default NoteEditorObject;
