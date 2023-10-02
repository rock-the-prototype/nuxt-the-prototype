// types/vue.d.ts
import Vue from 'vue';
import { VueRouter } from 'vue-router/types/router';

declare module 'vue/types/vue' {
    interface Vue {
        $router: VueRouter;
    }
}

// Add the following to handle .vue files:
declare module "*.vue" {
    import { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
}