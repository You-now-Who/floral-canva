import React from "react";
import { Button, Rows, Text, Title, FormField, NumberInput} from "@canva/app-ui-kit";
import { addNativeElement } from "@canva/design";

export function App() {
  async function handleClick() {
    // Generate a random color
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    let pathString = `M50 50 \
           C40 40, 30 20, 40 10 \
           C50 0, 70 10, 60 20 \
           C50 30, 60 40, 50 50 \
           C60 40, 70 30, 80 40 \
           C90 50, 80 70, 70 60 \
           C60 50, 50 60, 50 50 \
           C40 60, 30 70, 20 60 \
           C10 50, 20 30, 30 40 \
           C40 50, 50 40, 50 50 Z`;
           
    // Add the shape to the design with the random color
    await addNativeElement({
      type: "SHAPE",
      paths: [
        {
          d: pathString,
          fill: {
            color: randomColor,
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
      <Rows spacing="2u">
      <Rows spacing="1u">
        <Text> </Text>
        <Title>Yash's flower generator!</Title>
        <Text> Hello! This is a cool new flower generator machine that generates new flower shapes for you!</Text>
      </Rows>
      <FormField label="Number of petals" description="It takes the number of petals." control={(props) => (
        <NumberInput {...props} />
      )} />
      <Button variant="primary" onClick={handleClick} stretch>Add shape to design</Button>
      </Rows>
    </div>
  );
}