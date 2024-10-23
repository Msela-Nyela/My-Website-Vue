<template>
    <nav class="bg-gray-800 border-b border-gray-500">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-20 items-center justify-between">
                <div class="flex items-center">
                    <div class="ml-10 flex items-baseline space-x-4">
                        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                        <RouterLink to="/"
                            :class="[isActiveLink('/') ? 'bg-gray-900' : 'hover:bg-gray-900', 'hover:text-white', 'text-white', 'rounded-md', 'px-3', 'py-2']">
                            Open roles
                        </RouterLink>
                        <RouterLink to="/team"
                            :class="[isActiveLink('/team') ? 'bg-gray-900' : 'hover:bg-gray-900', 'hover:text-white', 'text-white', 'rounded-md', 'px-3', 'py-2']">
                            Meet our leadership
                        </RouterLink>
                        <RouterLink to="/helloTeam"
                            :class="[isActiveLink('/helloTeam') ? 'bg-gray-900' : 'hover:bg-gray-900', 'hover:text-white', 'text-white', 'rounded-md', 'px-3', 'py-2']">
                            Support center
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'

const isActiveLink = (routePath) => {
    const route = useRoute();
    return route.path === routePath;
}
</script>