import { Check, Trash2 } from "lucide-react";
import { useCart } from "./CartContext";
import "./CartNotification.css";

function CartNotification() {
  const { notification } = useCart();

  if (!notification) {
    return null;
  }

  const isDelete = notification.type === "delete";

  return (
    <div className={`cart-notification ${isDelete ? "delete" : ""}`}>
      <div className="notification-icon">
        {isDelete ? (
          <Trash2 size={17} />
        ) : (
          <Check size={17} />
        )}
      </div>

      <span>{notification.message}</span>
    </div>
  );
}

export default CartNotification;