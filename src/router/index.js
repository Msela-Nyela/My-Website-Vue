import Team from "@/components/Team.vue";
import TheHello from "@/components/TheHello.vue";
import TheWelcome from "@/components/TheWelcome.vue";
import Dashboard from "@/views/Dashboard.vue";
import HomeView from "@/views/HomeView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [,
        {
            path: '/',
            name: 'welcome',
            component: TheWelcome,
        },
        {
            path: '/helloTeam',
            name: 'helloTeam',
            component: TheHello,
        },
        {
            path: '/team',
            name: 'team',
            component: Team
        },
        // {
        //     path: '/dashboard',
        //     name: 'dashboard',
        //     component: Dashboard
        // },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFoundView,
        },
    ],
});

export default router;