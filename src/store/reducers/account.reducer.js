const AccountReducer = (state = 0, action) => {
    switch (action.type) {
        case "deposit":
            return state + action.payload;
        case "withdrawal":
            return state - action.payload;
        default:
            return state;
    }
}

export default AccountReducer;