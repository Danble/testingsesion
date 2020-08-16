import React from 'react'
import {shallow} from 'enzyme'
import Footer from './footer'

it('Debe devolver un número telefónico de servicio al cliente', () => {
  const wrapper = shallow(<Footer />)
  const span = wrapper.find('span')
  const result = span.text()

  expect(result).toBe('Servicio al cliente: 1-800-555-444')
})