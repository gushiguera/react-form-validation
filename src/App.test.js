import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Form from './components/Form';
import sinon from "sinon";

it('renders without crashing', () => {
  shallow(<App />);
});

it('form displays default message "This form is invalid!"', () => {
  const app = mount(<App />);
  const message = app.find('.form-message');
  expect(message.text()).toEqual('This form is invalid!');
});

it('valid form shows correct message"', () => {
  const app = mount(<App />);
  const message = app.find('.form-message');
  app.find('.name').simulate('change', { target: { value: 'Gus' } });
  app.find('.email').simulate('change', { target: { value: 'gushiguera@gmail.com' } });
  app.find('.phone').simulate('change', { target: { value: '5555555555' } });
  app.find('.url').simulate('change', { target: { value: 'www.originalwonders.com' } });
  app.find('.button').find('a').simulate('click');
  expect(message.text()).toEqual('This form is valid!');
});

it('invalid form shows correct message"', () => {
  const app = mount(<App />);
  const message = app.find('.form-message');
  app.find('.name').simulate('change', { target: { value: 'Gus Higuera' } });
  app.find('.email').simulate('change', { target: { value: 'gushiguera@gmail.com' } });
  app.find('.phone').simulate('change', { target: { value: '5555555555' } });
  app.find('.url').simulate('change', { target: { value: 'www.originalwonders.com' } });
  app.find('.button').find('a').simulate('click');
  expect(message.text()).toEqual('This form is invalid!');
});

it('isValid flag "true" on valid form"', () => { 
  const formSpy = sinon.spy();
  const form = shallow(<Form isFormValid={formSpy} />); 
  form.find('.name').simulate('change', { target: { value: 'Gus' } });
  form.find('.email').simulate('change', { target: { value: 'gushiguera@gmail.com' } });
  form.find('.phone').simulate('change', { target: { value: '5555555555' } });
  form.find('.url').simulate('change', { target: { value: 'www.originalwonders.com' } });
  form.find('.button').find('a').simulate('click');
  expect(formSpy.calledOnceWith(true)).toBe(true);
});

it('isValid flag "false" with invalid name"', () => { 
  const formSpy = sinon.spy();
  const form = shallow(<Form isFormValid={formSpy} />); 
  form.find('.name').simulate('change', { target: { value: 'Gus Higuera' } });
  form.find('.email').simulate('change', { target: { value: 'gushiguera@gmail.com' } });
  form.find('.phone').simulate('change', { target: { value: '5555555555' } });
  form.find('.url').simulate('change', { target: { value: 'www.originalwonders.com' } });
  form.find('.button').find('a').simulate('click');
  expect(formSpy.calledOnceWith(false)).toBe(true);
});

it('isValid flag "false" with invalid email"', () => { 
  const formSpy = sinon.spy();
  const form = shallow(<Form isFormValid={formSpy} />); 
  form.find('.name').simulate('change', { target: { value: 'Gus' } });
  form.find('.email').simulate('change', { target: { value: 'gushigueragmail.com' } });
  form.find('.phone').simulate('change', { target: { value: '5555555555' } });
  form.find('.url').simulate('change', { target: { value: 'www.originalwonders.com' } });
  form.find('.button').find('a').simulate('click');
  expect(formSpy.calledOnceWith(false)).toBe(true);
});

it('isValid flag "false" with invalid phone starting with 1"', () => { 
  const formSpy = sinon.spy();
  const form = shallow(<Form isFormValid={formSpy} />); 
  form.find('.name').simulate('change', { target: { value: 'Gus' } });
  form.find('.email').simulate('change', { target: { value: 'gushiguera@gmail.com' } });
  form.find('.phone').simulate('change', { target: { value: '1555555555' } });
  form.find('.url').simulate('change', { target: { value: 'www.originalwonders.com' } });
  form.find('.button').find('a').simulate('click');
  expect(formSpy.calledOnceWith(false)).toBe(true);
});

it('isValid flag "false" with invalid phone starting with 0"', () => { 
  const formSpy = sinon.spy();
  const form = shallow(<Form isFormValid={formSpy} />); 
  form.find('.name').simulate('change', { target: { value: 'Gus' } });
  form.find('.email').simulate('change', { target: { value: 'gushiguera@gmail.com' } });
  form.find('.phone').simulate('change', { target: { value: '0555555555' } });
  form.find('.url').simulate('change', { target: { value: 'www.originalwonders.com' } });
  form.find('.button').find('a').simulate('click');
  expect(formSpy.calledOnceWith(false)).toBe(true);
});

it('isValid flag "false" with invalid phone < than 10 chars"', () => { 
  const formSpy = sinon.spy();
  const form = shallow(<Form isFormValid={formSpy} />); 
  form.find('.name').simulate('change', { target: { value: 'Gus' } });
  form.find('.email').simulate('change', { target: { value: 'gushiguera@gmail.com' } });
  form.find('.phone').simulate('change', { target: { value: '2' } });
  form.find('.url').simulate('change', { target: { value: 'www.originalwonders.com' } });
  form.find('.button').find('a').simulate('click');
  expect(formSpy.calledOnceWith(false)).toBe(true);
});

it('isValid flag "false" with invalid phone > than 10 chars"', () => { 
  const formSpy = sinon.spy();
  const form = shallow(<Form isFormValid={formSpy} />); 
  form.find('.name').simulate('change', { target: { value: 'Gus' } });
  form.find('.email').simulate('change', { target: { value: 'gushiguera@gmail.com' } });
  form.find('.phone').simulate('change', { target: { value: '222222222222222222222' } });
  form.find('.url').simulate('change', { target: { value: 'www.originalwonders.com' } });
  form.find('.button').find('a').simulate('click');
  expect(formSpy.calledOnceWith(false)).toBe(true);
});


it('isValid flag "false" with invalid url"', () => { 
  const formSpy = sinon.spy();
  const form = shallow(<Form isFormValid={formSpy} />); 
  form.find('.name').simulate('change', { target: { value: 'Gus' } });
  form.find('.email').simulate('change', { target: { value: 'gushiguera@gmail.com' } });
  form.find('.phone').simulate('change', { target: { value: '5555555555' } });
  form.find('.url').simulate('change', { target: { value: 'originalwonders' } });
  form.find('.button').find('a').simulate('click');
  expect(formSpy.calledOnceWith(false)).toBe(true);
});


