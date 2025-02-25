const fv = (a,b) => {
	console.log(a)
	console.log(b)
	console.log(a.eletkor)
	console.log(b.eletkor)
	if(a.eletkor > b.eletkor){
	  console.log(a.name)
	}
  }
  const persList = [{
   eletkor: 16,
   name: 'József'
  },
  {
   eletkor: 16,
   name: 'Ferenc'
  }]
  fv(persList, persList[1])