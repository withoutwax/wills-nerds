// Will code ===================================
// Updates the name when the top card is assigned

function Nerds(nerd) {
    if (nerd.plane.style.zIndex > 90) {
        let name = "Nerd No. " + nerd.id;
        let description = "Waiting for another Nerd to join...";
        let url = "#";
        switch (nerd.id) {
            case 0:
                name = "Chris Zhu";
                description = "Birds, Biking, and Baking";
                url = "https://www.chriszhu-design.com";
                break;
            case 3:
                name = "Bo";
                description = "I am a UX/Product designer who believes in solving problems with practical, simple, and aesthetically beautiful design.";
                url = "https://www.linkedin.com/in/boyoung-nam-80bb33144/";
                break;
            case 5:
                name = "Ann Woo";
                description = "I am a graphic design student, food lover, dog lover, and a little bit weird.";
                url = "https://www.annjiminwoo.com";
                break;
            case 10:
                name = "Thophles Williams";
                description = "I'm a senior in the VisCom and Art & Tech department currently studying to be a UI/UX designer and/or developer. I work at BMW as a UI Design co-op";
                url = "https://thophles.com";
                break;
            case 14:
                name = "Will Kim";
                description = "Art Student to Software Engineer 💻";
                url = "https://withoutwax.me";
                break;
            case 15:
                name = "Invely🍰💕";
                description = "💍";
                url = "https://www.instagram.com/little__rhoda/";
                break;
        default:
        }
        document.getElementById("Nerd").innerHTML = name;
        document.getElementById("Nerd-description").innerHTML = description;
        document.getElementById("Nerd-url").setAttribute('href', url);
    }
}
