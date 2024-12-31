import { createStore, action, computed } from "easy-peasy";

export default createStore({
  newTitle: "",
  setNewTitle: action((state, payload) => {
    state.newTitle = payload;
  }),
  notes: JSON.parse(localStorage.getItem("notes")) || [],
  setNotes: action((state, payload) => {
    state.notes = payload;
  }),
  newNote: "",
  setNewNote: action((state, payload) => {
    state.newNote = payload;
  }),
  editTitle: "",
  setEditTitle: action((state, payload) => {
    state.editTitle = payload;
  }),
  editNote: "",
  setEditNote: action((state, payload) => {
    state.editNote = payload;
  }),
  searchResult: [],
  setSearchResult: action((state, payload) => {
    state.searchResult = payload;
  }),
  newNote: "",
  setNewNote: action((state, payload) => {
    state.newNote = payload;
  }),
  noteCount: computed((state) => state.notes.length),
  getNoteId: computed((state) => {
    return (id) => state.notes.find((note) => note.id.toString() === id);
  }),
});
