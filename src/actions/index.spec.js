import * as actions from './index';

describe('pizza actions', () => {
   it('addPizza should create ADD_PIZZA action', () => {
      expect(actions.addPizza({
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
      })).toEqual({
         type: 'ADD_PIZZA',
         pizza: {
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
      });
   });

   it('removePizza should create REMOVE_PIZZA action', () => {
      expect(actions.removePizza({
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
      })).toEqual({
         type: 'REMOVE_PIZZA',
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
      });
   });

   it('updatePizza should create UPDATE_PIZZA action', () => {
      expect(actions.updatePizza({
         id: 1,
         size: 'small',
         quantity: 1,
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
      })).toEqual({
         type: 'UPDATE_PIZZA',
         pizza: {
            id: 1,
            size: 'small',
            quantity: 1,
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
      });
   });
});
