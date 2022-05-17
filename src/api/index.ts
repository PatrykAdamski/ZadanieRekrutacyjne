import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://gnikdroy.pythonanywhere.com/api/',
});

export const endpoints = {
  books: 'book/',
};
