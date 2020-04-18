const ID = 'id';
const STOPS = 'stops'
const MIN_FLIGHT_TIME = 'minflightTime';
const MERGE = 'merge';

const data = [
	{
		"id": 118748738,
		"flightTime": 12002,
		"stops": false
	},
	{
		"id": 118805291,
		"flightTime": 17307,
		"stops": false
	},
	{
		"id": 118801891,
		"flightTime": 15466,
		"stops": false
	},
	{
		"id": 118793510,
		"flightTime": 5971,
		"stops": true
	},
	{
		"id": 118793313,
		"flightTime": 5865,
		"stops": false
	},
	{
		"id": 118793313,
		"flightTime": 2302,
		"stops": false
	},
	{
		"id": 118793510,
		"flightTime": 6578,
		"stops": false
	},
	{
		"id": 118764182,
		"flightTime": 5726,
		"stops": false
	},
	{
		"id": 118793510,
		"flightTime": 6557,
		"stops": false
	},
	{
		"id": 118793510,
		"flightTime": 4103,
		"stops": false
	},
	{
		"id": 118793510,
		"flightTime": 16396,
		"stops": false
	},
	{
		"id": 118748738,
		"flightTime": 4203,
		"stops": false
	},
	{
		"id": 118805291,
		"flightTime": 24946,
		"stops": false
	},
	{
		"id": 118805291,
		"flightTime": 13112,
		"stops": false
	},
	{
		"id": 118748738,
		"flightTime": 3062,
		"stops": false
	},
	{
		"id": 118805291,
		"flightTime": 11299,
		"stops": false
	},
	{
		"id": 118805291,
		"flightTime": 3227,
		"stops": false
	},
	{
		"id": 118748738,
		"flightTime": 5113,
		"stops": true
	},
	{
		"id": 118805291,
		"flightTime": 7186,
		"stops": false
	},
	{
		"id": 118748738,
		"flightTime": 10609,
		"stops": true
	},
	{
		"id": 118748738,
		"flightTime": 3638,
		"stops": false
	},
	{
		"id": 118805291,
		"flightTime": 5801,
		"stops": false
	},
	{
		"id": 118801891,
		"flightTime": 2033206,
		"stops": false
	},
	{
		"id": 118805291,
		"flightTime": 5749,
		"stops": false
	},
	{
		"id": 116687134,
		"flightTime": 4466,
		"stops": false
	},
	{
		"id": 32124569,
		"flightTime": 124994,
		"stops": false
	},
	{
		"id": 116687134,
		"flightTime": 4466,
		"stops": false
	},
	{
		"id": 32124569,
		"flightTime": 2355,
		"stops": true
	},
	{
		"id": 32124569,
		"flightTime": 124097,
		"stops": false
	},
	{
		"id": 116687134,
		"flightTime": 4466,
		"stops": false
	},
	{
		"id": 32124569,
		"flightTime": 13493,
		"stops": true
	},
	{
		"id": 32124569,
		"flightTime": 112959,
		"stops": false
	},
	{
		"id": 116687134,
		"flightTime": 4466,
		"stops": false
	},
	{
		"id": 32124569,
		"flightTime": 126453,
		"stops": true
	},
	{
		"id": 116687134,
		"flightTime": 4466,
		"stops": false
	},
	{
		"id": 32124569,
		"flightTime": 6273,
		"stops": true
	},
	{
		"id": 32124569,
		"flightTime": 120179,
		"stops": false
	},
	{
		"id": 116687134,
		"flightTime": 4466,
		"stops": false
	},
	{
		"id": 32124569,
		"flightTime": 126453,
		"stops": true
	},
	{
		"id": 116687134,
		"flightTime": 4466,
		"stops": true
	},
	{
		"id": 98491839,
		"flightTime": 5048,
		"stops": true
	},
	{
		"id": 118357426,
		"flightTime": 7221,
		"stops": false
	},
	{
		"id": 111091415,
		"flightTime": 8682,
		"stops": false
	},
	{
		"id": 116676275,
		"flightTime": 9050,
		"stops": false
	},
	{
		"id": 72504949,
		"flightTime": 6001,
		"stops": false
	},
	{
		"id": 115286030,
		"flightTime": 7416,
		"stops": false
	},
	{
		"id": 111091415,
		"flightTime": 6600,
		"stops": false
	},
	{
		"id": 97604034,
		"flightTime": 6275,
		"stops": false
	},
	{
		"id": 97610160,
		"flightTime": 10820,
		"stops": false
	},
	{
		"id": 116676275,
		"flightTime": 5833,
		"stops": false
	}
];

const selectUsingId = (id) => {

	return dataSet => dataSet.filter(item => item.id === id);

}

const selectUsingStops = (stop) => {

	return dataSet => dataSet.filter(item => item.stops === stop);

}

const selectUsingMinFlightTime = (minFlightTime) => {

	return dataSet => dataSet.filter(item => item.flightTime >= minFlightTime);

}

const merge = (dataSet) => {

	const clonedData = [...dataSet];

	return clonedData.reduce((acc, obj) => {
		let index = acc.findIndex(item => item.id === obj.id);
		if (index >= 0) {
			acc[index].flightTime = acc[index].flightTime + obj.flightTime;
			acc[index].stops = acc[index].stops && obj.stops;

			let temp = acc[index];
			acc.splice(index, 1);
			acc.push(temp);
		} else {
			acc.push(obj);
		}
		return acc;
	}, []);


}

const _pipe = (...fns) => (arg) => fns.reduce((prev, fn) => fn(prev), arg);
const pipeWith = (arg, ...fns) => _pipe(...fns)(arg);
const isEmpty = obj => Object.keys(obj).length === 0 && obj.constructor === Object;

const select = (dataSet, options) => {

	const clonedData = [...dataSet];

	if(isEmpty(options)) {
		return clonedData;
	} else {
		const functionArguments = [];
		const argumentArray = Object.entries(options);
		argumentArray.forEach(([key, value]) => {
			switch (key) {
				case ID:
					functionArguments.push(selectUsingId(value));
					break;
				case STOPS:
					functionArguments.push(selectUsingStops(value));
					break;
				case MIN_FLIGHT_TIME:
					functionArguments.push(selectUsingMinFlightTime(value));
					break;
				case MERGE:
					if(value) {
						functionArguments.push(merge)
					}
					break;
				default:
			}
		})
		return pipeWith(clonedData, ...functionArguments);
	}

}

const process = (form) => {
	const inputs = Object.values(form).reduce((obj,field) => {
		if(field.name) {
			if(field.value === 'true' || field.value === 'false') {
				obj[field.name] = field.value === 'true';
			} else {
				obj[field.name] = field.name === 'id' || field.name === 'flightTime' ? parseInt(field.value) : field.value;
			}
		}
		return obj;
	}, {});
	const { submit, ...rest } = inputs;
	createTable(select(data, rest));
	return false;
}
