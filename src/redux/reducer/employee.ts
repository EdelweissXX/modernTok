export default function indexGetUser<T extends (state:unknown,action:{type:any,data:any})=>any>(state={num:1}, action:{type:string,data:any}) {
    const {type,data} = action

    switch (type) {
        case 'START_FETCH':
            return data+2
            // return {...state as {}, isFetching: true};

        case  'FINISH_FETCH':
            return {...state as {}, isFetching: false};

        case 'SET_ERROR':
            return {...state as {}, error: action.data}

        default:
            return state;
    }
}

