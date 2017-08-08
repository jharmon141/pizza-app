import React from 'react'
import SizeMenu from '../components/SizeMenu'
import renderer from 'react-test-renderer'

describe('SizeMenu Component', () => {
   it('renders without crashing', () => {
      let pizzaSizes = [{name: 'small'}, {name: 'medium'}, {name: 'large'}]

      const tree = renderer.create(
         <SizeMenu 
            pizzaSizes={pizzaSizes}
            initialSize={() => {}}
         />
      ).toJSON()
      expect(tree).toMatchSnapshot()
   })
})
