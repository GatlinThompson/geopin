import React from "react";
import ValidAddressComponent from "./valid_address_component";
import { addressComponents } from "./valid_address_components_config";

const loopedComponents = addressComponents.concat(addressComponents);

export default function ValidAddressContainer() {
  return (
    <div className="w-full  h-70 w-full md:h-110 lg:h-120 mask-t-from-95%  mask-b-to-95% overflow-hidden mt-4">
      <div className=" grid grid-cols-2 md:grid-cols-3 gap-4  w-full slide-up ">
        {loopedComponents.map((component, index) => (
          <ValidAddressComponent
            key={index}
            title={component.title}
            description={component.description}
          />
        ))}
      </div>
    </div>
  );
}
