import React from 'react'
import {shallow} from 'enzyme'
import Header from './header'

const wrapper = shallow(<Header />)

it('Debe devolver los items del navBar', () => {
  const anchor1 = wrapper.find('.a1')
  const result1 = anchor1.text()
  const anchor2 = wrapper.find('.a2')
  const result2 = anchor2.text()
  const anchor3 = wrapper.find('.a3')
  const result3 = anchor3.text()

  expect(result1).toBe('Home')
  expect(result2).toBe('Nosotros')
  expect(result3).toBe('Blog')
})

it('Debe devolver la clase del nav', () => {
  expect(wrapper.find('nav').hasClass('navi')).toEqual(true)
})