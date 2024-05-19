import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import rd3 from "react-d3-library";
import "./BarGraph.css";
const RD3Component = rd3.Component;


const Chart = ({ graphData }) => {
  const createBarChart = () => {
    const dateArray = graphData.map((d) => {
      return new Date(d[0]);
    });
    const gdpArray = graphData.map((d) => d[1]);
    const yMax = d3.max(gdpArray);
    const yMin = d3.min(gdpArray);
    const xMax = d3.max(dateArray);
    const xMin = d3.min(dateArray);
    const barWidth = 2.5;
    const height = 400;
    const width = graphData.length * barWidth;
    const padding = 80;
    // Declare the x (horizontal position) scale.
    const xScale = d3
      .scaleUtc()
      .domain([xMin, xMax])
      .range([padding, width - padding]);
    // Declare the y (vertical position) scale.
    const yScale = d3
      .scaleLinear()
      .domain([0, yMax])
      .range([height - padding, padding]);
    // Add tooltip
    // Add chart to div
    const svg = d3
      .select("#Chart")
      .append("svg")
      .attr("width", width)
      .attr("height", height);
    let tooltip = d3
      .select("#Chart")
      .append("div")
      .attr("id", "tooltip")
      .style("opacity", 0);
    // Add bars
    svg.selectAll("rect")
      .data(graphData)
      .enter()
      .append("rect")
      .attr("data-gdp", (d) => d[1])
      .attr("data-date", (d) => d[0])
      .attr("width", barWidth)
      .attr("height", (d) => height - yScale(d[1]) - padding)
      .attr("x", (d, i) => (((width - (padding * 2)) / graphData.length) * i) + padding)
      .attr("y", (d, i) => yScale(d[1]))
      .attr("class", "bar")
      .on("mousemove", (event, d) => {
        tooltip.style("opacity", 0.9);
        tooltip
          .html(d[0] + `<br /> GDP: ` + d[1])
          .attr("data-date", d[0])
          .style("left", event.pageX + "px")
          .style("top", event.pageY - 60 + "px")
      })
      .on("mouseout", () => {
        tooltip.style("opacity", 0);
      });
    // 
    svg.append("text")
      .attr("font-size", 16)
      .attr("transform", "rotate(-90)")
        .attr("x", "-250")
      .attr("y", "30")
      .attr("fill", "black")
      .text("GDP");
    
    // Add the x-axis.
    svg.append("g")
      .attr("id", "x-axis")
      .attr("transform", `translate(0,${height - padding})`)
      .call(d3.axisBottom(xScale));
    // Add the y-axis.
    svg.append("g")
      .attr("id", "y-axis")
      .attr("transform", `translate(${padding},0)`)
      .call(d3.axisLeft(yScale));
  }
  useEffect(() => {
    if (graphData != null) {
      createBarChart();
    }
  }, [graphData]);
  return (
    <div id="Chart">
      <h3 id="title">Bar Chart</h3>
    </div>
  );
}

function BarGraph() {
  const [graphData, setGraphData] = useState(null);
  const getGraphData = async () => {
    try {
      const response = await fetch("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json");
      const result = await response.json();
      console.log(result);
      setGraphData(result.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getGraphData();
  }, []);
  return (
    <div id="App">
      <Chart graphData={graphData} />
    </div>
  );
}

export default class D3Viwer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {d3: ""}
  }
  componentDidMount() {
    this.setState({d3: BarGraph});
  }
  render() {
    return (
      <div>
        <RD3Component data={this.state.d3} />
      </div>
    )
  }
}