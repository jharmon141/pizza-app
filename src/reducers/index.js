import pizzas from './pizzas' 

function pizzaApp(state = {}, action) {
   return {
      pizzas: pizzas(state.pizzas, action)
   }
}

export default pizzaApp
