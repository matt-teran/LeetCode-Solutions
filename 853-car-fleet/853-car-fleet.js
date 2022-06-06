/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */

// target = 20
// position = [5, 1, 3]
// speed = [5, 6, 10]

var carFleet = function(target, position, speed) {
    if (position.length === 1) return 1;
    let cars = position.map((car, i) => {
        return {pos: car, speed: speed[i], time: (target - car) / speed[i]}
    })
    cars.sort((a, b) => b.pos - a.pos);
    let fleets = [];
    let i = 1;
    let fleet = [cars[0]];
    while (i < cars.length){
        if (cars[i].time > fleet[fleet.length - 1].time) {
            fleets.push(fleet);
            fleet = [];
        }
        if (fleet.length) cars[i].time = fleet[fleet.length - 1].time;
        fleet.push(cars[i]);
        i++;
    }
    if (fleet.length) fleets.push(fleet);
    console.log(cars);
    return fleets.length;
};

// tgt = 12
// pos = [10,8,0, 5,3]
// spd = [2, 4,1, 1,3]
// cars =[{pos: 0, spd: 1, time: 12},
//.       {pos: 3, spd: 3, time: 3},
//        {pos: 5, spd: 1, time: 7},
//        {pos: 8, spd: 4, time: 1},
//        {pos: 10, spd: 2,time: 1}];
// fleets = []

// tgt = 100
// {pos: 4, spd: 1, time: 96}
// {pos: 2, spd: 2, time: 49}
// {pos: 0, spd: 4, time: 24}