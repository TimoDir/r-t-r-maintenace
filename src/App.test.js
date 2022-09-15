import { render, screen, fireEvent, act } from '@testing-library/react';
import App from './App';
import { funnyCat } from './resources/funnycat';

describe('App', () =>{
  test('Render a welcoming message', () =>{
    render(<App />);

  })

});



describe('funnyCat', () =>{
  test('Return an array of object', () =>{
    expect(typeof(funnyCat)).toBe('object');
    expect(typeof(funnyCat[0])).toBe('object');
  })
})