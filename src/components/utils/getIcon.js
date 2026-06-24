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
  Apartment
};

export const getIcon = (iconName) => {
  return iconMap[iconName] || Language;
};