
export default function indexGetUser<T extends (state:unknown,action:{type:any,data:any})=>any>(state={}, action:{type:any,data:any}) {
    const {type} = action

    switch (type) {
        case type.START_FETCH:
            return {...state as {}, isFetching: true};

        case  type.FINISH_FETCH:
            return {...state as {}, isFetching: false};

        case type.SET_ERROR:
            return {...state as {}, error: action.data}

        default:
            return state;
    }
}

