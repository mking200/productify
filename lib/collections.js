import { Mongo } from 'meteor/mongo';

Categories = new Mongo.Collection('categories');
Instructors = new Mongo.Collection('instructor');
Clients = new Mongo.Collection('client');
SessionRms = new Mongo.Collection('sessionRm');
TaskGroups = new Mongo.Collection('taskGroup');
Tasks = new Mongo.Collection('tasks');
Chats = new Mongo.Collection('chat');
Messages = new Mongo.Collection('message');
