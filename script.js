function renderBio() {
    $('.bio').html(`
    I'm working to become a software engineer once I graduate from the Web Developer Track at Bloc. I love programming just as much 
    as I love dogs. For the record, I really love dogs. Solving technical problems and displaying my (what I believe to be) unparalleled 
    creativity, led me to pursue programming. This field makes me feel like I'm doing my part in contributing to the ever-so developing 
    world of technology. I've worked in IT for over seven years, so you can trust my problem solving will be efficient. I'm also a 
    minimalist, so you can expect my code to be prettier than the next. And just like every other basketball player that isn't good enough
    to play professionally, I have a competitiveness that trickles down to everything else I do in life, which makes me a valuable asset 
    for any team I'm a part of.
    `);
}

function renderPage() {
    renderBio();
}

$(renderPage);