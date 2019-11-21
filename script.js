$(document).ready(function () {
    $("#currentDate").text(moment().format('dddd, MMMM Do'));

    function timeUpdate() {
        $(".time").each(function () {
            $("textarea").addClass("pastTime")
        })
        $(".time").each(function () {
            $("textarea").addClass("presentTime") 
        })
        $(".time").each(function () {
            $("textarea").addClass("futureTime")
        })


    }
    timeUpdate()


    var past = moment().isBefore();
    var present = moment().isBetween();
    var future = moment().isAfter();

    //Determine how to get the isAfter to work???
    function colorTimeBox(hour, html) {
        var isBefore = moment(moment().format("hA"), "hA").isBefore(hour, "hA")
        var isAfter = moment(moment().format("hA"), "hA").isAfter(hour, "hA")
        //var isAfter = moment().isAfter(hour,"hour")

        var isBetween = moment(moment().format("hA"), "hA").isSame(hour, "hA")

        if (isAfter) {
            html.style.backgroundColor = "grey"
        }

        if (isBefore) {
            html.style.backgroundColor = "green"

        }

        if (isBetween) {
            html.style.backgroundColor = "red"

        }


    }

    var timeDivs = $(".time")

    for (var i = 0; i < timeDivs.length; i++) {
        var time = $(timeDivs[i]).children("p").text()
        console.log(time)
        var textarea = $(timeDivs[i]).children("textarea")
        colorTimeBox(time, textarea[0])
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
