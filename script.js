$(document).ready(function () {
    $("#currentDate").text(moment().format('dddd, MMMM Do'));
    var currentTime = moment().format('H');


        $(".btn").click(function () {
            var event = $(this).siblings("textarea").val();
            var time = $(this).siblings("textarea").data("attribute");
            localStorage.setItem("event" + time, event);
            $(this).siblings("textarea").val("");
        })


    function timeUpdate() {
        console.log(currentTime)
        console.log($('textarea[data-attribute="9"]'))
        // change the times and <>
        if (currentTime > 9) {
            $('textarea[data-attribute="9"]').addClass("pastTime");
        } else if (currentTime < 9) {
            console.log((currentTime > $('textarea[data-attribute="9"]').attr('data-attribute')))

            $('textarea[data-attribute="9"]').addClass("futureTime");
        } else {
            $('textarea[data-attribute="9"]').addClass("presentTime");
            console.log((currentTime > $('textarea[data-attribute="9"]').attr('data-attribute')))

        }

        if (currentTime > 10) {
            $('textarea[data-attribute="10"]').addClass("pastTime");
        } else if (currentTime < 10) {
            console.log((currentTime > $('textarea[data-attribute="10"]').attr('data-attribute')))

            $('textarea[data-attribute="10"]').addClass("futureTime");
        } else {
            $('textarea[data-attribute="10"]').addClass("presentTime");
            console.log((currentTime > $('textarea[data-attribute="10"]').attr('data-attribute')))

        }
        if (currentTime > 11) {
            $('textarea[data-attribute="11"]').addClass("pastTime");
        } else if (currentTime < 11) {
            console.log((currentTime > $('textarea[data-attribute="11"]').attr('data-attribute')))

            $('textarea[data-attribute="11"]').addClass("futureTime");
        } else {
            $('textarea[data-attribute="11"]').addClass("presentTime");
            console.log((currentTime > $('textarea[data-attribute="11"]').attr('data-attribute')))
        }

        if (currentTime > 12) {
            $('textarea[data-attribute="12"]').addClass("pastTime");
        } else if (currentTime < 12) {
            console.log((currentTime > $('textarea[data-attribute="12"]').attr('data-attribute')))


            $('textarea[data-attribute="12"]').addClass("futureTime");
        } else {
            $('textarea[data-attribute="12"]').addClass("presentTime");
            console.log((currentTime > $('textarea[data-attribute="12"]').attr('data-attribute')))

        }
        if (currentTime > 13) {
            $('textarea[data-attribute="13"]').addClass("pastTime");
        } else if (currentTime < 13) {
            console.log((currentTime > $('textarea[data-attribute="13"]').attr('data-attribute')))

            $('textarea[data-attribute="13"]').addClass("futureTime");
        } else {
            $('textarea[data-attribute="13"]').addClass("presentTime");
            console.log((currentTime > $('textarea[data-attribute="13"]').attr('data-attribute')))

        }
        if (currentTime > 14) {
            $('textarea[data-attribute="14"]').addClass("pastTime");
        } else if (currentTime < 14) {
            console.log((currentTime > $('textarea[data-attribute="14"]').attr('data-attribute')))

            $('textarea[data-attribute="14"]').addClass("futureTime");
        } else {
            $('textarea[data-attribute="14"]').addClass("presentTime");
            console.log((currentTime > $('textarea[data-attribute="14"]').attr('data-attribute')))
        }


        if (currentTime > 15) {
            $('textarea[data-attribute="15"]').addClass("pastTime");
        } else if (currentTime < 15) {
            console.log((currentTime > $('textarea[data-attribute="15"]').attr('data-attribute')))

            $('textarea[data-attribute="15"]').addClass("futureTime");
        } else {
            $('textarea[data-attribute="15"]').addClass("presentTime");
            console.log((currentTime > $('textarea[data-attribute="15"]').attr('data-attribute')))

        }

        if (currentTime > 16) {
            $('textarea[data-attribute="16"]').addClass("pastTime");
        } else if (currentTime < 16) {
            console.log((currentTime > $('textarea[data-attribute="16"]').attr('data-attribute')))

            $('textarea[data-attribute="16"]').addClass("futureTime");
        } else {
            $('textarea[data-attribute="16"]').addClass("presentTime");
            console.log((currentTime > $('textarea[data-attribute="16"]').attr('data-attribute')))

        }

        if (currentTime > 17) {
            $('textarea[data-attribute="17"]').addClass("pastTime");
        } else if (currentTime < 17) {
            console.log((currentTime > $('textarea[data-attribute="17"]').attr('data-attribute')))

            $('textarea[data-attribute="17"]').addClass("futureTime");
        } else {
            $('textarea[data-attribute="17"]').addClass("presentTime");
            console.log((currentTime > $('textarea[data-attribute="17"]').attr('data-attribute')))

        }

        if (currentTime > 18) {
            $('textarea[data-attribute="18"]').addClass("pastTime");
        } else if (currentTime < 18) {
            console.log((currentTime > $('textarea[data-attribute="18"]').attr('data-attribute')))

            $('textarea[data-attribute="18"]').addClass("futureTime");
        } else {
            $('textarea[data-attribute="18"]').addClass("presentTime");
            console.log((currentTime > $('textarea[data-attribute="18"]').attr('data-attribute')))

        }

        // document.getElementById('textarea[data-attribute="15"]').innerHTML = localStorage.getItem("event9am");



        // if (currentTime > 10 $('textarea[data-attribute="10"]').attr('data-attribute')){
        //     $('textarea[data-attribute="10"]').addClass("pastTime");
        // } else if (currentTime > $('textarea[data-attribute="10"]').attr('data-attribute')){
        //     $('textarea[data-attribute="10"]').addClass("futureTime");
        // } else {
        //     $('textarea[data-attribute="10"]').addClass("presentTime");
        // }

        // if (currentTime < $('textarea[data-attribute="11"]').attr('data-attribute')){
        //     $('textarea[data-attribute="11"]').addClass("pastTime");
        // } else if (currentTime > $('textarea[data-attribute="11"]').attr('data-attribute')){
        //     $('textarea[data-attribute="11"]').addClass("futureTime");
        // } else {
        //     $('textarea[data-attribute="11"]').addClass("presentTime");
        // }

        // if (currentTime < $('textarea[data-attribute="12"]').attr('data-attribute')){
        //     $('textarea[data-attribute="12"]').addClass("pastTime");
        // } else if (currentTime > $('textarea[data-attribute="12"]').attr('data-attribute')){
        //     $('textarea[data-attribute="12"]').addClass("futureTime");
        // } else {
        //     $('textarea[data-attribute="12"]').addClass("presentTime");
        // }

        // if (currentTime < $('textarea[data-attribute="13"]').attr('data-attribute')){
        //     $('textarea[data-attribute="13"]').addClass("pastTime");
        // } else if (currentTime > $('textarea[data-attribute="13"]').attr('data-attribute')){
        //     $('textarea[data-attribute="13"]').addClass("futureTime");
        // } else {
        //     $('textarea[data-attribute="13"]').addClass("presentTime");
        // }

        // if (currentTime < $('textarea[data-attribute="14"]').attr('data-attribute')){
        //     $('textarea[data-attribute="14"]').addClass("pastTime");
        // } else if (currentTime > $('textarea[data-attribute="14"]').attr('data-attribute')){
        //     $('textarea[data-attribute="14"]').addClass("futureTime");
        // } else {
        //     $('textarea[data-attribute="14"]').addClass("presentTime");
        // }

        // if (currentTime < $('textarea[data-attribute="15"]').attr('data-attribute')){
        //     $('textarea[data-attribute="15"]').addClass("pastTime");
        // } else if (currentTime > $('textarea[data-attribute="15"]').attr('data-attribute')){
        //     $('textarea[data-attribute="15"]').addClass("futureTime");
        // } else {
        //     $('textarea[data-attribute="15"]').addClass("presentTime");
        // }

        // if (currentTime < $('textarea[data-attribute="16"]').attr('data-attribute')){
        //     $('textarea[data-attribute="16"]').addClass("pastTime");
        // } else if (currentTime > $('textarea[data-attribute="16"]').attr('data-attribute')){
        //     $('textarea[data-attribute="16"]').addClass("futureTime");
        // } else {
        //     $('textarea[data-attribute="16"]').addClass("presentTime");
        // }

        // if (currentTime < $('textarea[data-attribute="17"]').attr('data-attribute')){
        //     $('textarea[data-attribute="17"]').addClass("pastTime");
        // } else if (currentTime > $('textarea[data-attribute="17"]').attr('data-attribute')){
        //     $('textarea[data-attribute="17"]').addClass("futureTime");
        // } else {
        //     $('textarea[data-attribute="17"]').addClass("presentTime");
        // }




        //         // $(".time").each(function () {
        //         //     $("textarea").addClass("pastTime")
        //         // })
        //         // $(".time").each(function () {
        //         //     $("textarea").addClass("presentTime") 
        //         // })
        //         // $(".time").each(function () {
        //         //     $("textarea").addClass("futureTime")
        //         // })


    }
    timeUpdate()

    var timeDivs = $(".time")

    for (var i = 0; i < timeDivs.length; i++) {
        var time = $(timeDivs[i]).children("p").text()
        // console.log(time)
        var textarea = $(timeDivs[i]).children("textarea")
        // colorTimeBox(time, textarea[0])
    }

    //past time
    //current time
    //figure out how to activate save button
})
