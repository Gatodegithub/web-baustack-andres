import Library from "./Utils/models.js";

const DataLibrary = new Library()
const Buttons = DataLibrary.addGroup('Buttons');
Buttons.add({title: 'Title'})
console.log(Buttons)
console.log('Things')