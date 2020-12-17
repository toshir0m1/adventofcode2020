/*-------------------------*\
|          Jour 17          |
\*-------------------------*/

var grid = [], nextGrid = [];

function Cube(z, y, x) {
	this.z = z;
	this.y = y;
	this.x = x;
}

/*
grid.push(new Cube(0, -1, 0));
grid.push(new Cube(0, 0, 1));
grid.push(new Cube(0, 1, -1));
grid.push(new Cube(0, 1, 0));
grid.push(new Cube(0, 1, 1));
*/

grid.push(new Cube(0, 0, 6));
grid.push(new Cube(0, 0, 7));
grid.push(new Cube(0, -1, 0));
grid.push(new Cube(0, -1, 1));
grid.push(new Cube(0, -1, 2));
grid.push(new Cube(0, -1, 3));
grid.push(new Cube(0, -1, 5));
grid.push(new Cube(0, -2, 1));
grid.push(new Cube(0, -2, 2));
grid.push(new Cube(0, -2, 7));
grid.push(new Cube(0, -3, 1));
grid.push(new Cube(0, -3, 2));
grid.push(new Cube(0, -3, 4));
grid.push(new Cube(0, -3, 7));
grid.push(new Cube(0, -5, 1));
grid.push(new Cube(0, -5, 3));
grid.push(new Cube(0, -5, 5));
grid.push(new Cube(0, -5, 6));
grid.push(new Cube(0, -5, 7));
grid.push(new Cube(0, -6, 0));
grid.push(new Cube(0, -6, 2));
grid.push(new Cube(0, -6, 3));
grid.push(new Cube(0, -7, 0));
grid.push(new Cube(0, -7, 1));
grid.push(new Cube(0, -7, 2));
grid.push(new Cube(0, -7, 3));
grid.push(new Cube(0, -7, 5));

go(6);

console.log(grid.length);

function go(rounds) {
	for (var i = 0; i < rounds; ++i) {
		evolve();
	}
}

function evolve() {
	nextGrid = [];
	var around, candidates = [];
	for (var c of grid) {
		around = howManyActiveAround(c);
		if ((around > 1) && (around < 4)) {
			nextGrid.push(c);
		}
		candidates = candidates.concat(findCandidates(c));
	}
	for (var c of candidates) {
		if (!isActive(c.z, c.y, c.x) && (howManyActiveAround(c) == 3)) {
			nextGrid.push(c);
		}
	}
	candidates = [];
	grid = nextGrid;
}

function isActive(z, y, x) {
	for (var c of grid) {
		if ((c.x == x) && (c.y == y) && (c.z == z)) {
			return true;
		}
	}
	for (var c of nextGrid) {
		if ((c.x == x) && (c.y == y) && (c.z == z)) {
			return true;
		}
	}
	return false;
}

function findCandidates(cube) {
	var candidates = [];
	for (var z = cube.z - 1; z <= cube.z + 1; ++z) {
		for (var y = cube.y - 1; y <= cube.y + 1; ++y) {
			for (var x = cube.x - 1; x <= cube.x + 1; ++x) {
				if ((x == cube.x) && (y == cube.y) && (z == cube.z)) {
					continue;
				}
				candidates.push(new Cube(z, y, x));
			}
		}
	}
	return candidates;
}

function howManyActiveAround(center) {
	var count = 0;
	for (var c of grid) {
		if (c === center) {
			continue;
		}
		if ((Math.abs(c.x - center.x) <= 1) && (Math.abs(c.y - center.y) <= 1) && (Math.abs(c.z - center.z) <= 1)) {
			count++;
		}
	}
	return count;
}