import { useEffect, useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Editor from './components/Editor'
import Split from 'react-split'
import { nanoid } from 'nanoid'
import { onSnapshot, addDoc, doc, deleteDoc, setDoc } from 'firebase/firestore'
import { notesCollection, db } from './firebase'

function App() {

  const [notes, setNotes] = useState([])

  const [currentNoteId, setCurrentNoteId] = useState('')

  const currentNote = notes.find(note => {
    return note.id === currentNoteId
  }) || notes[0]

  console.log(currentNoteId)


  useEffect(() => {
    const unsubscribe = onSnapshot(notesCollection, (snapshot) => {
      // Sync up our local notes array with the snapshot data
      const notesArray = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }))
      setNotes(notesArray)
    })

    return unsubscribe
    // localStorage.setItem('notes', JSON.stringify(notes))
  }, [])

  useEffect(() => {
    if (!currentNoteId){
       setCurrentNoteId(notes[0]?.id)
    }
  })

  async function createNewNote() {
    const newNote = {
      body: "# Type your markdown note's title here",
    }

    const newNoteRef = addDoc(notesCollection, newNote)
    setCurrentNoteId(newNoteRef.id)
  }

  async function updateNote(text) {
    const docRef = doc(db, 'notes', currentNoteId)
    await setDoc(docRef, {body:text}, {merge: true})
  }


  function deleteNote(noteId) {
    const docRef = doc(db, 'notes', noteId)
    deleteDoc(docRef)
  }

  return (
    <main>
      {
        notes.length > 0
          ?
          <Split
            sizes={[30, 70]}
            direction='horizontal'
            className='split'
          >
            <Sidebar
              notes={notes}
              currentNote={currentNote}
              setCurrentNoteId={setCurrentNoteId}
              newNote={createNewNote}
              deleteNote={deleteNote}
            />

            <Editor
              currentNote={currentNote}
              updateNote={updateNote}
            />
          </Split>
          :
          <div className="no-notes">
            <h1>You have no notes</h1>
            <button
              className='first-note'
              onClick={createNewNote}
            >
              Create one now
            </button>
          </div>
      }
    </main>
  )
}

export default App
