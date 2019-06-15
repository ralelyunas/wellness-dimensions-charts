import React from 'react'

const stackItem = (itemNumber, width, stackItemWidth, overflowAreaHeight, targetBoxHeight, categoryTextBoxHeight, stackItemHeight, stackItemTopMargin) =>
{
  return (
    <g
    transform={"translate(" + ((width - stackItemWidth) * 0.5) + "," + 
       (overflowAreaHeight + targetBoxHeight - categoryTextBoxHeight - (itemNumber + 1) * stackItemHeight - itemNumber * stackItemTopMargin) + ")"}
    id="g6309">
   <rect
      style={{ fill:"#346f4d", fillOpacity:"0.70" }}
      id="rect4624-5-91"
      width={stackItemWidth + "px"}
      height={stackItemHeight + "px"}
      x="0"
      y="0" />
  </g>
  )
}

const SVG = ({
  width = 400,
  target = 5,
  overflow = 2,
  categoryCaption = "Aerobic Workouts",
  timePeriodCaption = "Sept 4, 2019 - Sept 11, 2019",
  stackItems = [{event: "foo"}, {event: "bar"}, {event: "bar"}, {event: "bar"}, {event: "bar"}]
}) => {
  const stackItemWidth = width * 0.90
  const stackItemHeight = stackItemWidth * 0.25
  const targetBoxWidth = width
  const categoryTextBoxHeight = stackItemHeight * 0.6
  const timePeriodTextBoxHeight = stackItemHeight * 0.5
  const stackItemTopMargin = 0.1 * stackItemHeight
  const targetBoxHeight = (stackItemHeight + stackItemTopMargin) * target + categoryTextBoxHeight
  const overflowAreaHeight = (stackItemHeight + stackItemTopMargin) * overflow
  const height = targetBoxHeight + timePeriodTextBoxHeight + overflowAreaHeight
  return (
<svg
   xmlns="http://www.w3.org/2000/svg"
   id="svg8"
   version="1.1"
   viewBox="0 0 {width} {height}"
   style={{ width: width + "px", height: height + "px", border: "3px solid blue" }}>
  <defs
     id="defs2">
    <linearGradient
       gradientUnits="userSpaceOnUse"
       x1={width/2}
       y1={-height * 0.25}
       x2={width/2}
       y2={height * 1.25}
       id="linearGradient4574">
    <stop
       id="stop4568"
       offset="0"
       style={{ stopColor: "#88aa00", stopOpacity: "1" }} />
    <stop
       id="stop4570"
       offset="1"
       style={{ stopColor: "#000000", stopOpacity: "0" }} /> />
    </linearGradient>
  </defs>
  <g
     style={{ fontStyle: "normal", fontWeight: "normal", fontFamily: "sans-serif", writingMode: "lr-tb" }}
     id="layer1">
    <rect
       style={{ fill: "url(#linearGradient4574)" }}
       y={overflowAreaHeight + "px"}
       x={(width - targetBoxWidth) * 0.5 + "px"}
       height={targetBoxHeight + "px"}
       width={targetBoxWidth + "px"}
       id="rect3713" />
    <text
       id="text5562"
       y={overflowAreaHeight + stackItemHeight * 2.2 + "px"}
       x={width * 0.5 + "px"}
       style={{ fontSize: width * 0.4 + "px", textAlign: "center", textAnchor: "middle", fill: "#b3b3b3" }} >
        5
    </text>
    <text
       id="text5390"
       y={overflowAreaHeight + targetBoxHeight - (categoryTextBoxHeight * 0.4) + "px"}
       x={width * 0.5 + "px"}
       style={{ fontSize: categoryTextBoxHeight * 0.4 + "px", textAlign: "center", textAnchor: "middle", fill: "#4d654d" }}>
      {categoryCaption}
    </text>
    <text
       id="text5396"
       y={height - (timePeriodTextBoxHeight * 0.4) + "px"}
       x={width * 0.5 + "px"}
       style={{ fontSize: timePeriodTextBoxHeight * 0.4 + "px", textAlign: "center", textAnchor: "middle", fill: "#4d4d4d" }}>
       {timePeriodCaption}
    </text>
    {stackItems.map((item,index) => (
       stackItem(index, width, stackItemWidth, overflowAreaHeight, targetBoxHeight, categoryTextBoxHeight, stackItemHeight, stackItemTopMargin)
    ))}
  </g>
</svg>
)}

export default SVG