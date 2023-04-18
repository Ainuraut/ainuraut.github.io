
const svgWidth = 500;
const svgHeight = 500;

const data = Array.from({ length: 100 }, () => ({
  x: Math.random() * svgWidth,
  y: Math.random() * svgHeight,
}));

const svg = d3.select("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

svg.selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
  .attr("cx", (d) => d.x)
  .attr("cy", (d) => d.y)
  .attr("r", 5)
  .attr("fill", "steelblue");

  d3.csv("titanic.csv").then((data) => {
  console.log(data);
});

const ageData = d3.group(data, (d) => d.Age);

const pie = d3.pie().value((d) => d[1].length);

const arc = d3.arc().innerRadius(0).outerRadius(150);

const colors = d3.schemeCategory10;

const svg = d3.select("svg").attr("width", 500).attr("height", 500);

const g = svg.append("g").attr("transform", "translate(250,250)");

const slices = g.selectAll("path")
  .data(pie(ageData))
  .enter()
  .append("path")
  .attr("d", arc)
  .attr("fill", (d, i) => colors[i % colors.length]);

g.selectAll("text")
  .data(pie(ageData))
  .enter()
  .append("text")
  .text((d) => d.data[0])
  .attr("transform", (d) => `translate(${arc.centroid(d)})`)
  .attr("text-anchor", "middle")
  .attr("font-size", "12px");








/*const script = document.createElement('script');
script.src = 'https://d3js.org/d3.v6.min.js';
document.head.appendChild(script);

const svg = d3.select('body')
  .append('svg')
  .attr('width', 500)
  .attr('height', 500);

const points = d3.range(100).map(() => [Math.random() * 500, Math.random() * 500]);

svg.selectAll('circle')
  .data(points)
  .join('circle')
  .attr('cx', d => d[0])
  .attr('cy', d => d[1])
  .attr('r', 5)
  .attr('fill', 'green');

d3.csv('titanic.csv').then(data => {
  // Step 5: Generate a pie chart for age distribution for passengers
  const ageGroups = ['0-20', '20-40', '40-60', '60-80', '80+'];
  const ages = data.map(d => parseInt(d.Age)).filter(d => !isNaN(d));
  const ageCounts = ageGroups.map(group => ages.filter(age => {
    const [min, max] = group.split('-').map(Number);
    return age >= min && age < max;
  }).length);

  const pie = d3.pie()(ageCounts);
  const color = d3.scaleOrdinal().domain(ageGroups).range(d3.schemeCategory10);

  const pieSvg = d3.select('body')
    .append('svg')
    .attr('width', 500)
    .attr('height', 500);

  const arcGenerator = d3.arc()
    .innerRadius(0)
    .outerRadius(200);

  const arcs = pieSvg.selectAll('path')
    .data(pie)
    .join('path')
    .attr('d', arcGenerator)
    .attr('fill', d => color(d.data))
    .attr('transform', 'translate(250, 250)');

  const legend = pieSvg.selectAll('.legend')
    .data(ageGroups)
    .join('g')
    .attr('class', 'legend')
    .attr('transform', (d, i) => `translate(${i * 50 - 100}, -200)`);

  legend.append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', 20)
    .attr('height', 20)
    .attr('fill', color);

  legend.append('text')
    .attr('x', 30)
    .attr('y', 15)
    .text(d => d);
});

const svgWidth = 500;
const svgHeight = 500;

const data = Array.from({ length: 100 }, () => ({
  x: Math.random() * svgWidth,
  y: Math.random() * svgHeight,
}));*/