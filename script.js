let array = [{name:"Anna Johnson" , title:"Web Developer" , review:
"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos deleniti sed in magnam quidem, harum qui alias asperiores officia architecto!"} ,
    {name:"Quintin Tarantino" , title:"Director" , review:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos deleniti sed in magnam quidem, harum qui alias asperiores officia architecto!"} ,
    {name:"Lionel Messi" , title:"Footballer" , review:"Que Mira Bobo!"} ,
    {name:"Cristiano Ronaldo" , title:"CR7" , review:"Siuuuuuuuuuu!!!!"} 
];

let image_path = "./images/";
let images_array = ["anna.jpg" , "quintin.jpg" , "messi.jpg" , "ronaldo.jpg"];


//initial states

let person_image = document.querySelector("img")
let person_name = document.querySelector(".person-name");
let person_title = document.querySelector(".person-title");
let review = document.querySelector(".reviews");

let ctr = 0;//initially
let n = array.length;

function changeState(idx){
    console.log("function called");
    person_image.setAttribute("src" , image_path + images_array[ctr]);
    person_name.innerText = array[ctr].name;
    person_title.innerText = array[ctr].title;
    review.innerText = array[ctr].review;
    
}

//initial condition
changeState(ctr);

//buttons

const prev_button = document.querySelector(".prev");
const next_button = document.querySelector(".next");
const random_button = document.querySelector(".random");

next_button.addEventListener("click" , (e) => {
    console.log("next clicked");
    ctr = (ctr + 1) % n;

    changeState(ctr);
});

prev_button.addEventListener("click" , (e) =>{
    console.log("prev clicked");
    ctr = (ctr - 1 + n) % n;

    changeState(ctr);
});

random_button.addEventListener("click" , (e) =>{
    console.log("random clicked");

    let r = ctr;

    while(r == ctr){
        r = Math.floor(Math.random() * 4);
    }

    ctr = r;
    console.log(r);

    changeState(ctr);

    //ctr = r;
});


