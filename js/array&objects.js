// Find method
let car = [ {
    "color": "red",
    "type": "minivan",
    "capacity": 5
  },
  {
    "color": "blue",
    "type": "wagon",
    "capacity": 4
  },
  {
    "color": "purple",
    "type": "wagon",
    "capacity": 4
  },
  {
    "color": "red",
    "type": "wagon",
    "capacity": 4
  }
];
console.log('===== Find Method =========')
console.log(car.find(cars => cars.color === 'red'));

// Filter Methd
let abc = [ {
    "color": "red",
    "type": "minivan",
    "capacity": 5
  },
  {
    "color": "blue",
    "type": "wagon",
    "capacity": 4
  },
  {
    "color": "purple",
    "type": "wagon",
    "capacity": 4
  },
  {
    "color": "red",
    "type": "wagon",
    "capacity": 4
  }
];
console.log('===== Filter Method =========')
console.log(abc.filter(abc => abc.color === 'red'));

// Map Method

let mapCar = [
    {
        "color": "red",
        "type": "minivan",
        "capacity": 2
      },
      {
        "color": "blue",
        "type": "wagon",
        "capacity": 3
      },
      {
        "color": "purple",
        "type": "wagon",
        "capacity": 4
      },
      {
        "color": "red",
        "type": "wagon",
        "capacity": 6
      },
      {
        "color": "red",
        "type": "wagon",
        "capacity": 7
      }

      
];

let size = mapCar.map( mycar => {
    if(mycar.capacity <= 3){
        return 'Small Car';
    } if(mycar.capacity <= 5){
        return 'Medium Car';
    }else {
        return 'Large Car';
    }
})
console.log('===== Map Method =========')
console.log(size);

// Foreach Method

let foreachCar = [
    {
        "color": "red",
        "type": "minivan",
        "capacity": 2
      },
      {
        "color": "blue",
        "type": "wagon",
        "capacity": 3
      },
      {
        "color": "purple",
        "type": "wagon",
        "capacity": 4
      },
      {
        "color": "red",
        "type": "wagon",
        "capacity": 6
      },
      {
        "color": "red",
        "type": "wagon",
        "capacity": 7
      }

      
];

foreachCar.forEach( (value) => {
    console.log(value);
})

