$(function () {
    function smoothScroll() {
        // if (is_mob() || is_mac() || is_firefox()) return;
        var $window = $(window);
        if (smoothScroll_passive()) {
            window.addEventListener("wheel", smoothScroll_scrolling, { passive: false });
        } else {
            $window.on("mousewheel DOMMouseScroll", smoothScroll_scrolling);
        }
    }

    function smoothScroll_passive() {
        var supportsPassive = false;
        try {
            document.addEventListener("test", null, { get passive() { supportsPassive = true } });
        } catch (e) { }
        return supportsPassive;
    }

    function smoothScroll_scrolling(event) {
        if (!event.path) {
            event.path = new Array();
            function callParentNode(child) {
                if (child.parentNode) {
                    event.path.push(child.parentNode);
                    callParentNode(child.parentNode);
                }
                return;
            }
            event.path.push(event.target);
            callParentNode(event.target);
        }
        //스크롤이 일어나면 안되는 위치태그의 id를 넣어주세요
        var impossibility = new Array(".main_content", ".tap_menu", ".shop_menu");
        for (var i = 0; event.path.length > i; i++) {
            for (var j = 0; impossibility.length > j; j++) {
                if (event.path[i].getAttribute && event.path[i].getAttribute("id") == impossibility[j]) return;
            }
        }

        event.preventDefault();
        var $window = $(window);
        var scrollTime = 1;
        //스크롤 하면 이동하는 값
        var distance_offset = 3;
        var scrollDistance = $window.height() / distance_offset;
        var delta = 0;
        if (smoothScroll_passive()) {
            delta = event.wheelDelta / 137 || -event.originalEvent.detail / 3;
        } else {
            if (typeof event.originalEvent.deltaY != "undefined") {
                delta = -event.originalEvent.deltaY / 120;
            } else {
                delta = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;
            }
        }

        var scrollTop = $window.scrollTop();
        var finalScroll = scrollTop - parseInt(delta * scrollDistance);
        TweenMax.to($window, scrollTime, {
            scrollTo: { y: finalScroll, autoKill: true },
            ease: Power3.easeOut,
            overwrite: 5
        });

    }
    smoothScroll()
})