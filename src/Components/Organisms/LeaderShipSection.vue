<template>
  <div class="bg-snowwhite py-24 sm:py-32" :class="{ 'dark:bg-darkBackground': darkMode }">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl sm:text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-snowwhite">Meet our leadership</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-500">We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</p>
      </div>
      <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none">
        <li v-for="person in people" :key="person.name" class="flex flex-col gap-6 xl:flex-row">
          <img class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" :src="person.imageUrl" alt="" draggable="false"/>
          <div class="flex-auto">
            <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-snowwhite">{{ person.name }}</h3>
            <p class="text-base leading-7 text-gray-600 dark:text-gray-500">{{ person.role }}</p>
            <p class="mt-6 text-base leading-7 text-gray-600 dark:text-gray-500">{{ person.bio }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { darkMode } from "../../theme.js";
const people = [
  {
    name: 'Sebastian Richter',
    role: 'Head of Product',
    imageUrl:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Sebastian Richter Geschäftsführer der Warespace GmbH & Co. KG',
  },
  {
    name: 'Jonas Tritschallek',
    role: 'Head of Sales',
    imageUrl:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Jonas Tritschallek Geschäftsführer der Warespace GmbH & Co. KG',
  },
  {
    name: 'Bernd Schäflein',
    role: 'Beirat',
    imageUrl:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Bernd Schäflein Chief Operating Officers (COO) im Vorstand der Schäflein AG.',
  },
  {
    name: 'Uwe Fieselmann',
    role: 'Beirat',
    imageUrl:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Uwe Fieselmann Vorsitzender der Geschäftsführung von Heinrich Koch Internationale Spedition GmbH & Co. KG.',
  },
  {
    name: 'Marc-André Fritz',
    role: 'Beirat',
    imageUrl:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Marc-André Fritz Geschäftsführer der Fritz Logistik GmbH aus Heilbronn.',
  },
  {
    name: 'Bernard Motzko',
    role: 'Beirat',
    imageUrl:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Bernard Motzko Chief Operating Officers (COO) im Vorstand der Zumtobel Group AG.',
  },
]
</script>