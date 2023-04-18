
const url = "https://data.cityofnewyork.us/resource/uvpi-gqnh.json";
const main = document.querySelector('main')
const mapleArea = document.querySelector('.maple-area')
const oakArea = document.querySelector('.oak-area')
const lindenArea = document.querySelector('.linden-area')
const honeyArea = document.querySelector('.honey-area')
const planetArea = document.querySelector('.planet-area')
const otherArea = document.querySelector('.other-area')

let localData = []

const parseData = (data) => {
	// Set up variables for the counts
	let americanLinden = 0 // These are `let` because they will change
	let redMaple = 0
	let honeyLocust = 0
	let willowOak = 0
	let londonPlanet = 0


	// Go through each item in the object
	data.forEach(tree => {
        const treePoint = document.createElement('div')
        treePoint.classList.add('tree-data')
       otherArea.appendChild(treePoint)

		if (tree.spc_common == 'American linden') americanLinden = americanLinden+1,lindenArea.appendChild(treePoint),treePoint.classList.add('linden')
        else if (tree.spc_common == 'red maple') redMaple = redMaple+1,mapleArea.appendChild(treePoint), treePoint.classList.add('maple')
        else if (tree.spc_common == 'honeylocust') honeyLocust = honeyLocust+1, honeyArea.appendChild(treePoint),treePoint.classList.add('honey') 
        else if (tree.spc_common == 'willow oak') willowOak = willowOak+1, oakArea.appendChild(treePoint), treePoint.classList.add('oak')
		else if (tree.spc_common == 'London planetree') londonPlanet = londonPlanet+1, planetArea.appendChild(treePoint), treePoint.classList.add('planet')


	})

    
	console.log('linden: ' + americanLinden)
	console.log('maple: ' + redMaple)
	console.log('honey: ' + honeyLocust)
	console.log('willow: ' + willowOak)
	console.log('planetree: ' + londonPlanet)
}

// Go get the data!
fetch(url + '?$limit=300') // Appends a higher limit; the default is only 1000
	.then(response => response.json())
	.then(data => {
			localData = data // Save the data to our local variable, so we don’t have to re-request
			parseData(localData) // And parse it!
            // console.log(localData)
		})