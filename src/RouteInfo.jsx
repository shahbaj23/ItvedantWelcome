export const commonLink = [
  {
    linkname: "Home",
    linkUrl: "/",
  },
  {
    linkname: "Contact",
    linkUrl: "/contact",
  },
  {
    linkname: "About",
    linkUrl: "/about",
  },
];

export const guestLink = [
  ...commonLink,
  { linkname: "login", linkUrl: "/login" },
  { linkname: "Register", linkUrl: "/register" },
];
export const loggedLink = [
  ...commonLink,
  {
    linkname: "Logout",
    linkUrl: "/logout",
  }
];

export const adminLink = [
  ...loggedLink,
  {
    linkname: "Add Product",
    linkUrl: "/addProduct",
  },
  {
    linkname: "Profile",
    linkUrl: "/profile",
  },
];
