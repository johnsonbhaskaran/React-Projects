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
  if (action.type === "NEW_BOOKING") {
    return [...oldReservationList, action.payload];
  } else if (action.type === "CANCEL_BOOKING") {
    return oldReservationList.filter((record) => {
      return record.name !== action.payload.name;
    });
  }
  // if request doesn't match any of the above reducers then going to return oldReservationList
  return oldReservationList;
};

const cancellationHistory = (oldCancellationList = [], action) => {
  if (action.type === "CANCEL_BOOKING") {
    return [...oldCancellationList, action.payload];
  }
  // if request doesn't match any of the above reducers then going to return oldCancellationList
  return oldCancellationList;
};

const accounting = (totalMoney = 100, action) => {
  if (action.type === "NEW_BOOKING") {
    return totalMoney + action.payload.amount;
  } else if (action.type === "CANCEL_BOOKING") {
    return totalMoney - action.payload.refundAmount;
  }
  // if request doesn't match any of the above reducers then going to return totalMoney
  return totalMoney;
};

// Redux Store
console.log(Redux); // => methods: combineReducers(), createStore(), bindActionCreators(), applyMiddleware() etc..

const { createStore, combineReducers } = Redux;

const railwayCentralStore = combineReducers({
  accounting,
  reservationHistory,
  cancellationHistory,
});

const store = createStore(railwayCentralStore);

// const action = newBooking("Dipesh", 20);
// store.dispatch(action);

store.dispatch(newBooking("Sam", 40));
store.dispatch(newBooking("Tom", 40));
store.dispatch(newBooking("Mani", 10));

store.dispatch(cancelBooking("Mani", 5));

console.log(store.getState());
