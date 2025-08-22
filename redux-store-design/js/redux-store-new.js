/* -----------------------------------------------------------------/
        ** Title: REDUX STORE NEW
        ** Date: August 2025, 22
        ** Day: Friday
        ** Description: Trying to remember what I have learned so far
                  with Redux JS library - Concept / Analogy / Application
/------------------------------------------------------------------*/

console.log("Hi from redux store new");

// ACTION CREATORS
const newBooking = (name, amount) => {
  return {
    // Action new booking - takes tow parameters as arguments (name & amount)
    type: "NEW_BOOKING",
    payload: {
      name,
      amount,
    },
  };
};

const cancelBooking = (name, refundAmount) => {
  return {
    // Action new booking - takes tow parameters as arguments (name & amount)
    type: "CANCEL_BOOKING",
    payload: {
      name,
      refundAmount,
    },
  };
};

// REDUCERS
const reservationHistory = (oldReservationList = [], action) => {
  if (action.type === "NEW_BOOKING") {
    return [...oldReservationList, action.payload];
  } else if (action.type === "CANCEL_BOOKING") {
    return oldReservationList.filter((record) => {
      return record.name !== action.payload.name;
    });
  }
  return oldReservationList;
};

const cancellationHistory = (oldCancellationList = [], action) => {
  if (action.type === "CANCEL_BOOKING") {
    return [...oldCancellationList, action.payload];
  }
  return oldCancellationList;
};

const accounting = (totalMoney = 100, action) => {
  if (action.type === "NEW_BOOKING") {
    return totalMoney + action.payload.amount;
  } else if (action.type === "CANCEL_BOOKING") {
    return totalMoney - action.payload.refundAmount;
  }
  return totalMoney;
};

// STORE

// destructuring combineReducers and createStore from Redux
const { combineReducers, createStore } = Redux;

// combining all 3 Reducers with Redux.combineReducers()
const railwayCentralStore = combineReducers({
  reservationHistory,
  cancellationHistory,
  accounting,
});

// creating Redux Store with Redux.createStore()
const centralStore = createStore(railwayCentralStore);

centralStore.dispatch(newBooking("Johnson Bhaskaran", 250));
centralStore.dispatch(newBooking("Jessy Antony", 550));

// This creates BUG - need to fix by checking with state whether data exists or not
// centralStore.dispatch(newBooking("Reshma", 150));

centralStore.dispatch(cancelBooking("Reshma", 100));

console.log("Current Railway Central Store Info: ", centralStore.getState());
