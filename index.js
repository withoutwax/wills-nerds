window.onload = function () {

    var backgroundImages = ["images/chris.jpg", "images/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpg", "images/img5.jpg",
                            "images/img6.jpg", "images/img7.jpg", "images/img8.jpg", "images/img9.jpg", "images/img10.jpg",
                            "images/img11.jpg", "images/img12.jpg", "images/img13.jpg", "images/img14.jpg", "images/img15.jpg",
                            "images/img16.jpg", "images/img17.jpg", "images/img18.jpg"];

    CMRotate.init('rotate-div', 200, 300, 100, 19, 400, backgroundImages, clickFn);

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
        if (no == 0) {
            // Chris Zhu
            window.open('https://www.chriszhu-design.com','_blank');
        }
        // alert('click no - ' + (no + 1));
    }
}
