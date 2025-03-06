
const token = localStorage.getItem("access Token")
// console.log("token in data file",token)

export const TooltipDatas = [
    { title: "My Account", href: token ? "/account" : "/signup" },
    { title: "Wishlist", href: "/signup" },
    { title: "Check Order/Initiate Return", href: "/returns" },
    { title: "Store Finder", href: "/storelocator" },
    { title: "Language", href: "/language" }
  ];