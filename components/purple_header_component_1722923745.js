/* Summary: HTML file that describes the header section including:
1. Site branding with a logo on the left.
2. Desktop navigation menu with links to different pages in the middle.
3. Desktop sign-in and sign-up links on the right.
*/ 

Vue.component("purple_header_component_1722923745", {
    template: `
    <header class="w-full z-30" id="header-section-container">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 bg-purple-900 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg">
            <div class="flex items-center justify-between h-16 md:h-20">
    
                <div id="site-branding" class="flex-1"><a id="logo-link" class="inline-flex" href="index.html" aria-label="Cruip"><img id="logo-image" class="max-w-none" src="https://127.0.0.1:$PORT/get_image/tmp28nxycik/logo.svg" width="38" height="38" alt="Stellar"></a></div>
    
                <nav id="desktop-navigation" class="hidden md:flex md:grow">
    
                    <ul id="desktop-menu-links" class="flex grow justify-center flex-wrap items-center">
                        <li><a id="Home-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-white hover:text-pink-400" href="Home.html">Home</a></li>
                        <li><a id="Explore-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-white hover:text-pink-400" href="Explore.html">Explore</a></li>
                        <li><a id="Latest Blocks-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-white hover:text-pink-400" href="Latest Blocks.html">Latest Blocks</a></li>
                        <li><a id="News-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-white hover:text-pink-400" href="News.html">News</a></li>
                        <li><a id="About-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-white hover:text-pink-400" href="About.html">About</a></li>
                    </ul>
    
                </nav>
    
                <ul id="desktop-sign-in-links" class="flex-1 flex justify-end items-center">
                    <li><a id="sign-in-link" class="font-medium text-sm whitespace-nowrap transition duration-150 ease-in-out text-white hover:text-pink-400" href="signin.html">Sign in</a></li>
                    <li class="ml-6"><a id="sign-up-link" class="btn-sm transition duration-150 ease-in-out w-full group relative before:absolute before:inset-0 before:bg-purple-600 before:bg-opacity-50 before:rounded-full before:pointer-events-none" href="signup.html"><span class="relative inline-flex items-center text-white group-hover:text-pink-400">Sign up <span id="sign-up-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 text-pink-400">-&gt;</span></span></a></li>
                </ul>
    
                <div id="mobile-menu" class="md:hidden flex items-center ml-4" x-data="{ expanded: false }">
    
                    <button id="hamburger-button" class="hamburger" :class="{ 'active': expanded }" @click.stop="expanded = !expanded" aria-controls="mobile-nav" :aria-expanded="expanded">
                        <span class="sr-only">Menu</span>
                        <svg id="hamburger-icon" class="w-5 h-5 fill-current transition duration-150 ease-in-out text-white hover:text-pink-400" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <rect y="2" width="20" height="2" rx="1" />
                            <rect y="9" width="20" height="2" rx="1" />
                            <rect y="16" width="20" height="2" rx="1" />
                        </svg>
                    </button>
    
                    <nav id="mobile-nav" class="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out bg-purple-900 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg" x-ref="mobileNav" :style="expanded ? 'max-height: ' + $refs.mobileNav.scrollHeight + 'px; opacity: 1' : 'max-height: 0; opacity: .8'" @click.outside="expanded = false" @keydown.escape.window="expanded = false" x-cloak>
                        <ul id="mobile-nav-list" class="border border-transparent rounded-lg px-4 py-1.5">
                            <li><a id="mobile-Home-link" class="flex font-medium text-sm py-1.5 text-white hover:text-pink-400" href="Home.html">Home</a></li>
                            <li><a id="mobile-Explore-link" class="flex font-medium text-sm py-1.5 text-white hover:text-pink-400" href="Explore.html">Explore</a></li>
                            <li><a id="mobile-Latest Blocks-link" class="flex font-medium text-sm py-1.5 text-white hover:text-pink-400" href="Latest Blocks.html">Latest Blocks</a></li>
                            <li><a id="mobile-News-link" class="flex font-medium text-sm py-1.5 text-white hover:text-pink-400" href="News.html">News</a></li>
                            <li><a id="mobile-About-link" class="flex font-medium text-sm py-1.5 text-white hover:text-pink-400" href="About.html">About</a></li>
                        </ul>
                    </nav>
    
                </div>
    
            </div>
        </div>
    </header>
`,
        data() {
            return {
                expanded: false, 
                tab: null,
                textStylePrimary: 'text-white',
                hoverTextStylePrimary: 'hover:text-pink-400',
                signUpButtonText: "text-white",
                signUpButtonHover: "hover:text-pink-400",
                signUpButtonGradient: "bg-purple-600 bg-opacity-50 rounded-full",
                signUpButtonArrow: "text-pink-400",
        },
    });
                    