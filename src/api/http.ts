import axios from 'axios';

export const http = axios.create({
  baseURL: 'http://vemser-hml.dbccompany.com.br:39000/guilherme-militao/vemser-tf-04-security'
})