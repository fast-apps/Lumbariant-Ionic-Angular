import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor() {

    }

    getVideoList() {
        const videoList = [
            {
                userName: 'fakun',
                title: "Estiramiento lumbosacro en suelo",
                summary: "Flexionar las rodillas y las caderas hasta sentarse sobre los talones, flexionando a la vez el cuello. Deslizar las manos hacia delante al finalizar el movimiento. Mantener 10-30 segundos y volver a la posición inicial.",
                sets: "1",
                repeats: "4",
                duration: "10-30 Segundos",
                likes: '34',
                dislikes: "5",
                comments: '40',
                favorite: false,
                media: [
                    'assets/estiramientos/1-estiramiento-lumbosacro-suelo-img01.png',
                    'assets/estiramientos/1-estiramiento-lumbosacro-suelo-img02.png'
                ],
            },
            {
                userName: 'fakun',
                title: "Estiramiento lumbosacro en silla",
                summary: "Flexionar el cuello y el tronco, llevando las manos a los pies. Mantener 10-30 segundos y volver a la posición inicial.",
                sets: "1",
                repeats: "4",
                duration: "10-30 Segundos",
                likes: '344',
                dislikes: "5",
                comments: '40',
                favorite: true,
                media: [
                    'assets/estiramientos/2-estiramiento-lumbosacro-silla-img01.png'
                ],
            },
            {
                userName: 'fakun',
                title: "Estiramiento lumbosacro tumbado",
                summary: "Flexionar de forma simultánea la cadera y de rodilla de ambas piernas. Empujar la parte superior de las piernas hacia el pecho. Mantener la posición 15-30 segundos y volver a la posición inicial.",
                sets: "1",
                repeats: "4",
                duration: "15-30 Segundos",
                likes: '344',
                dislikes: "5",
                comments: '40',
                favorite: false,
                media: [
                    'assets/estiramientos/3-estiramiento-lumbosacro-tumbado-img01.png',
                    'assets/estiramientos/3-estiramiento-lumbosacro-tumbado-img02.png'
                ],
            },
            {
                userName: 'fakun',
                title: "Gato-camello",
                summary: "Arquear la columna hacia arriba, flexionando el cuello. Mantener 5 segundos. Arquear la columna hacia abajo, extendiendo el cuello. Mantener 5 segundos.",
                sets: "1",
                repeats: "5",
                duration: "5*2: 10 Segundos",
                likes: '50',
                dislikes: "5",
                comments: '40',
                favorite: false,
                media: [
                    'assets/estiramientos/4-gato-camello-img01.png',
                    'assets/estiramientos/4-gato-camello-img02.png'
                ],          
            },
            {
                userName: 'fakun',
                title: "Estiramiento de psoas",
                summary: "Empujar la pierna que está doblada manteniendo la otra estirada. Mantener 10-30 segundos y volver la posición inicial. Repetir con la otra pierna.",
                sets: "1",
                repeats: "4",
                duration: "10-30 Segundos",
                likes: '15',
                dislikes: "5",
                comments: '40',
                favorite: true,
                media: [
                    'assets/estiramientos/5-estiramiento-de-psoas-img01.png'
                ],           
            },
            {
                userName: 'fakun',
                title: "Estiramiento de piramidal",
                summary: "Empujar la rodilla hacia el hombro contrario y el pie hacia atrás. Mantener 10-30 segundos y volver a la posición inicial. Repetir con la otra pierna.",
                sets: "1",
                repeats: "4",
                duration: "10-30 Segundos",
                likes: '15',
                dislikes: "5",
                comments: '40',
                favorite: false,
                media: [
                    'assets/estiramientos/6-estiramiento-piramidal-img01.png'
                ],            
            },
            {
                userName: 'fakun',
                title: "Estiramiento de isquiotibiales",
                summary: "Inclinar el cuerpo hacia delante manteniendo la columna lumbar recta. Mantenerl 10-30 segundos y volver a la posición inicial. Repetir con la otra pierna.",
                sets: "1",
                repeats: "4",
                duration: "10-30 Segundos",
                likes: '15',
                dislikes: "5",
                comments: '40',
                favorite: false,
                media: [
                    'assets/estiramientos/7-estiramiento-de-isuiotibiales-img01.png'
                ],          
            },
            {
                userName: 'fakun',
                title: "Estiramiento de isquiotibiales tumbado",
                summary: "Flexionar una cadera y mantener el muslo elevado en esta posición. Extender la rodilla 10 máximo posible. Mantener la posición 15-30 segundos y volver a la posición.",
                sets: "1",
                repeats: "4",
                duration: "15-30 Segundos",
                likes: '15',
                dislikes: "5",
                comments: '40',
                favorite: false,
                media: [
                    'assets/estiramientos/8-estiramiento-de-isuiotibiales-tumbado-img01.png',
                    'assets/estiramientos/8-estiramiento-de-isuiotibiales-tumbado-img02.png'
                ],
            }
        ];

        return videoList;
    }

    getTrends() {
        const trends = [{
            trendName: 'oneday',
            viewCounts: '117.0M',
            trendProfiles: [{
                id: 0,
                photo: 'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/07d1f69ce9d44c1d8595ac98ea3ba1e7?x-expires=1632960000&x-signature=X4zn3PMh9%2F0NBBIFcI8s%2FdssB%2FE%3D'
            }, {
                id: 1,
                photo: 'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/4870130f4d394ab5abf7493d198ddf10_1631472363?x-expires=1632960000&x-signature=LecuzUdAAy6FKMTqF65T2YhqliU%3D'
            }, {
                id: 2,
                photo: 'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/9eb176d5871e4ab3a68fdf02e2343ccc_1631272060?x-expires=1632960000&x-signature=Eb5si%2F26R%2BK2eAeQpyEcHtbazwY%3D'
            }, {
                id: 3,
                photo: 'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/4870130f4d394ab5abf7493d198ddf10_1631472363?x-expires=1632960000&x-signature=LecuzUdAAy6FKMTqF65T2YhqliU%3D'
            }, {
                id: 4,
                photo: 'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/07d1f69ce9d44c1d8595ac98ea3ba1e7?x-expires=1632960000&x-signature=X4zn3PMh9%2F0NBBIFcI8s%2FdssB%2FE%3D'
            }, {
                id: 5,
                photo: 'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/4870130f4d394ab5abf7493d198ddf10_1631472363?x-expires=1632960000&x-signature=LecuzUdAAy6FKMTqF65T2YhqliU%3D'
            }]
        },
            {
                trendName: 'alan4747',
                viewCounts: '340.0B',
                trendProfiles: [{
                    id: 0,
                    photo: 'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/07d1f69ce9d44c1d8595ac98ea3ba1e7?x-expires=1632960000&x-signature=X4zn3PMh9%2F0NBBIFcI8s%2FdssB%2FE%3D'
                }, {
                    id: 1,
                    photo: 'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/07d1f69ce9d44c1d8595ac98ea3ba1e7?x-expires=1632960000&x-signature=X4zn3PMh9%2F0NBBIFcI8s%2FdssB%2FE%3D'
                }, {
                    id: 2,
                    photo: 'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/07d1f69ce9d44c1d8595ac98ea3ba1e7?x-expires=1632960000&x-signature=X4zn3PMh9%2F0NBBIFcI8s%2FdssB%2FE%3D'
                }, {
                    id: 3,
                    photo: 'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/07d1f69ce9d44c1d8595ac98ea3ba1e7?x-expires=1632960000&x-signature=X4zn3PMh9%2F0NBBIFcI8s%2FdssB%2FE%3D'
                }, {
                    id: 4,
                    photo: 'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/07d1f69ce9d44c1d8595ac98ea3ba1e7?x-expires=1632960000&x-signature=X4zn3PMh9%2F0NBBIFcI8s%2FdssB%2FE%3D'
                }, {
                    id: 5,
                    photo: 'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/07d1f69ce9d44c1d8595ac98ea3ba1e7?x-expires=1632960000&x-signature=X4zn3PMh9%2F0NBBIFcI8s%2FdssB%2FE%3D'
                }]
            }];
        return trends;
    }

    getSlides() {
        const slides = [
            {
                id: 0,
                photo: './assets/png/1.jpg'
            },
            {
                id: 1,
                photo: './assets/png/2.jpg'
            },
            {
                id: 2,
                photo: './assets/png/1.jpg'
            }
        ];
        return slides;
    }
}
