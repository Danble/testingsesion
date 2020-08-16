import React from 'react'
import {shallow} from 'enzyme'
import Ticket from './ticket'

it("Debe devolver el incremento del evento cuando se haga click al botón", () => {
  const wrapper = shallow(<Ticket />)
  const total = wrapper.find("h2.total").text()
  expect(total).toBe("0")

  const button = wrapper.find("button")
  for (let i = 0; i < 200; i++) {    
    button.simulate("click")
  }
  const total2 = wrapper.find("h2.total").text()
  expect(total2).toBe("200")
})

it("Nos debe devolver un props", () => {
  const wrapper = shallow(<Ticket name={"Super Bowl"} />)
  const title = wrapper.find("h2.title").text()
  expect(title).toBe("Super Bowl")
})