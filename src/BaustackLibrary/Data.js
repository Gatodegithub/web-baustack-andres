import Library from "./Utils/models";

// Set Components
import ActionButtonSet from "./Sets/ActionButtonSet";
import BoxCallToActionSet from "./Sets/BoxCallToActionSet";
import BoxIconTopSet from "./Sets/BoxIconTopSet";
import BoxIconLeftSet from "./Sets/BoxIconLeftSet";
import SignButtonSet from "./Sets/SignButtonSet";
import MenuLinkSet from "./Sets/MenuLinkSet";
import PlanPriceSet from "./Sets/PlanPriceSet";
import FeaturesSet from "./Sets/FeaturesSet";
import BoxIconTopShadowSet from "./Sets/BoxIconTopShadowSet";
import InputTextSet from "./Sets/ContactSet/InputTextSet";
import InputTextAreaSet from "./Sets/ContactSet/InputTextAreaSet";

// groups
const Buttons = Library.addGroup('Buttons');
Buttons.add({...ActionButtonSet});

// NavBar
const NavBar = Library.addGroup('NavBar');
NavBar.add({...SignButtonSet});
NavBar.add({...MenuLinkSet});

// TextBox
const TextBox = Library.addGroup('TextBox');
TextBox.add({...BoxCallToActionSet});
TextBox.add({...BoxIconTopSet});
TextBox.add({...BoxIconLeftSet});
TextBox.add({...BoxIconTopShadowSet});

// Plan Prices
const PlanPrices = Library.addGroup('PlanPrices');
PlanPrices.add({...PlanPriceSet});
PlanPrices.add({...FeaturesSet});

// Contact form
const Contact = Library.addGroup('ContactForm');
Contact.add({...InputTextSet});
Contact.add({...InputTextAreaSet});

export default Library.data;