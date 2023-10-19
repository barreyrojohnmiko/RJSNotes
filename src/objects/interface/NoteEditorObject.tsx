interface NoteEditorObject {
  titleText: string;
  contentText: string;
  timestamp: string;
  charactersCount: number;
  isPinned: boolean,
  handleGoHome: () => void,
  handleSave: (mode: string) => void,
  handleDelete?: () => void,
  handleTitleTextChange: (event: any) => void,
  handleContentextChange: (event: any) => void,
  handlePin?: () => void,
}

export default NoteEditorObject;
