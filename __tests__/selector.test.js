import '../domate'

document.body.innerHTML =
  '<div class="container">' +

  '<ul class="list">' +
  '<li>list item 1</li>' +
  '<li>list item 2</li>' +
  '<li>list item 3</li>' +
  '</ul>' +

  '<ul class="list">' +
  '<li>list item 1</li>' +
  '<li>list item 2</li>' +
  '<li>list item 3</li>' +
  '</ul>' +

  '</div>'

describe('$', () => {
  test('$ exists in global scope', () => {
    expect($).toBeDefined()
    expect($).toStrictEqual( expect.any(Function) )
    expect($).toBe(window.$)
    expect($).toBe(Domate)
  })

  test('$ selector works', () => {
    const qs = document.querySelector('.container')
    expect( $('.container') ).toBe(qs)
    expect( $(document.body) ).toBe(document.body)
    expect( $(window) ).not.toBe(window)
    expect( $('.notExist') ).toBe(null)
    expect( $('.list', qs) ).toBe( $('.list') )
  })
})

describe('$$', () => {
  test('$$ exists in global scope', () => {
    expect($$).toBe($.all)
    expect($$).toBe(window.$$)
  })

  test('$$ selector works', () => {
    const qsa = document.querySelectorAll('.list')
    const lists = $$('.list')
    expect(lists).toBe(qsa)
    expect( $$(document.body) ).toStrictEqual([])
    expect( $$('li', qsa[0]) ).toBe( qsa[0].querySelectorAll('li') )
  })
})