'use strict';

const Q = require('@nmq/q/client');

const files = new Q('files');
files.subscribe('save', (payload) => {
  console.log('save happened:', payload);
});
files.subscribe('error', (payload) => {
  console.log('error happened:', payload);
});

const db = new Q('database');
db.subscribe('create', (payload) => {
  console.log('created happened:', payload);
});
db.subscribe('read', (payload) => {
  console.log('read happened:', payload);
});
db.subscribe('update', (payload) => {
  console.log('update happened:', payload);
});
db.subscribe('delete', (payload) => {
  console.log('delete happened:', payload);
});
