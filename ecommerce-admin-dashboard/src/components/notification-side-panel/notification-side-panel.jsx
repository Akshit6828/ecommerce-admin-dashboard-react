import "./notification-side-panel.scss";

const NOTIFICATION_TYPE = {
  bug: "BUG",
  user_register: "USER_REGISTER",
  subscribe: "SUBSCRIBE",
};

const ICONS_MAPPING = {
  [NOTIFICATION_TYPE.bug]: {
    icon: "/public/assets/icons/global/BugBeetle.svg",
    color: "var(--Primary-Blue)",
  },
  [NOTIFICATION_TYPE.user_register]: {
    icon: "/public/assets/icons/global/User-Icon.svg",
    color: "#E5ECF6",
  },
  [NOTIFICATION_TYPE.subscribe]: {
    icon: "/public/assets/icons/global/Broadcast.svg",
    color: "#E5ECF6",
  },
};

const notifications = [
  {
    type: NOTIFICATION_TYPE.bug,
    notificationText: "You have a bug that needs to be fixed.",
    time: "Just now",
  },
  {
    type: NOTIFICATION_TYPE.user_register,
    notificationText: "New user registered",
    time: "59 minutes ago",
  },
  {
    type: NOTIFICATION_TYPE.bug,
    notificationText: "You have a bug that needs to be fixed.",
    time: "12 hours ago",
  },
  {
    type: NOTIFICATION_TYPE.subscribe,
    notificationText: "Andi Lane subscribed to you",
    time: "Today, 11:59 AM",
  },
];

const activities = [
  {
    icon: "/public/assets/icons/global/User-1.png",
    notificationText: "You have a bug that needs to be fixed.",
    time: "Just now",
  },
  {
    icon: "/public/assets/icons/global/User-2.svg",
    notificationText: "Released a new version",
    time: "59 minutes ago",
  },
  {
    icon: "/public/assets/icons/global/User-3.png",
    notificationText: "Submitted a bug",
    time: "12 hours ago",
  },
  {
    icon: "/public/assets/icons/global/User-4.svg",
    notificationText: "Modified A data in Page X",
    time: "Today, 11:59 AM",
  },
  {
    icon: "/public/assets/icons/global/User-4.svg",
    notificationText: "Deleted a page in Project X",
    time: "Feb 2, 2023",
  },
];
const contacts = [
  {
    icon: "/public/assets/icons/global/User-5.png",
    name: "Natali Craig",
  },
  {
    icon: "/public/assets/icons/global/User-11.png",
    name: "Drew Cano",
  },
  {
    icon: "/public/assets/icons/global/User-7.png",
    name: "Orlando Diggs",
  },
  {
    icon: "/public/assets/icons/global/User-8.svg",
    name: "Andi Lane",
  },
  {
    icon: "/public/assets/icons/global/User-9.png",
    name: "Kate Morrison",
  },
  {
    icon: "/public/assets/icons/global/User-10.png",
    name: "Koray Okumus",
  },
];

const NotificationSidePanel = () => {
  return (
    <div className="notification-side-panel">
      <div className="container">
        <div className="title">Notifications</div>
        {notifications.map((notification) => {
          const { icon, color } = ICONS_MAPPING[notification.type];
          return (
            <div className="notification-item">
              <div className="icon " style={{ "background-color": color }}>
                <img src={icon} alt={notification.type} />
              </div>
              <div className="context">
                <div className="text">{notification.notificationText}</div>
                <div className="time">{notification.time}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="container">
        <div className="title">Activities</div>
        {activities.map((activity, index) => {
          return (
            <div className="notification-item" key={index}>
              <div className="image-icon">
                <img src={activity.icon} alt="user" />
              </div>
              <div className="context">
                <div className="text">{activity.notificationText}</div>
                <div className="time">{activity.time}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="container">
        <div className="title">Contacts</div>
        {contacts.map((contact, index) => {
          return (
            <div className="notification-item" key={index}>
              <div className="image-icon">
                <img src={contact.icon} alt="user" />
              </div>
              <div className="context">
                <div className="text">{contact.name}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NotificationSidePanel;
