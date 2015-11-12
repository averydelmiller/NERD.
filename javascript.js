 var className;
        var imageTop;
        var imageLeft;
        var imageBottom;
        var imageRight;

        function HeadImage(className) {

            /* Setting the global instance of classname to the given parameter*/
            this.className = className;

            /* Calculating the borders of the image */
            this.imageLeft = $("." + this.className + ">.head-image").offset().left;
            this.imageRight = this.imageLeft + $("." + this.className + ">.head-image").width();
            this.imageTop = $("." + this.className + ">.head-image").offset().top;
            this.imageBottom = this.imageTop + $("." + this.className + ">.head-image").height();

            /* This function determines where the mouse pointer is relative to the image
             * and displays the correct image accordingly. */
            this.setImageDirection = function() {
                $("." + this.className + ">.head-image").css("z-index", "0");
                if (mouseX >= this.imageLeft && mouseX <= this.imageRight && mouseY <= this.imageTop) {
                    $("." + this.className + ">.up").css("z-index", "1");
                } else if (mouseX < this.imageLeft && mouseY < this.imageTop) {
                    $("." + this.className + ">.up-left").css("z-index", "1");
                } else if (mouseX <= this.imageLeft && mouseY >= this.imageTop && mouseY <= this.imageBottom) {
                    $("." + this.className + ">.left").css("z-index", "1");
                } else if (mouseX < this.imageLeft && mouseY > this.imageBottom) {
                    $("." + this.className + ">.down-left").css("z-index", "1");
                } else if (mouseX >= this.imageLeft && mouseX <= this.imageRight && mouseY >= this.imageBottom) {
                    $("." + this.className + ">.down").css("z-index", "1");
                } else if (mouseX > this.imageRight && mouseY > this.imageBottom) {
                    $("." + this.className + ">.down-right").css("z-index", "1");
                } else if (mouseX >= this.imageRight && mouseY >= this.imageTop && mouseY <= this.imageBottom) {
                    $("." + this.className + ">.right").css("z-index", "1");
                } else if (mouseX > this.imageRight && mouseY < this.imageTop) {
                    $("." + this.className + ">.up-right").css("z-index", "1");
                } else {
                    $("." + this.className + ">.front").css("z-index", "1");
                    $(".text-holder").css("display", "none");
                    $("." + this.className + ".text-holder").css("display", "block");
                }
            };
        } < /script>


        < div class = "image-holder one" >
            < img class = "head-image up"
        src = "http://www.averymiller.org/file/f6b8a7b34d283f89cd08124dfe1f101c" / >
            < img class = "head-image up-left"
        src = "http://www.averymiller.org/file/246941e1e627dbb1c5a3a6bee75b7731" / >
            < img class = "head-image left"
        src = "http://www.averymiller.org/file/0bd8aa30b8e5e7807fa35c73f6870476" / >
            < img class = "head-image down-left"
        src = "http://www.averymiller.org/file/601820c33e2e51b347621188eca9bbad" / >
            < img class = "head-image down"
        src = "http://www.averymiller.org/file/a5ee85e04c3ff86958f104ee5f828ac9" / >
            < img class = "head-image down-right"
        src = "http://www.averymiller.org/file/dfdcf9906c92444cb04d0a128bd09394" / >
            < img class = "head-image right"
        src = "http://www.averymiller.org/file/a624661d804b2b1b1e31494186163c15" / >
            < img class = "head-image up-right"
        src = "http://www.averymiller.org/file/3ac4150e690c41ec324c17d628df5144" / >
            < img class = "head-image front"
        src = "http://www.averymiller.org/file/7c6bd0321ce8c3c483b3706e4045b9ec" / >
            < /div>

        < script type = "text/javascript" >


            /* Declaring the global variables */
            var mouseX;
        var mouseY;
        var imageOne;

        /* Calling the initialization function */
        $(init);

        /* The images need to re-initialize on load and on resize, or else the areas
         * where each image is displayed will be wrong. */
        $(window).load(init);
        $(window).resize(init);

        /* Setting the mousemove event caller */
        $(window).mousemove(getMousePosition);

        /* This function is called on document ready, on load and on resize
         * and initiallizes all the images */
        function init() {

            /* Instanciate the mouse position variables */
            mouseX = 0;
            mouseY = 0;

            /* Instanciate a HeadImage class for every image */
            imageOne = new HeadImage("one");
        }

        /* This function is called on mouse move and gets the mouse position.
         * It also calls the HeadImage function to display the correct image*/
        function getMousePosition(event) {

            /* Setting the mouse position variables */
            mouseX = event.pageX;
            mouseY = event.pageY;

            /*Calling the setImageDirection function of the HeadImage class
             * to display the correct image*/
            imageOne.setImageDirection();
        }
