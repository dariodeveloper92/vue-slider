// Vue js

Vue.config.devtools = true; // scrivere per attivare l'estenzione sul browser

//Consegna:
//Rifare l'esercizio dello slider come fatto assieme in classe.

const app = new Vue(
    {
        el: '#root',
        data: {
            counterPhoto: 0,
            photos: [
                'img/image1.jpg',
                'img/image2.jpg',
                'img/image3.jpg',
                'img/image4.jpg',
            ]
        },
        methods: {
            prevPhoto() {   // Foto precedente
                this.counterPhoto -= 1;
                if(this.counterPhoto < 0) this.counterPhoto = (this.photos.length - 1);
            },
            nextPhoto() {   // Foto successiva
                this.counterPhoto += 1;
                if(this.counterPhoto == (this.photos.length)) this.counterPhoto = 0;
            },
        }
})

//Bonus:
//Creare il navigatore in basso con i pallini bianchi (blu se corrispondente all'immagine attualmente visualizzata)
//Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.