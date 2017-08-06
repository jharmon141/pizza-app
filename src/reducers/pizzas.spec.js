import pizzas from './pizzas'

describe('pizzas reducer', () => {
   it('should handle initial state', () => {
      expect(
         pizzas(undefined, {})
      ).toEqual([])
   })

   it('should handle ADD_PIZZA', () => {
      expect(
         pizzas([], {
            type: 'ADD_PIZZA',
            pizza: {
               id: 1,
               size: 'small',
               toppings: [
                  {
                     __typename: 'topping',
                     name: 'cheese',
                     price: 0.1
                  },
                  {
                     __typename: 'topping',
                     name: 'sausage',
                     price: 1.29
                  },
                  {
                     __typename: 'topping',
                     name: 'onion',
                     price: 0.29
                  }
               ],
               total: 11.57
            }
         })
      ).toEqual([
         {
            id: 1,
            size: 'small',
            toppings: [
               {
                  __typename: 'topping',
                  name: 'cheese',
                  price: 0.1
               },
               {
                  __typename: 'topping',
                  name: 'sausage',
                  price: 1.29
               },
               {
                  __typename: 'topping',
                  name: 'onion',
                  price: 0.29
               }
            ],
            total: 11.57
         }
      ])

      expect(
         pizzas([
            {
               id: 1,
               size: 'small',
               toppings: [
                  {
                     __typename: 'topping',
                     name: 'cheese',
                     price: 0.1
                  },
                  {
                     __typename: 'topping',
                     name: 'sausage',
                     price: 1.29
                  },
                  {
                     __typename: 'topping',
                     name: 'onion',
                     price: 0.29
                  }
               ],
               total: 11.57
            }
         ], {
            type: 'ADD_PIZZA',
            pizza: {
               id: 2,
               size: 'medium',
               toppings: [
                  {
                     __typename: 'topping',
                     name: 'pepperoni',
                     price: 0.4
                  },
                  {
                     __typename: 'topping',
                     name: 'cheese',
                     price: 0.1 
                  },
                  {
                     __typename: 'topping',
                     name: 'sausage',
                     price: 1.29 
                  },
                  {
                     __typename: 'topping',
                     name: 'bell peps',
                     price: 0.22
                  }
               ],
               total: 12.9 
            }
         })
      ).toEqual([
         {
            id: 1,
            size: 'small',
            toppings: [
               {
                  __typename: 'topping',
                  name: 'cheese',
                  price: 0.1
               },
               {
                  __typename: 'topping',
                  name: 'sausage',
                  price: 1.29
               },
               {
                  __typename: 'topping',
                  name: 'onion',
                  price: 0.29
               }
            ],
            total: 11.57
         }, {
            id: 2,
            size: 'medium',
            toppings: [
               {
                  __typename: 'topping',
                  name: 'pepperoni',
                  price: 0.4
               },
               {
                  __typename: 'topping',
                  name: 'cheese',
                  price: 0.1 
               },
               {
                  __typename: 'topping',
                  name: 'sausage',
                  price: 1.29 
               },
               {
                  __typename: 'topping',
                  name: 'bell peps',
                  price: 0.22
               }
            ],
            total: 12.9 
         }
      ])
   })

   it('should handle REMOVE_PIZZA', () => {
      expect(
         pizzas([
            {
               id: 1,
               size: 'small',
               toppings: [
                  {
                     __typename: 'topping',
                     name: 'cheese',
                     price: 0.1
                  },
                  {
                     __typename: 'topping',
                     name: 'sausage',
                     price: 1.29
                  },
                  {
                     __typename: 'topping',
                     name: 'onion',
                     price: 0.29
                  }
               ],
               total: 11.57
            }, {
               id: 2,
               size: 'medium',
               toppings: [
                  {
                     __typename: 'topping',
                     name: 'pepperoni',
                     price: 0.4
                  },
                  {
                     __typename: 'topping',
                     name: 'cheese',
                     price: 0.1 
                  },
                  {
                     __typename: 'topping',
                     name: 'sausage',
                     price: 1.29 
                  },
                  {
                     __typename: 'topping',
                     name: 'bell peps',
                     price: 0.22
                  }
               ],
               total: 12.9 
            }, {
               id: 3,
               size: 'large',
               toppings: [
                  {
                     __typename: 'topping',
                     name: 'pepperoni',
                     price: 0.4
                  },
                  {
                     __typename: 'topping',
                     name: 'cheese',
                     price: 0.1 
                  },
                  {
                     __typename: 'topping',
                     name: 'sausage',
                     price: 1.29 
                  },
                  {
                     __typename: 'topping',
                     name: 'green olives',
                     price: 0.39
                  }
               ],
               total: 15.670000000000002 
            }
         ], {
            type: 'REMOVE_PIZZA',
            pizza: {
               id: 3,
               size: 'large',
               toppings: [
                  {
                     __typename: 'topping',
                     name: 'pepperoni',
                     price: 0.4
                  },
                  {
                     __typename: 'topping',
                     name: 'cheese',
                     price: 0.1 
                  },
                  {
                     __typename: 'topping',
                     name: 'sausage',
                     price: 1.29 
                  },
                  {
                     __typename: 'topping',
                     name: 'green olives',
                     price: 0.39
                  }
               ],
               total: 15.670000000000002 
            }
         })
      ).toEqual([
         {
            id: 1,
            size: 'small',
            toppings: [
               {
                  __typename: 'topping',
                  name: 'cheese',
                  price: 0.1
               },
               {
                  __typename: 'topping',
                  name: 'sausage',
                  price: 1.29
               },
               {
                  __typename: 'topping',
                  name: 'onion',
                  price: 0.29
               }
            ],
            total: 11.57
         }, {
            id: 2,
            size: 'medium',
            toppings: [
               {
                  __typename: 'topping',
                  name: 'pepperoni',
                  price: 0.4
               },
               {
                  __typename: 'topping',
                  name: 'cheese',
                  price: 0.1 
               },
               {
                  __typename: 'topping',
                  name: 'sausage',
                  price: 1.29 
               },
               {
                  __typename: 'topping',
                  name: 'bell peps',
                  price: 0.22
               }
            ],
            total: 12.9 
         }
      ])
   })
})
