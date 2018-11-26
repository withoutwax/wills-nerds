window.onload = function () {

    var backgroundImages = ["images/chris.jpg", "images/img1.jpg", "images/dayoung.jpg", "images/bo.jpg", "images/img4.jpg", "images/ann.jpeg",
                            "images/img6.jpg", "images/img7.jpg", "images/xue.jpeg", "images/img9.jpg", "images/theo.jpeg",
                            "images/goldnflow.png", "images/sun.jpg", "images/img13.jpg", "images/will.jpg", "images/invely.jpg",
                            "images/img16.jpg", "images/img17.jpg", "images/raven.jpeg"];

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
