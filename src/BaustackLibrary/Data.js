import Library from "./Utils/models";
// Set Components
import ActionButtonSet from "./Sets/ActionButtonSet";

// groups
const Buttons = Library.addGroup('Buttons');
Buttons.add({...ActionButtonSet});

export default Library.data;