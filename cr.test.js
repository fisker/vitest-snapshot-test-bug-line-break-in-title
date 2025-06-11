import {test, expect} from 'vitest'

test('CR\r', () => {
  expect(1).toMatchSnapshot()
})

test('CRLF\r\f', () => {
  expect(2).toMatchSnapshot()
})