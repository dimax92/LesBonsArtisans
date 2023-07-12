import { legacy_createStore as createStore} from 'redux'

const initialState = {
    listProducts: [],
    product: '',

    nameInputValue: '',
    isChecked: false,
    priceInputValue: '',
    ratingInputValue: '',
    typeInputValue: '',
    warrantyYearsInputValue: '',

    username: '',
    password: '',

    messageCreation: '',
    messageAccueil: '',
    messageLogin: '',
    messageModification: '',
    messageProduct: '',
    messageSignUp: ''
};

function reducer(state = initialState, action){
    switch(action.type){
        case 'SET_LIST_PRODUCTS':
            return {
                ...state,
                listProducts: action.payload
            };
        case 'SET_PRODUCT':
            return {
                ...state,
                product: action.payload
            };
        case 'SET_NAME_INPUT_VALUE':
            return {
                ...state,
                nameInputValue: action.payload
            };
        case 'SET_IS_CHECKED':
            return {
                ...state,
                isChecked: action.payload
            };
        case 'SET_PRICE_INPUT_VALUE':
            return {
                ...state,
                priceInputValue: action.payload
            };
        case 'SET_RATING_INPUT_VALUE':
            return {
                ...state,
                ratingInputValue: action.payload
            };
        case 'SET_TYPE_INPUT_VALUE':
            return {
                ...state,
                typeInputValue: action.payload
            };
        case 'SET_WARRANTY_YEARS_INPUT_VALUE':
            return {
                ...state,
                warrantyYearsInputValue: action.payload
            };
        case 'SET_USERNAME':
            return {
                ...state,
                username: action.payload
            };
        case 'SET_PASSWORD':
            return {
                ...state,
                password: action.payload
            };
        case 'SET_MESSAGE_CREATION':
            return {
                ...state,
                messageCreation: action.payload
            };
        case 'SET_MESSAGE_ACCUEIL':
            return {
                ...state,
                messageAccueil: action.payload
            };
        case 'SET_MESSAGE_LOGIN':
            return {
                ...state,
                messageLogin: action.payload
            };
        case 'SET_MESSAGE_MODIFICATION':
            return {
                ...state,
                messageModification: action.payload
            };
        case 'SET_MESSAGE_PRODUCT':
            return {
                ...state,
                messageProduct: action.payload
            };
        case 'SET_MESSAGE_SIGNUP':
            return {
                ...state,
                messageSignUp: action.payload
            };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;