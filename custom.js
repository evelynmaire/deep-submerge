var svg = d3.select('.container').append('svg')

var w = 1500
var h = 500

svg.attr('width', w)
.attr('height', h)

var dataset = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

var circles = svg.selectAll('circle')
.data(dataset)
.enter()
.append('circle')
.attr('class', function (i) {
	return 'index' + i
})

circles.attr('cx', function (d, i) {
	return (i * 50) + 50;
})
.attr('cy', h/2)
.attr('r', function (d) {
	return d
})