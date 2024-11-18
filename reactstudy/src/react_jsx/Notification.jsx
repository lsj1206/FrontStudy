import React, { useState, useEffect } from "react";
import './styles.css';

const reservedNotifications = [
  {
    id : 1,
    message: "안녕하세요 오늘 일정을 알려드립니다."
  },
  {
    id : 2,
    message: "점심식사 시간입니다."
  },
  {
    id : 3,
    message: "이제 곧 미팅이 시작됩니다."
  },
  
];


const Notification = React.memo(({ message }) => {
  return (
    <div className="wrapper">
      <span className="messageText">{message}</span>
    </div>
  );
})

function NotificationList() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // 타이머 설정
    const timer = setInterval(() => {
      setNotifications((prevNotifications) => {
        if (prevNotifications.length < reservedNotifications.length) {
          const index = prevNotifications.length;
          return prevNotifications.concat(reservedNotifications[index]);
        } else {
          clearInterval(timer); // 더 이상 알림이 없으면 타이머 해제
          return prevNotifications;
        }
      });
    }, 1000);

    // 언마운트 시 타이머 정리
    return () => clearInterval(timer);
  }, []); // 의존성 배열에서 reservedNotifications 제거 (전역에서 참조)

  return (
    <div>
      {notifications.map((notification) => (
        <Notification key={notification.id} message={notification.message} />
      ))}
    </div>
  );
}

export default NotificationList;
