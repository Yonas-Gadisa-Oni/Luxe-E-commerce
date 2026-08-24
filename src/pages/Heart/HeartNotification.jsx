import { Check } from "lucide-react";
import { useHeart } from "./useHeart";
import "../Cart/CartNotification.css";

function HeartNotification() {
  const { notification } = useHeart();

  if (!notification) {
    return null;
  }

  return (
    <div className="cart-notification heart-notification">
      <div className="notification-icon"><Check size={17} /></div>
      <span>{notification.message}</span>
    </div>
  );
}

export default HeartNotification;
