// (function () {
//     gsap.registerPlugin(ScrollTrigger);

//     const locoScroll = new LocomotiveScroll({
//         el: document.querySelector("main"),
//         smooth: true
//     });
//     locoScroll.on("scroll", ScrollTrigger.update);

//     ScrollTrigger.scrollerProxy("main", {
//         scrollTop(value) {
//             return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//         },
//         getBoundingClientRect() {
//             return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//         },
//         pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
//     });

//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
//     ScrollTrigger.refresh();
// })()


(() => {

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            scrub: 3,
            // markers: true,
            pin: true,
            end: "bottom -250%",  //! 📝Note: mtlb bottom se [-250%], or [END] ko wahan tak[-250%] jane me time lage ga to animation slow ho jaye gi
        }
    });


    //! 📝Note: agr hum 2 animations ko 1 sath run krna chate hn to hamain unhain same [FLAGS] dena honge 

    tl
        .to('.circle .circ_btm img', {
            scale: 1,
            rotate: '-180deg',
            duration: 1,
            stagger: .1,
            ease: Power1
        }, 'flag1')
        .to('.circle .circ_top img', {
            scale: 1,
            duration: 1,
            stagger: .1,
            ease: Power1
        }, 'flag1')
        .to('.gallery_h1', {
            bottom: '-50%',
            // duration: 0.2,
            ease: Power1
        }, 'flag1')
        .to('.gola', {
            scale: 1.7,
            top: '50%',
            ease: Power1
        }, 'flag1')
        .to('.sea_img img', {
            scale: 0,
            duration: 0.7,
            stagger: .1,
            ease: Power1
        }, 'flag1')
        .to('.center_img h6', {
            opacity: 0,
            duration: 0.2,
            stagger: .1,
            ease: Power1
        }, 'flag1')
        .to('.sm_circle', {
            scale: 0.5,
            ease: Power1
        }, 'flag1')
        .to('.circle', {
            scale: 0.3,
            ease: Power1
        }, 'flag1')
        .to('.pink_sea_img', {
            scale: 1.5, //* 1.6
            duration: 1,
            ease: Power1
        }, 'flag1')
        .to('.gola', {
            delay: -0.3,
            opacity: 0,
            duration: .67,
            ease: Power1
        }, 'flag2')
        .to('.pinkflare_h1', {
            delay: -0.5,
            bottom: window.innerWidth > 640 ? 20 : 60,
            rotate: '0deg',
            ease: Power1
        }, 'flag2')
        // .to('.pink_sea_img', {
        //     scale: 1, //* 1.28
        //     duration: 1,
        //     ease: Power1
        // }, 'flag2')
        .to('.sm_circle', {
            scale: 0,
            duration: 2,
            ease: Power1
        }, 'flag2')
        .to('.circle', {
            scale: 0,
            duration: 2,
            ease: Power1
        }, 'flag2')
        .to('.pink_sea_img', {
            scale: 1, //* 1.28
            duration: 1,
            ease: Power1
        }, 'flag2')
        // .to('.pink_sea_img', {
        //     scale: 1,
        //     duration: 1,
        //     ease: Power1
        // }) //* without flag
        .to('.pink_card', {
            top: 0,
            duration: 3,
            ease: Power1
        }, 'flag2')
        .to('.pink_card', {
            duration: 2,
            top: '-80%',
            ease: Power1
        })

})();


(() => {

    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section_2",
            start: "top top",
            scrub: 3,
            markers: true,
            pin: true,
            end: "bottom -150%",
        }
    });


    tl2
        .to('.two_circ', {
            top: '50%',
            stagger: .1,
            ease: Power1
        })
        .to('.two_circ', {
            left: '50%',
            stagger: .01,
            ease: Power1
        })
        .to('.pink_circle', {
            scale: 10,
            duration: 1,
            ease: Power1
        })
        .to('.pink_circle', {
            background: 'linear-gradient(to right, #d5a7b4, #b4aad5 )',
            ease: Power1
        })
        .to('.gradient_h1', {
            left: window.innerWidth > 640 ? '-200%' : '-350%',
            duration: 10,
            ease: Power1
        }, 'tl2')
        .to('.sbtm__p2', {
            opacity: 0,
            duration: 3,
            ease: Power1
        }, 'tl2')
        .to('.sbtm__p1', {
            opacity: 1,
            // delay: 1,
            duration: 4,
            ease: Power1
        }, 'tl2')
        .to('.five_cols .cols', {
            bottom: 0,
            delay: -3,
            stagger: .5,
            duration: 2,
            ease: Power1
        }, 'tl2__1')
        .to('.inner_cols', {
            right: window.innerWidth > 640 ? '50%' : 0,
            delay: 2,
            duration: 1,
            ease: Power1
        }, 'tl2__1')
        .to('.inner_cols .col_1', {
            right: window.innerWidth > 640 ? '25%' : 0,
            delay: 3,
            duration: 1,
            ease: Power1
        }, 'tl2__1')

})()