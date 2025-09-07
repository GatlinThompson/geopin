import AddressBar from "./address_bar/address_bar";
import AddressText from "./address_text/address_text";
import AddressTyping from "./address_typing/address_typing";

export default function AddressDemo() {
  return (
    <section
      id="address-demo"
      className="px-3 max-w-[var(--max-width)] mx-auto w-full show-up min-h-screen mt-12"
    >
      <AddressTyping />
    </section>
  );
}
