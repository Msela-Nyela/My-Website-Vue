<template>
    <section class="relative min-h-screen isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
            alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center">
        <div class="container-xl lg:container m-auto text-white">
            <div class="text-center mb-8">
                <h1 class="text-4xl font-bold">Support center</h1>
                <p class="mt-4 max-w-2xl mx-auto">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit
                    sunt
                    amet
                    fugiat veniam occaecat fugiat.
                </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div class="bg-gray-800 p-6 rounded-lg text-center">
                    <div class="text-2xl mb-4">
                        <i class="fas fa-phone"></i>
                    </div>
                    <h2 class="text-xl font-semibold">Sales</h2>
                    <p class="mt-2">
                        Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur.
                    </p>
                </div>
                <div class="bg-gray-800 p-6 rounded-lg text-center">
                    <div class="text-2xl mb-4">
                        <i class="fas fa-tools"></i>
                    </div>
                    <h2 class="text-xl font-semibold">Technical Support</h2>
                    <p class="mt-2">
                        Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.
                    </p>
                </div>
                <div class="bg-gray-800 p-6 rounded-lg text-center">
                    <div class="text-2xl mb-4">
                        <i class="fas fa-newspaper"></i>
                    </div>
                    <h2 class="text-xl font-semibold">Media Inquiries</h2>
                    <p class="mt-2">
                        Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum
                        odit.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import Card from './Card.vue';
</script>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';
</style>