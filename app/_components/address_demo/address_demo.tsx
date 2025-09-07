import AddressContainer from "./address_context/address_context";
import AddressTyping from "./address_typing/address_typing";

export default function AddressDemo() {
  return (
    <AddressContainer>
      <section
        id="address-demo"
        className="px-3 max-w-[var(--max-width)] mx-auto w-full  min-h-screen mt-12 hide"
      >
        <AddressTyping />
      </section>
    </AddressContainer>
  );
}
