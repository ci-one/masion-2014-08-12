$('doucment').ready(function(){
    var theme_list_open = false;
    function e() {
        var e = $("#switcher").height();
        $("#aiframe").attr("height", $(window).height() - e + "px")
    }

    IS_IPAD = navigator.userAgent.match(/iPad/i) != null;
    $(window).resize(function () {
        e()
    }).resize();
    $("#theme_select").click(function () {
        if (theme_list_open == true) {
            $(".center ul li ul").hide();
            theme_list_open = false
        } else {
            $(".center ul li ul").show();
            theme_list_open = true
        }
        return false
    });
    $("#theme_list ul li a").click(function () {
        var e = $(this).attr("rel").split(",");
        $("li.purchase a").attr("href", e[1]);
        $("li.remove_frame a").attr("href", e[0]);
        $("#aiframe").attr("src", e[0]);
        $("#theme_list a#theme_select").text($(this).text());
        $(".center ul li ul").hide();
        theme_list_open = false;
        return false
    });
    $("#header-bar").hide();
    clicked = "desktop";
    var t = {desktop: "136%", tabletlandscape: 1040, tabletportrait: 788, mobilelandscape: 500, mobileportrait: 340, placebo: 0};
    jQuery(".responsive a").on("click", function () {
        var e = jQuery(this);
        for (device in t) {
            console.log(device);
            console.log(t[device]);
            if (e.hasClass(device)) {
                clicked = device;
                jQuery("#aiframe").width(t[device]);
                if (clicked == device) {
                    jQuery(".responsive a").removeClass("active");
                    e.addClass("active")
                }
            }
        }
        return false
    });
    if (IS_IPAD) {
        $("#aiframe").css("padding-bottom", "60px")
    }
});