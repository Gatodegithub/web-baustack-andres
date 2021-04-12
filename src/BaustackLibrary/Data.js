import Library from "./Utils/models";

// Set Components
import ActionButtonSet from "./Sets/ActionButtonSet";

// groups
const Buttons = Library.addGroup('Buttons');
Buttons.add({...ActionButtonSet});
Buttons.add({...ActionButtonSet});
Buttons.add({...ActionButtonSet});
Buttons.add({...ActionButtonSet});

const TextBox = Library.addGroup('TextBox');
TextBox.add({...ActionButtonSet});
TextBox.add({...ActionButtonSet});
TextBox.add({...ActionButtonSet});



export default Library.data;