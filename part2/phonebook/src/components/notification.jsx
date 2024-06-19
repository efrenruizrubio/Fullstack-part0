import { useEffect } from 'react'
import styles from '../styles/notification.module.css'

export default function Notification({
  notification: {
    message, isError, show
  },
  setNotification,
}) {
  useEffect(() => {
    if(!show) return
    setTimeout(() => {
      setNotification((prev) => ({...prev, show: false}))
    }, 3000);
  }, [show, setNotification])
  
  return (
    <div
      className={
        `${styles.notification}
          ${!isError ? styles.success : styles.error}
          ${show ? styles.show : styles.hide}
      `}
    >
      {message}
    </div>
  )
}