const titles= [
    'MERN Developer',
    'Full Stack Developer',
    'React js Expert',
    'Web Developer'
]
const role = document.getElementById("role")
 let  isDeleting = false
 let titleIndex = 0
 let textIndex = 0


 
function titleText (){
   current =  titles[titleIndex]
 if(isDeleting){
   role.textContent = current.substring(0 , textIndex-1 )
   textIndex--
 }
 else{
  role.textContent = current.substring(0 , textIndex + 1)
  textIndex++
 }
  let delay = isDeleting ? 40 : 80;

 if(isDeleting && textIndex === 0 ){
    delay= 200
    isDeleting= false
   titleIndex = (titleIndex + 1) % titles.length
   
 }
 if(!isDeleting && textIndex === current.length ){
    delay= 2000
    isDeleting= true
   

 }
 setTimeout(titleText , delay)
}






















titleText()

