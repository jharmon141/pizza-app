import {ADD_PIZZA, REMOVE_PIZZA} from '../actions'

function pizzas(state = [], action) {
    switch (action.type) {
        case ADD_PIZZA:
            return [
                ...state,
                {
                    pizzas: action.pizza
                }
            ]
        case REMOVE_PIZZA:
            return state.filter(pizza => pizza !== action.pizza);
        default:
            return state
    }
}

function pizzaApp(state = {}, action) {
    return {
        pizzas: pizzas(state.pizzas, action)
    }
}

export default pizzaApp
