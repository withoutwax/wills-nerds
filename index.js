window.onload = function () {

    var backgroundImages = ["images/chris.jpg", "images/will-lee.png", "images/dayoung-lee.jpg", "images/bo.jpg", "images/sunah.jpeg", "images/ann.jpeg",
                            "images/misaki.jpg", "images/junghoe.jpg", "images/xue.jpeg", "images/alison.jpg", "images/theo.jpeg",
                            "images/goldnflow.png", "images/sun.jpg", "images/jungyun.jpeg", "images/will.jpg", "images/invely.jpg",
                            "images/cat.jpg", "images/tisha.jpg", "images/raven.jpeg"];

                            /*
                             * 00 - Chris Zhu
                             * 03 - Boyoung Nam - Bo
                             * 14 - Will Kim
                             * 15 - Invely
                             */

    CMRotate.init('rotate-div', 200, 300, 350, 19, 600, backgroundImages, clickFn);

    /**
     * init
     *
     * div - DIV element ID
     * tw - Plane Width
     * th - Plane Height
     * ty - Y position distance from bottom
     * gap - Gap between each Plane
     * radius - Circle Radius
     * bg - Background image Array
     * fn - Mouse click function on each Plane
     */

    // no = position on the array.
    function clickFn(no) {
    }
}
