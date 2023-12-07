(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
})(jQuery);

//dohvatanje putanje
var currentPath = window.location.pathname;

//nav item
const navItems = [
    { text: 'Home', link: 'index.html' },
    { text: 'About Us', link: 'about.html' },
    { text: 'Our Features', link: 'feature.html' },
    { text: 'Classes', link: 'class.html' },
    { text: 'Blog', link: 'blog.html' },
    { text: 'Contact', link: 'contact.html' },
    { text: 'O autoru', link: 'oAutoru.html' }
];

function generateNavItem(item) {
    var ispis = "";
    var activLink;
    if(currentPath == "/fitpro/index.html"){
        activLink = item.link;
    }else{
        activLink = "/fitpro/pages/" + item.link;
    }
    // console.log("aktivni link: " + activLink);
    // console.log("trenutna putanja: " + currentPath);
    if(currentPath==activLink){
        var activClass= "active";
    }
    if(currentPath == "/fitpro/" || currentPath == "/fitpro/index.html"){
        if(activLink == "/fitpro/index.html"){
            ispis = `<a href="/fitpro/${item.link}" class="nav-item nav-link ${activClass}">${item.text}</a>`;
        }else{
            ispis =`<a href="/fitpro/pages/${item.link}" class="nav-item nav-link ${activClass}">${item.text}</a>`;
        }
    }
    else{
        if(activLink == "/fitpro/index.html"){
            ispis = `<a href="../../${item.link}" class="nav-item nav-link ${activClass}">${item.text}</a>`; 
            console.log(activClass);   
        }else{
            ispis = `<a href="/fitpro/pages/${item.link}" class="nav-item nav-link ${activClass}">${item.text}</a>`;
        }
        
    }
    return ispis;
    
}
const dynamicNavbar = document.getElementById('navItem');
dynamicNavbar.innerHTML = navItems.map(generateNavItem).join('');

const carouselItems = [
    {
        imgSrc: "style/img/carousel-1.jpg",
        title: "Best Gym In Town",
        subtitle: "Gym & Fitness Center",
        buttonHref: "#",
        buttonText: "Join Us Now"
    },
    {
        imgSrc: "style/img/carousel-2.jpg",
        title: "Get Body In Shape",
        subtitle: "Gym & Fitness Center",
        buttonHref: "#",
        buttonText: "Join Us Now"
    }
];
function generateCarouselItemHTML(item, index) {
    const isActive = index === 0 ? "active" : "";
    return `
        <div class="carousel-item ${isActive}">
            <img class="w-100" src="${item.imgSrc}" alt="Image">
            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <h3 class="text-primary text-capitalize m-0">${item.subtitle}</h3>
                <h2 class="display-2 m-0 mt-2 mt-md-4 text-white font-weight-bold text-capitalize">${item.title}</h2>
                <a href="${item.buttonHref}"class="btn btn-lg btn-outline-light mt-3 mt-md-5 py-md-3 px-md-5">${item.buttonText}</a>
            </div>
        </div>
    `;
}
if(currentPath == "/fitpro/" || currentPath == "/fitpro/index.html"){
    try{
        const carouselInner = document.getElementById("carouselInner");
        carouselInner.innerHTML = carouselItems.map(generateCarouselItemHTML).join('');
    }catch(msg){
    }
}

// Dodavanje dogadjaja svim a tagovima ciji roditelj ima klasu gymClass
function addEvent(){
    var gymClass = document.getElementsByClassName("gymClass");
    console.log(gymClass);

    for (var i = 0; i < gymClass.length; i++) {
        var aTags = gymClass[i].getElementsByTagName("a");

        for (var j = 0; j < aTags.length; j++) {
            aTags[j].addEventListener("click", JoinUs);
        }
    }

}
function JoinUs() {
    if(currentPath == "/fitpro/index.html" || currentPath == "/fitpro/"){
        window.location.href = '/fitpro/pages/contact.html';
    }
    else{
        window.location.href = 'contact.html';
    }
}
if(currentPath == "/fitpro/index.html" || currentPath == "/fitpro/pages/class.html"){
        addEvent();
}




var text = [
    "Welcome to Our Fitness Center",
    "Welcome to our award-winning fitness center, where experienced trainers with over 10 years of expertise make your transformation a reality. With a certified GYM center, we ensure top-notch standards and expertise. Join a community that blends experience with innovation and achieve outstanding results under the guidance of an award-winning team of professionals."
];

function prikazi() {
    var msg = document.getElementById("msg");
    var overlay = document.getElementById("overlay");

    msg.classList.add('msg');
    overlay.classList.add('overlay');

    var btnClose = document.createElement("button");
    btnClose.classList.add("btnClose");
    btnClose.innerText = "X";
    btnClose.addEventListener('click', ukloni);
    
    msg.appendChild(btnClose);

     var naslovElement = document.createElement("h2");
     var tekstElement = document.createElement("p");
     naslovElement.textContent = text[0];
     tekstElement.textContent = text[1];
     msg.appendChild(naslovElement);
     msg.appendChild(tekstElement);
}

function ukloni() {
    var msg = document.getElementById("msg");
    var overlay = document.getElementById("overlay");

    msg.classList.remove('msg');
    overlay.classList.remove('overlay');

    var btnClose = document.querySelector("#msg button");
    if (btnClose) {
        btnClose.remove();
    }
    var naslovElement = document.querySelector("#msg h2");
    if (naslovElement) {
        naslovElement.remove();
    }
    var tekstElement = document.querySelector("#msg p");
    if (tekstElement) {
        tekstElement.remove();
    }
}

//Vitalni trio

var vitalniTrio = [
    {
        title: "Progression",
        text: "A journey of growth and resilience, Progression is personalized training for continuous improvement.",
        icon: "flaticon-training"
    },
    {
        title: "Workout",
        text: "Dynamic sessions guided by experts—a purposeful exploration of your physical potential.",
        icon: "flaticon-weightlifting"
    },
    {
        title: "Nutrition",
        text: "Fuel your well-being with expert-guided, transformative nutrition choices.",
        icon: "flaticon-treadmill"
    }
];
var ispis = "";
var bgClass;
var iconColor;

for (var i = 0; i < vitalniTrio.length; i++) {
    bgClass = i % 2 === 0 ? "bg-secondary" : "bg-primary";
    iconColor = i % 2 === 0 ? "text-primary" : "text-secondary ";

    ispis +=
        `<div class="col-lg-4 p-0">
            <div class="d-flex align-items-center ${bgClass} text-white px-5" style="min-height: 300px;">
                <i class="${vitalniTrio[i].icon} display-3 ${iconColor} mr-3"></i>
                <div class="">
                    <h2 class="text-white mb-3">${vitalniTrio[i].title}</h2>
                    <p>${vitalniTrio[i].text}</p>
                </div>
            </div>
        </div>`;
}
if(currentPath == "/fitpro/" || currentPath == "/fitpro/index.html" || currentPath == "/fitpro/pages/about.html"){
    try{
        document.getElementById("vitalityTrio").innerHTML = ispis;
    }catch(msg){
    }
}
//Benefiti
var benefitsData = [
    {
        imageSrc: "feature-1.jpg",
        iconClass: "flaticon-barbell",
        title: "Videos Instruction",
        description: "Boost your workout with our quick and effective Video Instructions. Expert tips and routines on demand. Your shortcut to a fitter you!"
    },
    {
        imageSrc: "feature-2.jpg",
        iconClass: "flaticon-training",
        title: "Training Calendar",
        description: "Stay on track with our Training Calendar. Streamline your fitness journey with a personalized schedule that keeps you motivated and progressing towards your goals."
    },
    {
        imageSrc: "feature-3.jpg",
        iconClass: "flaticon-trends",
        title: "Free Apps & WiFi",
        description: "Enjoy seamless workouts with Free Apps & WiFi. Stay connected and enhance your fitness experience with complimentary apps and high-speed WiFi - all part of our commitment to making your gym sessions convenient and enjoyable."
    },
    {
        imageSrc: "feature-4.jpg",
        iconClass: "flaticon-support",
        title: "Community Support",
        description: "Experience the power of Community Support. Join a fitness family that cheers you on, shares success stories, and fosters a sense of belonging. Together, we're more than a gym; we're a supportive community dedicated to your wellness journey."
    }
];
ispis = "";

for (var i = 0; i < benefitsData.length; i++) {
    var path = currentPath === "/fitpro/index.html" ? "/style/img/" : "../style/img/";
    var benefit = benefitsData[i];

    ispis+=
        `<div class="col-md-6 mb-5">
            <div class="row align-items-center">
                <div class="col-sm-5">
                    <img class="img-fluid mb-3 mb-sm-0" src="${path}${benefit.imageSrc}" alt="Image">
                    <i class="${benefit.iconClass}"></i>
                </div>
                <div class="col-sm-7">
                    <h4 class="font-weight-bold">${benefit.title}</h4>
                    <p>${benefit.description}</p>
                </div>
            </div>
        </div>`;
}
if(currentPath == "/fitpro/" || currentPath == "/fitpro/index.html" || currentPath == "/fitpro/pages/feature.html"){
    try{
        document.getElementById("benefitBlok").innerHTML += ispis;
    }catch(msg){
        console.log(msg.message);
    }
}

// provera email
var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
try{
    var btnEmailCheck = document.getElementById("btnEmailCheck");
    btnEmailCheck.addEventListener('click', function(){
        var email = document.getElementById("emailNewsletter").value;

        var isValid = emailRegex.test(email);
        
        var porukaElement = document.getElementById("msgEmailCheck");
        if (isValid) {
            porukaElement.innerHTML = "E-mail address is valid!";
            porukaElement.style.color = "green";
        } else {
            porukaElement.innerHTML = "Please enter a valid e-mail address!";
            porukaElement.style.color = "white";
        }
    });

}
catch(msg){
}

//BMI

try{
    document.getElementById("btnBMI").addEventListener('click', function(){
       
            var weight = parseFloat(document.getElementById('weight').value);
            var height = parseFloat(document.getElementById('height').value);
            var age = parseInt(document.getElementById('age').value);
            var gender = document.getElementById('gender').value;
            var resultText = document.getElementById('result');

            if (isNaN(weight) || isNaN(height) || isNaN(age)) {
                resultText.innerText = "Please enter valid numeric values for weight, height, and age.";
                return;
            }
            var bmi = weight / ((height / 100) * (height / 100));

            if (gender == "") {
                resultText.innerText = "Please select a gender.";
                return;
            }
            resultText = "Your BMI is: " + bmi.toFixed(2) + "<br>";
            resultText += "Category: " + getBMICategory(bmi, gender, age);

            document.getElementById('result').innerHTML = resultText;
        

        function getBMICategory(bmi, gender) {
            if(gender == "male"){

                if (bmi < 20.7) {
                    return "Underweight";
                } else if (bmi >= 20.7 && bmi < 27.3) {
                    return "Normal weight";
                } else if (bmi >= 27 && bmi < 33) {
                    return "Overweight";
                } else{
                    return "Obese";
                }
            }
            else if(gender =="female"){

                if (bmi < 18.5) {
                    return "Underweight";
                } else if (bmi >= 18.5 && bmi < 24.9) {
                    return "Normal weight";
                } else if (bmi >= 25 && bmi < 29.9) {
                    return "Overweight";
                } else {
                    return "Obese";
                }
            }
           
        }
    });
}
catch(msg){
}

//clients
var clients = [
    {
        clientName: "John Doe",
        profession: "Fitness Trainer",
        imageSrc: "../style/img/testimonial-1.jpg",
        testimonialText: "I've been working with John Doe for the past year, and the results have been amazing. His personalized training programs and nutritional advice have transformed my fitness journey."
    },
    {
        clientName: "Alice Smith",
        profession: "Yoga Instructor",
        imageSrc: "../style/img/testimonial-2.jpg",
        testimonialText: "Alice is an exceptional yoga instructor. Her calming presence and expertise have helped me achieve a deeper connection with my mind and body through yoga practice."
    },
    {
        clientName: "Bob Johnson",
        profession: "Personal Trainer",
        imageSrc: "../style/img/testimonial-3.jpg",
        testimonialText: "Bob is not just a trainer; he's a motivator. His dynamic workouts and constant support have kept me on track towards my fitness goals. Highly recommended!"
    }
];
ispis = "";

for(let i = 0; i<clients.length;i++){
        var ac = i==0? "active" : "";
        ispis+= `
            <div class="carousel-item ${ac}">
                <div class="d-flex align-items-center mb-4 text-white">
                    <img width="80" height="80" class="rounded-circle bg-dark p-2" src="${clients[i].imageSrc}"
                        alt="${clients[i].clientName}">
                    <div class="pl-4">
                        <h4 class="text-primary">${clients[i].clientName}</h4>
                        <p class="m-0">${clients[i].profession}</p>
                    </div>
                </div>
                <div class="testimonial-text position-relative border bg-dark text-white mb-5 p-4">
                ${clients[i].testimonialText}
                </div>
            </div>`;
}

    
if(currentPath == "/fitpro/pages/feature.html"){
        try{
            document.getElementById("clients").innerHTML = ispis;
        }catch(msg){
            console.log(msg.message);
        }
}

// treneri
const trainersData = [
    { name: "John Doe", imgSrc: "team-1.jpg", socialMedia: ["twitter", "facebook", "linkedin", "instagram"] },
    { name: "Jane Smith", imgSrc: "team-2.jpg", socialMedia: ["twitter", "facebook", "linkedin", "instagram"] },
    { name: "David Johnson", imgSrc: "team-3.jpg", socialMedia: ["twitter", "facebook", "linkedin", "instagram"] },
    { name: "Emily Davis", imgSrc: "team-4.jpg", socialMedia: ["twitter", "facebook", "linkedin", "instagram"] },
];

function generateTrainerCard(trainer) {
    const socialMediaButtons = trainer.socialMedia.map(platform => `
      <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style="width: 40px; height: 40px;" href="#"><i class="fab fa-${platform}"></i></a>
    `).join('');

    var imgPath = currentPath == "/fitpro/pages/about.html" ? "../style/img/":"style/img/"

    return `
      <div class="col-lg-3 col-md-6 mb-5">
        <div class="card border-0 bg-secondary text-center text-white">
          <img class="card-img-top" src="${imgPath}${trainer.imgSrc}" alt="">
          <div class="card-social d-flex align-items-center justify-content-center">
            ${socialMediaButtons}
          </div>
          <div class="card-body bg-secondary">
            <h4 class="card-title text-primary">${trainer.name}</h4>
            <p class="card-text">Trainer</p>
          </div>
        </div>
      </div>
    `;
}
if(currentPath == "/fitpro/pages/about.html" || currentPath == "/fitpro/" || currentPath == "/fitpro/index.html"){
    const trainersRow = document.getElementById('trainersRow');
    trainersData.forEach(trainer => {
        trainersRow.innerHTML += generateTrainerCard(trainer);
    }); 
}

// Blog
const blogPosts = [
    {
      imgSrc: "blog-1.jpg",
      date: "Nov 10, 2022",
      title: "Unlocking Your Full Potential: A Guide to Effective Gym Workouts",
      author: "John Smith",
      category: "Fitness",
      comments: 25,
      content: "Achieving your fitness goals requires a well-structured workout routine. In this guide, we explore effective gym workouts to unlock your full potential and enhance your fitness journey...",
    },
    {
      imgSrc: "blog-6.jpg",
      date: "Oct 25, 2022",
      title: "Fueling Your Performance: Nutrition Tips for Gym Enthusiasts",
      author: "Jane Doe",
      category: "Nutrition",
      comments: 18,
      content: "Proper nutrition is essential for maximizing your performance in the gym. Learn about the key nutrients your body needs and discover nutrition tips to fuel your workouts and promote recovery...",
    },
    {
      imgSrc: "blog-2.jpg",
      date: "Sep 15, 2022",
      title: "Building Strength and Endurance: The Importance of Resistance Training",
      author: "David Johnson",
      category: "Strength Training",
      comments: 30,
      content: "Resistance training is a fundamental component of any effective fitness program. Explore the importance of building strength and endurance through various resistance training exercises and techniques...",
    },
    {
      imgSrc: "blog-3.jpg",
      date: "Aug 30, 2022",
      title: "Mastering the Basics: Essential Gym Exercises for Beginners",
      author: "Emily Davis",
      category: "Beginner's Guide",
      comments: 22,
      content: "Embarking on your fitness journey? Mastering the basics is key. Discover essential gym exercises for beginners to lay a solid foundation for your workout routine and achieve long-term success...",
    },
    {
      imgSrc: "blog-4.jpg",
      date: "Jul 18, 2022",
      title: "Mind-Body Connection: The Role of Mental Health in Fitness",
      author: "Michael Thompson",
      category: "Mental Health",
      comments: 28,
      content: "Achieving your fitness goals goes beyond physical exertion. Explore the mind-body connection and understand the crucial role of mental health in maintaining a consistent and fulfilling fitness routine...",
    },
    {
      imgSrc: "blog-5.jpg",
      date: "Jun 5, 2022",
      title: "Effective Cardio Workouts: Spice Up Your Routine and Boost Endurance",
      author: "Sophia Turner",
      category: "Cardiovascular Health",
      comments: 15,
      content: "Cardiovascular exercise is essential for overall health and fitness. Spice up your routine with effective cardio workouts that not only burn calories but also boost endurance and cardiovascular health...",
    },
    {
      imgSrc: "blog-7.jpg",
      date: "May 20, 2022",
      title: "Finding Motivation: Overcoming Challenges on Your Fitness Journey",
      author: "Chris Anderson",
      category: "Motivation",
      comments: 32,
      content: "Staying motivated is a common challenge on the fitness journey. Discover practical tips for finding motivation, overcoming obstacles, and maintaining a positive mindset to achieve your fitness goals...",
    },
    {
      imgSrc: "blog-8.jpg",
      date: "Apr 12, 2022",
      title: "Rest and Recovery: The Unsung Heroes of Fitness Progress",
      author: "Emma Harris",
      category: "Recovery",
      comments: 19,
      content: "Rest and recovery are crucial components of any successful fitness program. Learn about the importance of proper rest, recovery techniques, and how they contribute to sustained progress and overall well-being...",
    },
    {
      imgSrc: "blog-9.jpg",
      date: "Mar 28, 2022",
      title: "Setting SMART Fitness Goals: A Roadmap to Success",
      author: "William Turner",
      category: "Goal Setting",
      comments: 23,
      content: "Achieving fitness success begins with setting SMART goals. Understand the principles of SMART goal setting and create a roadmap to success on your fitness journey...",
    },
    {
      imgSrc: "blog-10.jpg",
      date: "Feb 15, 2022",
      title: "The Role of Technology in Modern Fitness: Trends and Innovations",
      author: "Olivia White",
      category: "Fitness Tech",
      comments: 27,
      content: "Technology has transformed the fitness landscape. Explore the latest trends and innovations in fitness tech, from wearable devices to virtual workouts, and their impact on modern fitness routines...",
    },
    {
      imgSrc: "blog-11.jpg",
      date: "Jan 30, 2022",
      title: "Balancing Act: Integrating Strength and Flexibility Training",
      author: "Daniel Evans",
      category: "Flexibility",
      comments: 21,
      content: "Achieving a well-rounded fitness routine involves balancing strength and flexibility. Discover the benefits of integrating flexibility training into your workouts and achieving a harmonious balance in your fitness regimen...",
    },
    {
      imgSrc: "blog-12.jpg",
      date: "Dec 20, 2021",
      title: "HIIT: Maximizing Results with High-Intensity Interval Training",
      author: "Ava Rodriguez",
      category: "HIIT",
      comments: 14,
      content: "High-Intensity Interval Training (HIIT) is a popular and efficient workout method. Learn about the benefits of HIIT, effective HIIT routines, and how to maximize your fitness results with this dynamic training approach...",
    },
  ];

// Funkcija za generisanje HTML koda za svaki blog post
function generateBlogPostHTML(post, index) {
    return `
        <div class="col-lg-6 mb-5 blog-item" data-index="${index}">
            <img class="img-fluid mb-4" src="../style/img/${post.imgSrc}" alt="Image">
            <div class="d-flex align-items-center mb-4">
                <div class="d-flex flex-column align-items-center justify-content-center rounded-circle bg-primary text-white" style="width: 80px; height: 80px;">
                    <small>${post.date}</small>
                </div>
                <div class="pl-3">
                    <h3 class="font-weight-bold">${post.title}</h3>
                    <div class="d-flex">
                        <small class="mr-2 text-muted"><i class="fa fa-user"></i> ${post.author}</small>
                        <small class="mr-2 text-muted"><i class="fa fa-folder"></i> ${post.category}</small>
                        <small class="mr-2 text-muted"><i class="fa fa-comments"></i> ${post.comments} Comments</small>
                    </div>
                </div>
            </div>
            <p>${post.content}</p>

            <a class="btn btn-outline-primary mt-2 px-3 blog-read-more" href="#">Read More <i class="fa fa-angle-right"></i></a>

        </div>
    `;
}
// Funkcija za generisanje HTML koda za paginaciju
function generatePaginationHTML(currentPage, totalPages) {
        let paginationHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const isActive = i === currentPage ? 'active' : '';
            paginationHTML += `<li class="page-item ${isActive}"><a class="page-link" href="#" data-page="${i}">${i}</a></li>`;
        }

        return paginationHTML;
    }

// Funkcija za prikaz blogova na određenoj stranici
function displayBlogPosts(page) {
        const postsPerPage = 4;
        const startIndex = (page - 1) * postsPerPage;
        const endIndex = startIndex + postsPerPage;
    
        const visiblePosts = blogPosts.slice(startIndex, endIndex);
    
        const blogContainer = document.getElementById('blogContainer');
        const paginationContainer = document.getElementById('pagination');
    
        blogContainer.innerHTML = visiblePosts.map((post, index) => generateBlogPostHTML(post, startIndex + index)).join('');
        paginationContainer.innerHTML = generatePaginationHTML(page, Math.ceil(blogPosts.length / postsPerPage));
}

if(currentPath == "/fitpro/pages/blog.html"){
    // Inicijalni prikaz blogova na prvoj stranici
    displayBlogPosts(1);

    // Dodajte event listenera za promjenu stranice klikom na pagination
    document.getElementById('pagination').addEventListener('click', function (event) {
    event.preventDefault();
    if (event.target.tagName === 'A') {
        const page = parseInt(event.target.dataset.page);
        displayBlogPosts(page);
    }
    });

    // Dodajte event listener za "Read More" dugme koje će prikazati modal
    blogContainer.addEventListener('click', function (event) {
        event.preventDefault();
        if (event.target.tagName === 'A' && event.target.classList.contains('btn-outline-primary')) {
            const postIndex = event.target.closest('.blog-item').getAttribute('data-index');
            const post = blogPosts[postIndex];
            showBlogModal(post);
        }
    });
}

// Funkcija za prikaz detaljnog prikaza blog posta u modalnom prozoru
function showBlogModal(post) {
    const modalBody = document.getElementById('blogModalBody');

    modalBody.innerHTML = `
        <img class="img-fluid mb-4" style="width:50%" src="../style/img/${post.imgSrc}" alt="Image">
        <h3 class="font-weight-bold">${post.title}</h3>
        <div class="d-flex">
        
            <small class="mr-2 text-muted"><i class="fa fa-user"></i> ${post.author}</small>
            <small class="mr-2 text-muted"><i class="fa fa-folder"></i> ${post.category}</small>
            <small class="mr-2 text-muted"><i class="fa fa-comments"></i> ${post.comments} Comments</small>
        </div>
        <p>${post.content}</p>
    `;

    $('#blogModal').modal('show');
}
//Footer
//social network

var drustveneMreze = [
    { id: 1, link: "https://twitter.com/", nazivKlase: "fa-twitter" },
    { id: 2, link: "https://www.facebook.com", nazivKlase: "fa-facebook-f" },
    { id: 3, link: "https://rs.linkedin.com/", nazivKlase: "fa-linkedin-in" },
    { id: 4, link: "https://www.instagram.com", nazivKlase: "fa-instagram" },
  ];
ispis = "";

drustveneMreze.forEach(d =>{
    ispis += `<a target="_blank" class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style="width: 40px; height: 40px;" href="${d.link}"><i class="fab ${d.nazivKlase}"></i></a>
    `;
});
document.getElementById('contactSocial').innerHTML = ispis;

//Cookie Banner
var cookieAccepted = localStorage.getItem("cookieAccepted");

// Funkcija za prikazivanje obaveštenja o kolačićima
function showCookieBanner() {
    var cookieBanner = document.getElementById("cookieBanner");
    cookieBanner.style.display = "block";
}

// Funkcija za prihvatanje kolačića
function acceptCookies() {
    localStorage.setItem("cookieAccepted", true);
    hideCookieBanner();
}

// Funkcija za sakrivanje obaveštenja o kolačićima
function hideCookieBanner() {
    var cookieBanner = document.getElementById("cookieBanner");
    cookieBanner.style.display = "none";
}

// Funkcija za praznjenje LS i prikazivanje novog obaveštenja
function clearLocalStorageAndShowBanner() {
    localStorage.clear();
    showCookieBanner();
}
document.getElementById("acpCookies").addEventListener('click', acceptCookies);
// Ako korisnik nije prihvatio kolačiće, prikaži obaveštenje
if (!cookieAccepted) {
    document.addEventListener("DOMContentLoaded", function() {
        setTimeout(function() {
            showCookieBanner();
        }, 1000);
    });


} else {
    hideCookieBanner();
}
setInterval(clearLocalStorageAndShowBanner, 900000);

//Trenutno vreme
document.addEventListener("DOMContentLoaded", function() {
    var timeElement = document.getElementById("time");
    var isTimeVisible = false;

    window.addEventListener("scroll", function() {
        if (window.scrollY > 100 && !isTimeVisible) {
            timeElement.style.display = "block";
            isTimeVisible = true;
        } else if (window.scrollY <= 100 && isTimeVisible) {
            timeElement.style.display = "none";
            isTimeVisible = false;
        }
    });

    updateTime();
    setInterval(updateTime, 1000); 
});

function updateTime() {
    var timeElement = document.getElementById("time");
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // Dodajemo nulu ispred jednocifrenih sati, minuta i sekundi
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    var timeString = hours + ":" + minutes + ":" + seconds;
    timeElement.textContent = timeString;
}

function validateForm() {
    var message = document.getElementById("message").value;

    if (message.trim() === "") {
        document.getElementById("messageError").style.display = "block";
    } else {
        document.getElementById("messageError").style.display = "none";
        $("#contactForm")[0].reset();
    }
}

if(currentPath == '/fitpro/pages/oAutoru.html'){
    document.getElementById("btnSendEmail").addEventListener("click", validateForm);
}
// kontakt v
var nameRegex = /^[A-Z][a-z]{2,9}$/;
var messageRegex = /^[\s\S]{10,}$/;
var subjectRegex = /^[a-zA-Z0-9]{3,}$/;

function validateContactForm() {
    validateField("name", nameRegex, "Please enter a valid name, eg. John");
    validateField("email", emailRegex, "Please enter a valid email, eg. john5@gmail.com");
    validateField("message", messageRegex, "Please enter a valid message.");
    validateField("subject", subjectRegex, "Please enter a valid subject.");
    validateMemberStatus();
    validateConsent(); 

    if (
        $("#nameMsg").text() === "" &&
        $("#emailMsg").text() === "" &&
        $("#messageMsg").text() === "" &&
        $("#subjectMsg").text() === "" &&
        $("#memberStatusMsg").text() === "" &&
        $("#consentMsg").text() === ""
    ) {
        $("#kontakt")[0].reset();
        $("#succesMSG").html(messageSuccess());
    } else {
        $("#succesMSG").html("");
    }
}

function validateField(id, regex, msg) {
    var inp = $("#" + id).val();
    var messageElement = $("#" + id + "Msg");
    
    if (!regex.test(inp) || inp === "") {
        messageElement.text(msg);
    } else {
        messageElement.text('');
    }
}
function validateMemberStatus() {
    var memberStatusYes = $("#memberYes");
    var memberStatusNo = $("#memberNo");
    var memberStatusMsg = $("#memberStatusMsg");

    if (!memberStatusYes.is(":checked") && !memberStatusNo.is(":checked")) {
        memberStatusMsg.text('Please select your membership status.');
    } else {
        memberStatusMsg.text('');
    }
}
function validateConsent() {
    var consentCheckbox = $("#consent");
    var consentMsg = $("#consentMsg");

    if (!consentCheckbox.is(":checked")) {
        consentMsg.text('You must agree to the terms and conditions.');
    } else {
        consentMsg.text('');
    }
}
if (currentPath === "/fitpro/pages/contact.html") {
    $("#btnKontakt").click(validateContactForm);
    $("#name").keyup(function() {
        validateField("name", nameRegex, "Please enter a valid name, eg. John");
    });
    $("#email").keyup(function() {
        validateField("email", emailRegex, "Please enter a valid email, eg. john5@gmail.com");
    });
    $("#message").keyup(function() {
        validateField("message", messageRegex, "Please enter a valid message.");
    });
    $("#subject").keyup(function() {
        validateField("subject", subjectRegex, "Please enter a valid subject.");
    });
    $("input[name='memberStatus']").change(validateMemberStatus);
    $("#consent").change(validateConsent);
}
function messageSuccess(){
    return `
    <div class="control-group">
        <h4 class="text-success">Message successfully sent!</h4>
    </div>`;
}