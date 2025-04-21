import './App.css'
import { NoteProviderWrapper } from './context/note.context'
import NotesPage from './components/NotesPage'

function App() {

  return (
    <NoteProviderWrapper>
      <NotesPage></NotesPage>
    </NoteProviderWrapper>
  )
}

export default App
