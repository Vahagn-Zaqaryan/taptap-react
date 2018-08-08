import { EventEmitter } from 'events';

class TourStore extends EventEmitter {
    constructor() {
        super()
        this.tours = [
            {
                id: 1533577730519,
                img: "yerevan.jpg",
                location: { city:"Yerevan",
                            country: "Armenia"
                    },
                price: "Free",
                header: "Spacious, crozy & bright studio",
                language: "English",
                info: "Lorem ipsum dolor sit amet, tale ludus omnesque nec an. Pri minim probatus ex, nulla ubique eruditi eu pri. No ullum ridens antiopam vel, veritus corpora philosophia pri ei. Ea sit luptatum adversarium, duo decore fabulas accusam id. Cu habeo equidem necessitatibus cum. Facer errem tempor per ut, mazim vivendo comprehensam..",
                review: {
                        starts: 5,
                        count: 192
                    },
                by: {
                        name: "Vahagn Zaqaryan",
                        img: "autor_img.jpg"
                    }
            },
            {
                id: 1533577730520,
                img: "yerevan.jpg",
                location: { city:"Yerevan",
                            country: "Armenia"
                    },
                price: "Free",
                header: "Spacious, crozy & bright studio",
                language: "English",
                info: "Lorem ipsum dolor sit amet, tale ludus omnesque nec an. Pri minim probatus ex, nulla ubique eruditi eu pri. No ullum ridens antiopam vel, veritus corpora philosophia pri ei. Ea sit luptatum adversarium, duo decore fabulas accusam id. Cu habeo equidem necessitatibus cum. Facer errem tempor per ut, mazim vivendo comprehensam..",
                review: {
                        starts: 5,
                        count: 195
                    },
                by: {
                        name: "Vahagn Zaqaryan",
                        img: "autor_img.jpg"
                    }
            },
            {
                id: 1533577730521,
                img: "banner.jpg",
                location: { city:"Yerevan",
                            country: "Armenia"
                    },
                price: "Free",
                header: "Spacious, crozy & bright studio",
                language: "English",
                info: "Lorem ipsum dolor sit amet, tale ludus omnesque nec an. Pri minim probatus ex, nulla ubique eruditi eu pri. No ullum ridens antiopam vel, veritus corpora philosophia pri ei. Ea sit luptatum adversarium, duo decore fabulas accusam id. Cu habeo equidem necessitatibus cum. Facer errem tempor per ut, mazim vivendo comprehensam..",
                review: {
                        starts: 5,
                        count: 192
                    },
                by: {
                        name: "Vahagn Zaqaryan",
                        img: "autor_img.jpg"
                    }
            }
        ]
    }

    getAll(){
        return this.tours
    }
}

const tourStore = new TourStore();

export default tourStore;
