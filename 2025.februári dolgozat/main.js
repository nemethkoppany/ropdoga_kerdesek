const persList = [{
	eletkor: 16,
	name: 'József'
},
{
	eletkor: 18,
	name: 'Ferenc'
}]
fv(persList[0], persList[1])
const fv = (a, b) => {
   if(a.eletkor > b.eletkor){
     console.log(a.name)
   }
}
