/* -- About me, below -- */
function renderBio() {
    $('.bio').html(`
    I'm coding everyday and working to become a software developer. I love programming just as much 
    as I love dogs. For the record, I really love dogs. My passion for technical problem solving and my eagerness to display my 
    (what I believe to be) unparalleled creativity, led me to pursue programming. This field makes me feel like I'm doing my part in 
    contributing to the ever-so developing world of technology. I've worked in IT for over seven years, so you can trust my problem 
    solving will be efficient. I'm also a minimalist, so you can expect my code to be prettier than the next. And just like every other 
    basketball player that isn't good enough to play professionally, I have a competitiveness that trickles down to everything else I 
    do in life, which makes me a valuable asset to any team I'm a part of.

    `);
}

/* -- Project 3, below -- */
function renderProjectDescription3() {
    $('#d3').html(`
    Full-Stack - I needed a quick and easy-to-use journal, in order to keep track of all the plant-maintenance related 
    knowledge I'd been unconsciously accumulating over the years. The app is programmed with CRUD capabilities. You're able to submit, read, edit, 
    and delete entries that reside in their own naturalized SQL database.
    

    `);
}

function renderProjectScreenshot3() {
    $('.screenshot3').html(`
    <img class="screenshot" src="https://user-images.githubusercontent.com/22334563/101717430-3e89da00-3a6d-11eb-9ad5-5c8b81d22616.png">
    `);
}

/* -- Project 2, below -- */
function renderProjectDescription2() {
    $('#d2').html(`
    This application makes your life easier when you're in the market for a new laptop. It takes into account your brand of choice, 
    preferred type of hard drive, and finally the budget you're working with. Save yourself from hours of research and give yourself a starting 
    point to finding the perfect laptop that fits you.

    `);
}

function renderProjectScreenshot2() {
    $('.screenshot2').html(`
    <img class="screenshot" src="https://user-images.githubusercontent.com/22334563/101717568-890b5680-3a6d-11eb-9a9d-d9b53a7c6542.png">
    `);
}

function renderProjectDescription4() {
    $('#d4').html(`
    Full-Stack - Travel journal with authorized log-in accounts. Includes full CRUD capabilities and its own naturalized SQL database.


    `);
}

function renderProjectScreenshot4() {
    $('.screenshot4').html(`
    <img class="screenshot" src="https://user-images.githubusercontent.com/22334563/109249505-d1592b80-77b5-11eb-87d9-c96366054a41.png">
    `);
}

/* -- Project 1, below -- */
function renderProjectDescription1() {
    $('#d1').html(`
    This application quizzes the user on basic information about the National Basketball Association. It is comprised of five questions of 
    what I believe an individual should know, before calling themselves a competent NBA fan. Are you a real fan? 

    `);
}

function renderProjectScreenshot1() {
    $('.screenshot').html(`
    <img class="screenshot" src="https://user-images.githubusercontent.com/22334563/66241810-6ce48a80-e6ef-11e9-90eb-716023bd3d97.PNG">
    `);
} 

/* -- Profile pic, below -- */
function renderProfilePic() {
    $('.pic').html(`
    <img class="pic" src="https://user-images.githubusercontent.com/22334563/66890389-8b8f2f00-efd5-11e9-9f91-5a0f9d1502a1.jpg">
    `);
}

/* -- Footer, below -- */
function renderFooterLinks() {
    $('.email').html(`connorwong93@gmail.com`);
    $('.linkedIn').html(`<a href="https://www.linkedin.com/in/connor-wong-46b157a0/" target="_blank">LinkedIn</a>`);
    $('.github').html(`<a href="https://github.com/connorhw" target="_blank">GitHub</a>`);
}

function renderPage() {
    renderBio();
    renderProjectDescription4();
    renderProjectScreenshot4();
    renderProjectDescription3();
    renderProjectScreenshot3();
    renderProjectDescription2();
    renderProjectScreenshot2();
    renderProjectDescription1();
    renderProjectScreenshot1();
    renderProfilePic();
    renderFooterLinks();
}

$(renderPage);