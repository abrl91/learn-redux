export const depositAction = (amount) => {
    return (dispatch) => {
        dispatch({type: 'deposit', payload: amount});
    }
}

export const withdrawalAction = (amount) => {
    return (dispatch) => {
        dispatch({type: 'withdrawal', payload: amount});
    }
}