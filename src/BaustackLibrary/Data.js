import Library from "./Utils/models";

// Set Components
import ActionButtonSet from "./Sets/ActionButtonSet";
import BoxCallToActionSet from "./Sets/TextBoxSet/BoxCallToActionSet";
import BoxIconTopSet from "./Sets/TextBoxSet/BoxIconTopSet";
import BoxIconLeftSet from "./Sets/TextBoxSet/BoxIconLeftSet";
import SignButtonSet from "./Sets/NavBarSet/SignButtonSet";
import MenuLinkSet from "./Sets/NavBarSet/MenuLinkSet";
import PlanPriceSet from "./Sets/PlansPricesSet/PlanPriceSet";
import FeaturesSet from "./Sets/PlansPricesSet/FeaturesSet";
import BoxIconTopShadowSet from "./Sets/TextBoxSet/BoxIconTopShadowSet";
import InputTextSet from "./Sets/ContactSet/InputTextSet";
import InputTextAreaSet from "./Sets/ContactSet/InputTextAreaSet";
import ContactInformationSet from "./Sets/ContactSet/ContactInformationSet";
import SocialMediaSet from "./Sets/ContactSet/SocialMediaSet";
import BoxIconCheckSet from "./Sets/TextBoxSet/BoxIconCheckSet";
import PlanIconsSet from "./Sets/PlansPricesSet/PlanIconsSet";

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
TextBox.add({...BoxIconCheckSet});

// Plan Prices
const PlanPrices = Library.addGroup('PlanPrices');
PlanPrices.add({...PlanPriceSet});
PlanPrices.add({...FeaturesSet});
PlanPrices.add({...PlanIconsSet});

// Contact form
const Contact = Library.addGroup('ContactForm');
Contact.add({...InputTextSet});
Contact.add({...InputTextAreaSet});
Contact.add({...ContactInformationSet});
Contact.add({...SocialMediaSet});

export default Library.data;