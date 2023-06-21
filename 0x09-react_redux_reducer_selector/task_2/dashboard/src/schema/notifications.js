import { normalizedNotifications, normalizedUsers } from './normalizedData';

function getAllNotificationsByUser(userId) {
  const notifications = [];
  
  for (const notificationId in normalizedNotifications) {
    const notification = normalizedNotifications[notificationId];
    
    if (notification.author === userId) {
      const author = normalizedUsers[notification.author];
      const message = notification.context;
      notifications.push({
        id: notification.id,
        message: message.text,
        date: message.date,
        author: {
          id: author.id,
          name: author.name,
          avatar: author.avatar,
        },
      });
    }
  }
  
  return notifications;
}


export default function getAllNotificationsByUser();
