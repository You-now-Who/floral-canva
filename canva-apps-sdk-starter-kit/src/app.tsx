import React from "react";
import { addNativeElement } from "@canva/design";

export function App() {
  async function handleClick() {
    // Add the shape to the design
    await addNativeElement({
      type: "SHAPE",
      paths: [
        {
          d: "M 0 0 H 100 V 100 H 0 L 0 0",
          fill: {
            color: "#ECD7A5",
          },
          
        },
      ],
      viewBox: {
        height: 100,
        width: 100,
        left: 0,
        top: 0,
      },
    });
  }

  return (
    <div>
      <button onClick={handleClick}>Add shape to design</button>
    </div>
  );
}