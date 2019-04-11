'use strict';
/*
Create a message queue server
Initiate a queue called "files" that monitors "save" and "error" events
Initiate a queue called "database" that monitors "create", "read", "update", "delete" and "error" events
Create a logger application
Connects to the "file" and "database" queues
Performs a custom console.log() on the events named above
*/

const Q = require('@nmq/q/server');
Q.start();

const files = new Q('files');
files.monitorEvent('save');
files.monitorEvent('error');

const db = new Q('database');
db.monitorEvent('create');
db.monitorEvent('read');
db.monitorEvent('update');
db.monitorEvent('delete');
