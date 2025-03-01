import { PiLockBold } from "react-icons/pi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { LuMessageSquareText } from "react-icons/lu";

const featuresDatas = [
  {
    id: 1,
    icon: <PiLockBold/>,
    title: "SECURE PAYMENTS",
    description: "SSL ENCRYPTION ON ALL TRANSACTIONS",
  },
  {
    id: 2,
    icon: <LiaShippingFastSolid/>,
    title: "FREE & FAST RETURNS",
    description: "FREE RETURN ON ALL QUALIFYING ORDERS",
  },
  {
    id: 3,
    icon: <LuMessageSquareText/>,
    title: "ACTIVE SUPPORT",
    description: "GET IN TOUCH IF YOU HAVE A PROBLEM",
  },
];

const paymentPartnersDatas = [
  {
    id: 1,
    name: "Visa",
    image: "https://cdn.visa.com/v2/assets/images/logos/visa/blue/logo.png",
  },
  {
    id: 2,
    name: "mastercard",
    image:
      "https://www.mastercard.com/content/dam/public/brandcenter/assets/images/logos/mclogo-for-footer.svg",
  },

  {
    id: 3,
    name: "upi",
    image: "https://www.npci.org.in/images/npci/upi/upi-logo.png",
  },
  {
    id: 4,
    name: "american Express",
    image: "https://www.svgrepo.com/show/361978/amex.svg",
  },
  {
    id: 5,
    name: "mastercard",
    image:
      "https://www.mastercard.com/content/dam/public/brandcenter/assets/images/logos/mclogo-for-footer.svg",
  },
  {
    id: 6,
    name: "upi",
    image: "https://www.npci.org.in/images/npci/upi/upi-logo.png",
  },
];

export { featuresDatas, paymentPartnersDatas };
