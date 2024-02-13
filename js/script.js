const testimonials = [
{
    name: "Galih Kezra",
    job: "CEO, Fashworks",
    image: "1.jpg",
    testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus corrupti nulla ipsa molestiae id nisi quis consequuntur quas dolorem earum recusandae ut minima eaque cum explicabo perspiciatis aliquid doloremque, sed eum similique. Dolorum id, rem consequatur quis alias nihil consequuntur.",
},

{
    name: "Melvin Yord",
    job: "Developer, Techcrew",
    image: "2.jpg",   
    testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus corrupti nulla ipsa molestiae id nisi quis consequuntur quas dolorem earum recusandae ut minima eaque cum explicabo perspiciatis aliquid doloremque, sed eum similique. Dolorum id, rem consequatur quis alias nihil consequuntur.",
},

{
    name: "Arlo Rev",
    job: "UI Designer",
    image: "3.jpg",
    testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus corrupti nulla ipsa molestiae id nisi quis consequuntur quas dolorem earum recusandae ut minima eaque cum explicabo perspiciatis aliquid doloremque, sed eum similique. Dolorum id, rem consequatur quis alias nihil consequuntur.",
},

{
    name: "Branson Rowe",
    job: "CEO, Zeal Wheels",
    image: "4.jpg",
    testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus corrupti nulla ipsa molestiae id nisi quis consequuntur quas dolorem earum recusandae ut minima eaque cum explicabo perspiciatis aliquid doloremque, sed eum similique. Dolorum id, rem consequatur quis alias nihil consequuntur.",
},

{
    name: "Eric Miller",
    job: "CEO, Fashworks",
    image: "5.jpg",
    testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus corrupti nulla ipsa molestiae id nisi quis consequuntur quas dolorem earum recusandae ut minima eaque cum explicabo perspiciatis aliquid doloremque, sed eum similique. Dolorum id, rem consequatur quis alias nihil consequuntur.",
},

];

// current slide
let i = 0;
// Total slide
let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");


nextBtn.addEventListener("click", () => {
    i = (j + i + 1) % j;
    displayTestimonial();
});

prevBtn.addEventListener("click", () => {
    i = (j + i + 1) % j;
    displayTestimonial();
})


let displayTestimonial = () => {
    testimonialContainer.innerHTML = ` <p>${testimonials[i].testimonial}</p>
    <img src=${testimonials[i].image}>
    <h3>${testimonials[i].name}</h3>
    <h6>${testimonials[i].job}</h6>`;
};




window.onload = displayTestimonial;