window.onload = function () {

    var backgroundImages = ["images/chris.jpg", "images/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpg", "images/img5.jpg",
                            "images/img6.jpg", "images/img7.jpg", "images/img8.jpg", "images/img9.jpg", "images/img10.jpg",
                            "images/img11.jpg", "images/img12.jpg", "images/img13.jpg", "images/img14.jpg", "images/img15.jpg",
                            "images/img16.jpg", "images/img17.jpg", "images/img18.jpg"];

    CMRotate.init('rotate-div', 200, 300, 100, 12, 600, backgroundImages, clickFn);

    // no = position on the array.
    function clickFn(no) {
        if (no == 0) {
            // Chris Zhu
            window.open('https://www.chriszhu-design.com','_blank');
        }
        // alert('click no - ' + (no + 1));
    }
}