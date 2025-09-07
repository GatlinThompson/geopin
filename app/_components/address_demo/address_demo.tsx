import AddressContainer from "./address_context/address_context";
import AddressTyping from "./address_typing/address_typing";
import AddressResults from "./address_results/address_results";
import ScrollContainer from "@/util/hooks/scroll_container";

export default function AddressDemo() {
  return (
    <ScrollContainer container={"address-demo"}>
      <AddressContainer container={"address-demo"}>
        <section
          id="address-demo"
          className="px-3 max-w-[var(--max-width)] mx-auto w-full  min-h-screen mt-12 hide relative  pb-12"
        >
          <div className="sticky top-0">
            <AddressTyping />
            <AddressResults />
          </div>
        </section>
      </AddressContainer>
    </ScrollContainer>
  );
}
