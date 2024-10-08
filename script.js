const {createApp} = Vue;

const app = createApp({
    data: () => ({
        currentIndex: 0,
        images: [
            {
                image: 'img/01.webp',
                title: 'Marvel\'s Spiderman Miles Morale',
                text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                id: 0
            },
            {
                image: 'img/02.webp',
                title: 'Ratchet & Clank: Rift Apart',
                text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                id: 1
            },
            {
                image: 'img/03.webp',
                title: 'Fortnite',
                text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                id: 2
            },
            {
                image: 'img/04.webp',
                title: 'Stray',
                text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                id: 3
            },
            {
                image: 'img/05.webp',
                title: "Marvel's Avengers",
                text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                id: 4
            },
        ],

    }),
    methods: {
        increaseCounter() {
            if (this.currentIndex === this.images.length - 1) return this.currentIndex = 0;
            this.currentIndex++;
        },

        decreaseCounter() {
            if (this.currentIndex <= 0) return this.currentIndex = this.images.length - 1;
            this.currentIndex--;
        },

        setToCounter() {
            console.log(this.images[this.currentIndex].id)
        }
    }
})

app.mount('#app')