$(document).ready(function () {
    $("#currentDate").text(moment().format('dddd, MMMM Do'));
       var currentTime = moment().format('H');
       

    function timeUpdate() {
        console.log(currentTime)
        console.log($('textarea[data-attribute="9"]'))

if (currentTime < $('textarea[data-attribute="9"]').attr('data-attribute')){
    $('textarea[data-attribute="9"]').addClass("pastTime");
} else if (currentTime > $('textarea[data-attribute="9"]').attr('data-attribute')){
    console.log((currentTime > $('textarea[data-attribute="9"]').attr('data-attribute')))

    $('textarea[data-attribute="9"]').addClass("futureTime");
} else {
    $('textarea[data-attribute="9"]').addClass("presentTime");
    console.log((currentTime > $('textarea[data-attribute="9"]').attr('data-attribute')))

}

if (currentTime < $('textarea[data-attribute="10"]').attr('data-attribute')){
    $('textarea[data-attribute="10"]').addClass("pastTime");
} else if (currentTime > $('textarea[data-attribute="10"]').attr('data-attribute')){
    $('textarea[data-attribute="10"]').addClass("futureTime");
} else {
    $('textarea[data-attribute="10"]').addClass("presentTime");
}

if (currentTime < $('textarea[data-attribute="11"]').attr('data-attribute')){
    $('textarea[data-attribute="11"]').addClass("pastTime");
} else if (currentTime > $('textarea[data-attribute="11"]').attr('data-attribute')){
    $('textarea[data-attribute="11"]').addClass("futureTime");
} else {
    $('textarea[data-attribute="11"]').addClass("presentTime");
}

if (currentTime < $('textarea[data-attribute="12"]').attr('data-attribute')){
    $('textarea[data-attribute="12"]').addClass("pastTime");
} else if (currentTime > $('textarea[data-attribute="12"]').attr('data-attribute')){
    $('textarea[data-attribute="12"]').addClass("futureTime");
} else {
    $('textarea[data-attribute="12"]').addClass("presentTime");
}

if (currentTime < $('textarea[data-attribute="13"]').attr('data-attribute')){
    $('textarea[data-attribute="13"]').addClass("pastTime");
} else if (currentTime > $('textarea[data-attribute="13"]').attr('data-attribute')){
    $('textarea[data-attribute="13"]').addClass("futureTime");
} else {
    $('textarea[data-attribute="13"]').addClass("presentTime");
}

if (currentTime < $('textarea[data-attribute="14"]').attr('data-attribute')){
    $('textarea[data-attribute="14"]').addClass("pastTime");
} else if (currentTime > $('textarea[data-attribute="14"]').attr('data-attribute')){
    $('textarea[data-attribute="14"]').addClass("futureTime");
} else {
    $('textarea[data-attribute="14"]').addClass("presentTime");
}

if (currentTime < $('textarea[data-attribute="15"]').attr('data-attribute')){
    $('textarea[data-attribute="15"]').addClass("pastTime");
} else if (currentTime > $('textarea[data-attribute="15"]').attr('data-attribute')){
    $('textarea[data-attribute="15"]').addClass("futureTime");
} else {
    $('textarea[data-attribute="15"]').addClass("presentTime");
}

if (currentTime < $('textarea[data-attribute="16"]').attr('data-attribute')){
    $('textarea[data-attribute="16"]').addClass("pastTime");
} else if (currentTime > $('textarea[data-attribute="16"]').attr('data-attribute')){
    $('textarea[data-attribute="16"]').addClass("futureTime");
} else {
    $('textarea[data-attribute="16"]').addClass("presentTime");
}

if (currentTime < $('textarea[data-attribute="17"]').attr('data-attribute')){
    $('textarea[data-attribute="17"]').addClass("pastTime");
} else if (currentTime > $('textarea[data-attribute="17"]').attr('data-attribute')){
    $('textarea[data-attribute="17"]').addClass("futureTime");
} else {
    $('textarea[data-attribute="17"]').addClass("presentTime");
}




        // $(".time").each(function () {
        //     $("textarea").addClass("pastTime")
        // })
        // $(".time").each(function () {
        //     $("textarea").addClass("presentTime") 
        // })
        // $(".time").each(function () {
        //     $("textarea").addClass("futureTime")
        // })


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
    // $(document).ready(function () {
    //     var saveButton = $('#button');
    //     $(button).click(function () {
    //         $(this).save();

    //     })
    // })
})
