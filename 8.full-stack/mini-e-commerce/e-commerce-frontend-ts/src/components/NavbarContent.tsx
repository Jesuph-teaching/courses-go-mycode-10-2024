import CartPopup from "./CartPopup";
import UserDrop from "./UserDrop";

export default function NavbarContent() {
  return (
    <>
      <div className="flex gap-4 ml-auto">
        <CartPopup />
        <UserDrop />
      </div>
    </>
  );
}
