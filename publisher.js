'use strict';

const Q = require('@nmq/q/client');

Q.publish('files', 'save', {id:10});

Q.publish('database', 'create', {id:20, name:'billy'});