function renderBio() {
    $('.bio').html(`
    About me:

    I'm working to become a software engineer once I graduate from the Web Developer Track at Bloc. I love programming just as much 
    as I love dogs. For the record, I really love dogs. Solving technical problems and displaying my (what I believe to be) unparalleled 
    creativity, led me to pursue programming. This field makes me feel like I'm doing my part in contributing to the ever-so developing 
    world of technology. I've worked in IT for over seven years, so you can trust my problem solving will be efficient. I'm also a 
    minimalist, so you can expect my code to be prettier than the next. And just like every other basketball player that isn't good enough
    to play professionally, I have a competitiveness that trickles down to everything else I do in life, which makes me a valuable asset 
    to any team I'm a part of.
    `);
}

function renderProjectDescription1() {
    $('.description').html(`
    
    QUIZ APP: This application quizzes the user on basic information about the National Basketball Association. It is comprised of five questions of 
    what I believe an individual should know, before calling themselves a competent NBA fan. Are you a real fan? 

    `);
}

function renderProjectScreenshot1() {
    $('.screenshot').html(`
    <img class="screenshot" src="https://user-images.githubusercontent.com/22334563/66241810-6ce48a80-e6ef-11e9-90eb-716023bd3d97.PNG">
    `);
} 

function renderProfilePic() {
    $('.pic').html(`
    <img class="pic" src="https://user-images.githubusercontent.com/22334563/66890389-8b8f2f00-efd5-11e9-9f91-5a0f9d1502a1.jpg">
    `);
}

function renderFooterLinks() {
    $('.email').html(`connorwong93@gmail.com`);
    $('.linkedIn').html(`<a href="https://www.linkedin.com/in/connor-wong-46b157a0/" target="_blank">LinkedIn</a>`);
    $('.github').html(`<a href="https://github.com/connorhw" target="_blank">GitHub</a>`);
}

function renderPage() {
    renderBio();
    renderProjectDescription1();
    renderProjectScreenshot1();
    renderProfilePic();
    renderFooterLinks();
}

$(renderPage);