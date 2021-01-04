import { BasicEventFormat } from '../components/event_formats';


export const log_in = (_username: string, _password: string) => {
  return {
    type: 'LOG_IN',
    payload: {
      username: _username,
      password: _password
    }
  }
};

export const log_out = () => {
  return {
    type: 'LOG_OUT'
  }
};

export const is_logged_in = (is_logged: boolean = false) => {
  return {
    type: 'IS_LOGGED_IN',
    payload: is_logged
  }
};

export const add_entry = () => {
  return {
    type: 'ADD_ENTRY',
    payload: new BasicEventFormat()
  }
};

export const remove_entry = (id: number) => {
  return {
    type: 'REMOVE_ENTRY',
    payload: id
  }
};
