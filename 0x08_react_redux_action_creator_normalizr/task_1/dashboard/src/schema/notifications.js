import { normalize, schema } from 'normalizr';
import notificationsData from '../notifications.json';

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

const normalizedData = normalize(notificationsData, [notification]);

export const normalizedNotifications = normalizedData.entities.notifications;
export const normalizedUsers = normalizedData.entities.users;
export const normalizedMessages = normalizedData.entities.messages;
