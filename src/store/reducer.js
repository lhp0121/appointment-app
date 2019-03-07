const initalState = {
    //initial appointment data.
    //if we have backend api service with database, we would load data from there.
    modal: {
        show: false
    },
    timeslot: {
        9: {
            isBooked: false,
            name: "",
            phoneNumber: ""
        },
        10: {
            isBooked: false,
            name: "",
            phoneNumber: ""
        },
        11: {
            isBooked: true,
            name: "Laura Chang",
            phoneNumber: "123-123-1234"
        },
        12: {
            isBooked: false,
            name: "",
            phoneNumber: ""
        },
        13: {
            isBooked: false,
            name: "",
            phoneNumber: ""
        },
        14: {
            isBooked: false,
            name: "",
            phoneNumber: ""
        },
        15: {
            isBooked: false,
            name: "",
            phoneNumber: ""
        },
        16: {
            isBooked: false,
            name: "",
            phoneNumber: ""
        }

    }
}

const reducer = (state = initalState, actions) => {
    if (actions.type === 'CLOSE_MODAL') {
        return {
            ...state,
            modal: {
                show: false
            }
        }
    }
    if (actions.type === 'OPEN_MODAL') {
        return {
            ...state,
            modal: {
                show: true
            }
        }
    }
    if (actions.type === 'DELETE_APPT') {
        var key = 11;
        return {
            ...state,
            timeslot: {
                //hardcoded for testing
                ...state.timeslot,
                [key]: {
                    isBooked: false,
                    name: "",
                    phoneNumber: ""
                }

            },
            modal: {
                show: false
            }
        }
    }
    return state;
}


export default reducer;