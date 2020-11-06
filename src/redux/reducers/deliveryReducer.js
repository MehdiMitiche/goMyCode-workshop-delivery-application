const initialState = {
  pickUp: {
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    phone: "",
    email: "",
    details: "",
    savedToAddressBook: true,
  },
  dropOff: [
    {
      firstName: "",
      lastName: "",
      company: "",
      address: "",
      phone: "",
      email: "",
      details: "",
      savedToAddressBook: false,
      orderId: "",
      orderInformation: "",
      imageDisplayed: false,
    },
  ],
  vehicule: 1,
  when: 1,
  date: null,
};

const deliveryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_STATE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default deliveryReducer;
