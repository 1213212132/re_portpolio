
$(function () {

    $(".wrap").fullpage({
        navigation: true,//네비게이션 유무
        navigationPosition: "right",//네비게이션 위치
        sectionsColor: [],//각 섹션 배경색, 배열의 형식
        showActiveTooltip: true,//네비게이션 선택 메뉴 활성화



    });
    var mouseX, mouseY;
    var ww = $(window).width();
    var wh = $(window).height();
    var traX, traY;
    $(document).mousemove(function (e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
        traX = ((4 * mouseX) / 570) + 40;
        traY = ((4 * mouseY) / 570) + 50;
        console.log(traX);
        $(".title").css({ "background-position": traX + "%" + traY + "%" });
    });
    const txt = gsap.utils.toArray('.text');

    txt.forEach((it, idx, arry) => {
        const a = it.innerText;
        const t = [...a].map(it => `<span>${it}</span>`).join('');

        it.innerHTML = t;
        const chars = it.querySelectorAll('span');

        gsap.from(chars, {
            yPercent: 100,
            autoAlpha: 0,
            duration: 1,
            repeat: 3,
            repeatDelay: 2,
            //yoyo: true,
            ease: "bounce",
            stagger: {
                amount: 1,
                from: "random"
            },
            scrollTrigger: {
                trigger: it,
                start: "top center",
                //end: "+=400",
                toggleActions: "play none play reverse",
                markers: 1
            }
        });
    });


})


