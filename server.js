'use strict';

const Q = require('@nmq/q/server');
Q.start();

const file = new Q('file');
file.monitorEvent('save');
file.monitorEvent('error');

const db = new Q('database');
db.monitorEvent('api-server');
db.monitorEvent('create');
db.monitorEvent('read');
db.monitorEvent('update');
db.monitorEvent('delete');
