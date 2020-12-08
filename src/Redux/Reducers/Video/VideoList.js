export default function reducer(
  state = {
    status: 'uninitiated',
    result: {},
  },
  action,
) {
  switch (action.type) {
    case 'GET_VIDEOS_INITIATED': {
      return {...state, status: 'initiated'};
    }
    case 'GET_VIDEOS_SUCCESS': {
      return {...state, status: 'success', result: action.payload};
    }
    case 'GET_VIDEOS_FAILED': {
      return {...state, status: 'failed', result: action.payload};
    }
    default: {
      return state;
    }
  }
}
