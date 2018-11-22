window.onload = function () {

    var backgroundImages = ["images/chris.jpg", "images/img1.jpg", "images/img2.jpg", "images/bo.jpg", "images/img4.jpg", "images/img5.jpg",
                            "images/img6.jpg", "images/img7.jpg", "images/img8.jpg", "images/img9.jpg", "images/img10.jpg",
                            "images/img11.jpg", "images/img12.jpg", "images/img13.jpg", "images/will.jpg", "images/invely.jpg",
                            "images/img16.jpg", "images/img17.jpg", "images/img18.jpg"];

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
