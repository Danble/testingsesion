import React from 'react'
import {shallow} from 'enzyme'
import App from './App'
import Ticket from './components/ticket'
import Footer from './components/footer'

it("Debe hacer el render los componentes hijos Footer y Ticket", () => {
  const wrapper = shallow(<App />)
  const footer = wrapper.find(Footer)
  expect(footer.exists()).toBe(true)

  const ticket = wrapper.find(Ticket)
  expect(ticket.exists()).toBe(true)
})