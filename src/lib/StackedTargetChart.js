import React from 'react'
import { color } from 'd3-color'
import shortid from 'shortid'
import dateFormat from 'dateformat'

const Text = ({
  size = 12,
  fgcolor = color("#ececec"),
  x = 0,
  y = 0,
  text="",
  center=true
}) =>
{
  var textAlign = "left"
  var textAnchor = "start"
  if (center) {
    textAlign = "center"
    textAnchor = "middle" 
  }
  return (  
  <text
    y={y + "px"}
    x={x + "px"}
    style={{ fontSize: size + "px", textAlign: textAlign, textAnchor: textAnchor, fill: fgcolor.toString() }} >
    {text}
  </text>
)}

const CheckIcon = ({
  x = 0,
  y = 0,
  size = 20
}) =>
{
  const scale = size / 20
  return (
  <g
    transform={"translate(" + x + "," + y + ") scale(" + scale + "," + scale + ")"} >
  <rect
    x="0"
    y="0"
    height="20"
    width="20"
    style={{ fill: "#f2f2f2" }} />
  <rect
    x="2"
    y="2"
    height="16"
    width="16"
    style={{ fill: "#326844", fillOpacity: "0.3" }} /> 
  <path
     d="m 16.3,4.1 c -2.58317,3.77902 -5.19623,7.53833 -7.73136,11.34973 -1.6378,-1.65141 -3.27559,-3.30283 -4.91339,-4.95424 0.48171,-0.6906 0.96341,-1.38119 1.44512,-2.07179 1.01158,1.14098 2.02316,2.28197 3.03474,3.42295 2.14358,-3.06263 4.28717,-6.12526 6.43075,-9.18789 0.57805,0.48041 1.15609,0.96083 1.73414,1.44124 z"
     style={{ fill: "none", stroke: "#24b825", strokeWidth: "0.88099998", strokeLinecap: "butt", strokeLinejoin: "bevel", strokeMiterlimit: "4" }} />
  </g>
  )}

const StackItem = ({
  x = 0,
  y = 0,
  width = 100,
  height = 25,
  bgcolor = color("#000000"),
  eventCaption = "",
  timestampCaption = ""
}) =>
{
  return (
  <g
    transform={"translate(" + x + "," + y + ")"} >
   <rect
      style={{ fill: bgcolor.toString(), fillOpacity:"0.60" }}
      width={width + "px"}
      height={height + "px"}
      x="0"
      y="0" />
    <Text
      fgcolor={color("#ececec")} 
      x={width * 0.05}
      y={height * 0.35}
      size={height * 0.25}
      text={eventCaption}
      center={false} />
    <Text
      fgcolor={color("#cccccc")}
      x={width * 0.12}
      y={height * 0.75}
      size={height * 0.20}
      text={timestampCaption}
      center={false} />
    <CheckIcon x={width * 0.8} y={height * 0.2} size={height * 0.6} />
  </g>
  )
}

const StackedTargetChart = ({
  width = 350,
  target = 5,
  overflowAreaCount = 0,
  overflowStyle = "hidden",
  categoryCaption = "",
  timePeriodCaption = "",
  timestampFormat = "dddd, h:MM tt",
  stackItems = [],
  bgColor = "#88aa00",
  stackItemColor = "#346f4d",
  style = {}
}) => {
  const stackItemWidth = width * 0.90
  const stackItemHeight = stackItemWidth * 0.25
  const targetBoxWidth = width
  const categoryTextBoxHeight = stackItemHeight * 0.6
  const timePeriodTextBoxHeight = stackItemHeight * 0.5
  const stackItemTopMargin = 0.1 * stackItemHeight
  const targetBoxHeight = (stackItemHeight + stackItemTopMargin) * target + categoryTextBoxHeight + stackItemTopMargin
  const overflowAreaHeight = (stackItemHeight + stackItemTopMargin) * overflowAreaCount
  const height = targetBoxHeight + timePeriodTextBoxHeight + overflowAreaHeight
  const colors = { bgColor: color(bgColor), stackItemColor: color(stackItemColor) }
  const gradientId = shortid.generate()
  for (var i=0;i<stackItems.length;i++) {
    if (!stackItems[i]["id"]) stackItems[i]["id"] = shortid.generate()
  }
  return (
<svg
   xmlns="http://www.w3.org/2000/svg"
   version="1.1"
   viewBox={ "0 0 " + width + " " + height }
   style={{ height: height + "px", ...style, width: width + "px", overflow: overflowStyle }}>
  <defs>
    <linearGradient
       gradientUnits="userSpaceOnUse"
       x1={width/2}
       y1={-height * 0.1}
       x2={width/2}
       y2={height * 1.2}
       id={gradientId}>
    <stop
       offset="0"
       style={{ stopColor: colors.bgColor.toString(), stopOpacity: "1" }} />
    <stop
       offset="1"
       style={{ stopColor: "#444", stopOpacity: "0" }} /> />
    </linearGradient>
  </defs>
  <g
     style={{ fontStyle: "normal", fontWeight: "normal", fontFamily: "sans-serif", writingMode: "lr-tb" }} >
    <rect
       style={{ fill: "url(#" + gradientId + ")", fillOpacity: "1" }}
       y={overflowAreaHeight + "px"}
       x={(width - targetBoxWidth) * 0.5 + "px"}
       height={targetBoxHeight + "px"}
       width={targetBoxWidth + "px"} />
    <Text
      fgcolor={color("#b3b3b3")} 
      x={width * 0.5}
      y={overflowAreaHeight + stackItemHeight * 2.2}
      size={width * 0.4}
      text={target}
      center={true} /> 
    <Text
      fgcolor={colors.stackItemColor.darker(1)} 
      x={width * 0.5}
      y={overflowAreaHeight + targetBoxHeight - (categoryTextBoxHeight * 0.3)}
      size={categoryTextBoxHeight * 0.45}
      text={categoryCaption}
      center={true} />
    <Text
      fgcolor={color("#4d4d4d")} 
      x={width * 0.5}
      y={height - (timePeriodTextBoxHeight * 0.4)}
      size={timePeriodTextBoxHeight * 0.4}
      text={timePeriodCaption}
      center={true} /> 
    {stackItems.map((item,index) => (
      <StackItem 
         x={ (width - stackItemWidth) * 0.5 }
         y={ overflowAreaHeight + targetBoxHeight - categoryTextBoxHeight - (index + 1) * stackItemHeight - index * stackItemTopMargin } 
         key={ item.id }
         width={ stackItemWidth }
         height={ stackItemHeight }
         bgcolor={ colors.stackItemColor }
         eventCaption={ item.event }
         timestampCaption={ dateFormat(item.timestamp, timestampFormat) } />
    ))}
  </g>
</svg>
)}

export default StackedTargetChart