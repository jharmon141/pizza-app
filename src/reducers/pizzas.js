import {ADD_PIZZA, REMOVE_PIZZA} from '../actions'

//this is used to create a unique ID for each pizza that is added
let nextPizzaID = 0

const pizzas = (state = [], action) => {
   switch (action.type) {
      case ADD_PIZZA:
         nextPizzaID++
         return [
            ...state,
            {
               size: action.pizza.size,
               toppings: action.pizza.toppings,
               total: action.pizza.total,
               id: nextPizzaID
            }
         ]
      case REMOVE_PIZZA:
         return state.filter(pizza => pizza.id !== action.pizza.id)
      default:
         return state
   }
}

export default pizzas
