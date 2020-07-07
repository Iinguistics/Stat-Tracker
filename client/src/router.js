import Vue from 'vue';
import Router from 'vue-router';
import Search from './components/Search.vue';
import Test from './components/Test.vue';
import ApexProfile from './components/ApexProfile.vue';
import OverwatchProfile from './components/OverwatchProfile.vue';
import DivisionProfile from './components/DivisionProfile.vue';
import CodProfile from './components/CodProfile.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'search',
            component: Search
        },
        {
            path: '/test',
            name: 'test',
            component: Test
        },
        {
            path: '/profile/:platform/:gamertag/overwatch',
            name: 'OverwatchProfile',
            component: OverwatchProfile
        },
        {
            path: '/profile/:platform/:gamertag/apex',
            name: 'ApexProfile',
            component: ApexProfile
        },
        {
            path: '/profile/:platform/:gamertag/division',
            name: 'DivisionProfile',
            component: DivisionProfile
        },
        {
            path: '/profile/:platform/:gamertag/cod',
            name: 'CodProfile',
            component: CodProfile
        }
    ]
})