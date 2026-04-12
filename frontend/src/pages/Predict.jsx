const predictLead = async () => {

console.log("Predict button clicked")

try{

const res = await axios.post(
"http://127.0.0.1:5000/predict",
form
)
  

console.log(res.data)

setResult(res.data)

}catch(err){

console.log(err)

}

}
