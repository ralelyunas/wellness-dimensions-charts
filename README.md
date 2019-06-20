# wellness-dimensions-charts 

Some custom useful charts implemented in svg as react components.

## Gallery

http://wellness-dimensions-charts-gallery.s3-website.us-east-2.amazonaws.com/

## How to use

Import the react components and set props. All the props have defaults.

```js
import { StackedTargetChart } from 'wellness-dimensions-charts'

<StackedTargetChart 
  width={350}
  target={5}
  overflowAreaCount={0}
  overflowStyle={"hidden"}
  categoryCaption={"Aerobic Workouts"}
  timePeriodCaption={"Week of Sept 4, 2019"}
  timestampFormat={"dddd, h:MM tt"}
  stackItems={[{event: "Swimming", timestamp: now()}, {event: "Running", timestamp: now()}]}
  bgColor={"#88aa00"}
  stackItemColor={"#346f4d"} />

```
