// 1. Copy and paste your prototype in here and refactor into class syntax.
// function CuboidMaker(len, width, height) {
//     this.len = len;
//     this.width = width;
//     this.height = height;
//   }

// CuboidMaker.prototype.volume = function (){
//     return this.len * this.width * this.height};

// CuboidMaker.prototype.surfaceArea = function (){
//     return (2*((this.len * this.width) + (this.len * this.height) + (this.width * this.height)));}

// const cuboid = new CuboidMaker(4, 5, 5);

class CuboidMakerC {
    constructor(prop) {
        this.len = prop.len;
        this.height = prop.height;
        this.width = prop.width;
    }
    volume() { return this.len * this.width * this.height; };
    surfaceArea() { return (2 * ((this.len * this.width) + (this.len * this.height) + (this.width * this.height))); };
}
let cubeish = new CuboidMakerC({ len: 4, width: 5, height: 5 });
console.log(`Classes Task`);
console.log(cubeish.volume());
console.log(cubeish.surfaceArea());

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerC {
    constructor(prop) {
        super(prop)
    }
    cubeVolume() { return Math.pow(this.leng, 3) };
    cubeSurface() { return 6 * Math.pow(this.len, 2) };
}
let cube = new CubeMaker({ len: 5, height: 5, width: 5 });
console.log(`stretch task: `)
console.log(cube.volume());
console.log(cube.cubeSurface());