import {
  Storefront,
  Inventory2,
  ShoppingCartCheckout,
  Language,
  DesignServices,
  Dashboard,
  PhoneIphone,
  Campaign,
  Business,
  Groups,
  Apartment,
  Tab,
  ShoppingCart,
  ViewInAr,
  Code,
  FitScreen,
  Work,
  Handshake,
  EventAvailable,
  Hub,
  Cloud,
} from "@mui/icons-material";

const iconMap = {
  Storefront,
  Inventory2,
  ShoppingCartCheckout,
  Language,
  DesignServices,
  Dashboard,
  PhoneIphone,
  Campaign,
  Business,
  Groups,
  Apartment,
  Tab,
  ShoppingCart,
  ViewInAr,
  Code,
  Work,
  FitScreen,
  Handshake,
  EventAvailable,
  Hub,
  Cloud
};

export const getIcon = (iconName) => {
  return iconMap[iconName] || Language;
};