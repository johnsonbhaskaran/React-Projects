// Action Creators
// The Person who is submitting the form

// Action creator [1] - newBooking()
const newBooking = (name, amount) => {
  return {
    // Actions - NEW_BOOKING
    type: "NEW_BOOKING",
    payload: {
      name,
      amount,
    },
  };
};

// Action creator [2] - cancelBooking()
const cancelBooking = (name, refundAmount) => {
  return {
    // Actions - CANCEL_BOOKING
    type: "CANCEL_BOOKING",
    payload: {
      name,
      refundAmount,
    },
  };
};

// Reducers
const reservationHistory = (oldReservationList = [], action) => {
  // Adding new booking to the oldReservationList
  if (action.type === "NEW_BOOKING") {
    return [...oldReservationList, action.payload];

    // Removing cancelled booking from the oldReservationList
  } else if (action.type === "CANCEL_BOOKING") {
    return oldReservationList.filter((record) => {
      return record.name !== action.payload.name;
    });
  }
  // if request doesn't match any of the above reducers then going to return oldReservationList
  return oldReservationList;
};

const cancellationHistory = (oldCancellationList = [], action) => {
  // Adding info of the cancelled booking in the oldCancellationList
  if (action.type === "CANCEL_BOOKING") {
    return [...oldCancellationList, action.payload];
  }
  // if request doesn't match any of the above reducers then going to return oldCancellationList
  return oldCancellationList;
};

const accounting = (totalMoney = 100, action) => {
  // Adding new booking amount to the total money
  if (action.type === "NEW_BOOKING") {
    return totalMoney + action.payload.amount;

    // Deducting the refund amount from the total money
  } else if (action.type === "CANCEL_BOOKING") {
    return totalMoney - action.payload.refundAmount;
  }
  // if request doesn't match any of the above reducers then going to return totalMoney
  return totalMoney;
};

// Redux Store
console.log(Redux); // => methods: combineReducers(), createStore(), bindActionCreators(), applyMiddleware() etc..

const { createStore, combineReducers } = Redux;

// Combining all Reducers using the Redux.combineReducers()
const railwayCentralStore = combineReducers({
  accounting,
  reservationHistory,
  cancellationHistory,
});

// Creating central Redux store using the Redux.createStore()
const store = createStore(railwayCentralStore);

// const action = newBooking("Dipesh", 20);
// store.dispatch(action);

store.dispatch(newBooking("Sam", 40));
store.dispatch(newBooking("Tom", 40));
store.dispatch(newBooking("Mani", 10));

store.dispatch(cancelBooking("Mani", 5));

// Displaying the current status of the updated store using the getState()
console.log(store.getState());
