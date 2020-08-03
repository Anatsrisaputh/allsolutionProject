import AddItems from "../components/Page/AddItems";
import AddWarranty from "../components/Page/AddWarranty";
import Cart from "../components/Page/Cart";
import CheckWarranty from "../components/Page/CheckWarranty";
import ConfirmCart from "../components/Page/ConfirmCart"; 
import Home from "../components/Page/Home";
import Login from "../components/Page/Login";
import Payment from "../components/Page/Payment";
import Profile from "../components/Page/Profile";
import Register from "../components/Page/Register";
import Warranty from "../components/Page/Warranty";



const components = {
  addItem: {
    url: "/add-item",
    component: AddItems
  },
  addWarranty: {
    url: "add-warranty",
    component: AddWarranty
  },
  cart: {
    url: "/cart",
    component: Cart
  },
  checkWarranty: {
    url: "/checkwarranty",
    component: CheckWarranty
  },
  confirmCart: {
    url: "/confirm-cart",
    component: ConfirmCart
  },
  home: {
    url: "/",
    component: Home
  },
  login: {
    url: "/login",
    component: Login
  },
  payment: {
    url: "/payment",
    component: Payment
  },
  profile: {
    url: "/profile",
    component: Profile
  },
  register: {
    url: "/register",
    component: Register
  },
  warranty: {
    url: "/warranty",
    component: Warranty
  }
};


// Role ไหนเข้าหน้าไหนได้บ้าง
const configObject = {
  guest: {
    route: [
      ...Object.values(components)
    ]
  },
  user: {
    route: [
      components.home,
      components.login,
      components.register,
      components.warranty,
      components.cart,
      components.confirmCart,
      components.checkWarranty,
      components.profile,
    ]
  },
  superUser: {
    route: [...Object.values(components)]
  }
}

export default configObject;