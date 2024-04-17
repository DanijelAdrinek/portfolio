import AOS from "aos";
import CacheHandler from './CacheHandler';

class AnimationHandler {
    cacheHandler: CacheHandler
    constructor() {
        this.cacheHandler = new CacheHandler();
    }

    enableAnimations() {
        this.cacheHandler.setCache("animations", "true");
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
        document.body.classList.remove('animationsDisabled');
    }

    disableAnimations() {
        this.cacheHandler.setCache("animations", "false");
        AOS.init({disable: true});
        document.body.classList.add('animationsDisabled');
    }

}

export default AnimationHandler;