import data from '../../notifications.json';
import { normalize, schema } from 'normalizr';

export default function getAllNotificationsByUser(userId) {
    return data.filter(notification => notification.author === userId);
  }
