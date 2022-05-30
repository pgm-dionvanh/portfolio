(() => {

    const app = {
        initialize() {
            this.cacheElements();
            this.createEventListeners();
            this.textWriter(this.$informationAboutMe, "Backend Developer + Web Designer");

            window.onscroll = function() {
                var top = document.body.scrollTop + document.documentElement.scrollTop == 0;
                document.querySelector('.arrow').style.display = top ? 'block' : 'none';
            };
        },
        cacheElements() {
            this.$HamburgerButton = document.querySelector('.open-overlay');
            this.$informationAboutMe = document.querySelector('#information')

            /* Navigation items */
            this.$navigationOverlay = document.querySelector('.navigation--overlay');

            this
            
        },
        textWriter(obj, content) {
            let contentArr = content.split(""),
                current = 0

            setInterval(function () {
                if (current < contentArr.length) {
                    obj.innerHTML = obj.innerHTML + contentArr[current++];
                }
            }, 80);
        },
        createEventListeners() {
            this.$HamburgerButton.addEventListener('click', (e) => {

                const nav__item__1 = document.querySelector('nav li:nth-of-type(1)'),
                    nav__item__2 = document.querySelector('nav li:nth-of-type(2)'),
                    nav__item__3 = document.querySelector('nav li:nth-of-type(3)'),
                    nav__item__4 = document.querySelector('nav li:nth-of-type(4)'),
                    nav__item__5 = document.querySelector('nav li:nth-of-type(5)'),
                    topBar = document.querySelector('.bar-top'),
                    middleBar = document.querySelector('.bar-middle'),
                    bottomBar = document.querySelector('.bar-bottom');

                    nav__item__2.addEventListener('click', (e) => {
                        this.$navigationOverlay.classList.remove('overlay--slide__down');

                        this.$navigationOverlay.classList.add('overlay--slide__up');
                        this.$navigationOverlay.classList.toggle('active');

                        topBar.classList.remove('animate-top-bar');
                        topBar.classList.add('animate-out-top-bar');
    
                        middleBar.classList.remove('animate-middle-bar');
                        middleBar.classList.add('animate-out-middle-bar')
    
                        bottomBar.classList.remove('animate-bottom-bar');
                        bottomBar.classList.add('animate-out-bottom-bar')
    
                        this.$navigationOverlay.classList.remove('overlay--slide__down');
                        this.$navigationOverlay.classList.add('overlay--slide__up');
    
                        nav__item__1.classList.remove('slide-out-nav-item');
                        nav__item__1.classList.add('slide-in-nav-item-back');
    
                        nav__item__2.classList.remove('slide-out-nav-item-delay-1');
                        nav__item__2.classList.add('slide-in-nav-item-delay-1-back');
    
                        nav__item__3.classList.remove('slide-out-nav-item-delay-2');
                        nav__item__3.classList.add("slide-in-nav-item-delay-2-back");
    
                        nav__item__4.classList.remove('slide-out-nav-item-delay-3');
                        nav__item__4.classList.add('slide-in-nav-item-delay-3-back');
    
                        nav__item__5.classList.remove('slide-out-nav-item-delay-4');
                        nav__item__5.classList.add('slide-in-nav-item-delay-4-back');
                    })

                this.$navigationOverlay.classList.toggle('active');

                if (this.$navigationOverlay.classList.contains('active')) {

                    topBar.classList.remove('animate-out-top-bar');
                    topBar.classList.add('animate-top-bar');

                    middleBar.classList.remove('animate-out-middle-bar')
                    middleBar.classList.add('animate-middle-bar');

                    bottomBar.classList.remove('animate-out-bottom-bar')
                    bottomBar.classList.add('animate-bottom-bar');

                    this.$navigationOverlay.classList.remove('overlay--slide__up');
                    this.$navigationOverlay.classList.add('overlay--slide__down');


                    nav__item__1.classList.remove('slide-in-nav-item-back');
                    nav__item__1.classList.add('slide-out-nav-item');

                    nav__item__2.classList.remove('slide-in-nav-item-delay-1-back');
                    nav__item__2.classList.add('slide-out-nav-item-delay-1');

                    nav__item__3.classList.remove("slide-in-nav-item-delay-2-back");
                    nav__item__3.classList.add('slide-out-nav-item-delay-2');

                    nav__item__4.classList.remove('slide-in-nav-item-delay-3-back');
                    nav__item__4.classList.add('slide-out-nav-item-delay-3');

                    nav__item__5.classList.remove('slide-in-nav-item-delay-4-back');
                    nav__item__5.classList.add('slide-out-nav-item-delay-4');

                } else {

                    topBar.classList.remove('animate-top-bar');
                    topBar.classList.add('animate-out-top-bar');

                    middleBar.classList.remove('animate-middle-bar');
                    middleBar.classList.add('animate-out-middle-bar')

                    bottomBar.classList.remove('animate-bottom-bar');
                    bottomBar.classList.add('animate-out-bottom-bar')

                    this.$navigationOverlay.classList.remove('overlay--slide__down');
                    this.$navigationOverlay.classList.add('overlay--slide__up');

                    nav__item__1.classList.remove('slide-out-nav-item');
                    nav__item__1.classList.add('slide-in-nav-item-back');

                    nav__item__2.classList.remove('slide-out-nav-item-delay-1');
                    nav__item__2.classList.add('slide-in-nav-item-delay-1-back');

                    nav__item__3.classList.remove('slide-out-nav-item-delay-2');
                    nav__item__3.classList.add("slide-in-nav-item-delay-2-back");

                    nav__item__4.classList.remove('slide-out-nav-item-delay-3');
                    nav__item__4.classList.add('slide-in-nav-item-delay-3-back');

                    nav__item__5.classList.remove('slide-out-nav-item-delay-4');
                    nav__item__5.classList.add('slide-in-nav-item-delay-4-back');

                }
            })
        }
    };

    app.initialize(); /* Start app */
})();