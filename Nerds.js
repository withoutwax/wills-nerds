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
            case 1:
                name = "Will Lee";
                description = "Visual designer, Ux/Ui designer, photographer";
                url = "https://willleee.com/";
                break;
            case 2:
                name = "Da Young Lee";
                description = "Designer and Painter.";
                url = "https://leedadesignnart.myportfolio.com/";
                break;
            case 3:
                name = "Bo";
                description = "I am a UX/Product designer who believes in solving problems with practical, simple, and aesthetically beautiful design.";
                url = "https://www.linkedin.com/in/boyoung-nam-80bb33144/";
                break;
            case 4:
                name = "Sun";
                description = "I am painter who loves long walk on beach and short walk to Salmon don.";
                url = "https://sunahshin.com";
                break;
            case 5:
                name = "Ann Woo";
                description = "I am a graphic design student, food lover, dog lover, and a little bit weird.";
                url = "https://www.annjiminwoo.com";
                break;
            case 6:
                name = "Misaki";
                description = "I'm a silly person who loves studying philosophy and cultural anthropology but also love UI/UX. Two things I cannot live without are probably music and dance.";
                url = "https://www.linkedin.com/in/misakiueno/";
                break;
            case 7:
                name = "Jung";
                description = "I am a product + UIUX designer, who is designing experiences.";
                url = "https://www.jungrey.com/";
                break;
            case 8:
                name = "Xue Liu";
                description = "A visual designer and a takis lover.";
                url = "https://www.byxueliu.com";
                break;
            case 9:
                name = "Alison Kim";
                description = "I'm an interdisciplinary artist taking advantage of the freedom at SAIC. The real passion is in the gaming industry - find me at Blizzard in a couple years ^^~ To provide for my future self, I am learning everything in film to graphic design (w/ a little coding on the side)";
                url = "https://www.alisonchiyongkim.com/";
                break;
            case 10:
                name = "Thophles Williams";
                description = "I'm a senior in the VisCom and Art & Tech department currently studying to be a UI/UX designer and/or developer. I work at BMW as a UI Design co-op.";
                url = "https://thophles.com";
                break;
            case 11:
                name = "GoldNFlow";
                description = "Korean Music Producer, Sound Designer, Drummer.";
                url = "mailto:yghjklo@gmail.com";
                break;
            case 12:
                name = "Sunny";
                description = "Hi, I study political philosophy, law and.. pretend to study a bit of economics! I love old music as much as the old film camera.";
                url = "https://www.instagram.com/belleamesun/";
                break;
            case 13:
                name = "Jungyun Koh";
                description = "Hi! I am super interested in automobile. I love cars so much. I am studying interface design and 3D modeling.";
                url = "https://jungyun-koh.squarespace.com";
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
            case 16:
                name = "Cat Cao";
                description = "Catherine (Cat) Cao is a Canadian graphic designer and illustrator. She likes hiking and dogs, and is currently studying Visual Communication Design in the School of the Art Institute of Chicago.";
                url = "https://www.caocatherine.com/";
                break;
            case 17:
                name = "Tisha Auguste";
                description = "Tisha is a Senior at SAIC, studying graphic design and motion graphics. She's a part-time science nerd, aspiring polyglot, and full-time foodie.";
                url = "https://laugus.myportfolio.com/";
                break;
            case 18:
                name = "Kaw kaw kaw";
                description = "Raven is a designbird who loves people watching. Habitat: SAIC Letterpress typeshop, SAIC Seevice Bureau. You can find me in exhibition openings and design events as well.";
                url = "https://ravenmo.info/";
                break;
        default:
        }
        document.getElementById("Nerd").innerHTML = name;
        document.getElementById("Nerd-description").innerHTML = description;
        document.getElementById("Nerd-url").setAttribute('href', url);
    }
}
