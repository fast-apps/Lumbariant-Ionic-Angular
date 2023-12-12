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
                likes: '344',
                comments: '40',
                url: 'assets/estiramientos/1-estiramiento-lumbosacro-suelo-md.png',
                userPic: 'assets/estiramientos/1-estiramiento-lumbosacro-suelo-md.png',
            },
            {
                userName: 'fakun',
                likes: '18.5k',
                comments: '4323',
                url: 'assets/estiramientos/2-estiramiento-lumbosacro-silla-md.png',
                userPic: 'assets/estiramientos/2-estiramiento-lumbosacro-silla-md.png',            
            },
            {
                userName: 'fakun',
                likes: '18.5k',
                comments: '4323',
                url: 'assets/estiramientos/3-estiramiento-lumbosacro-tumbado-md.png',
                userPic: 'assets/estiramientos/3-estiramiento-lumbosacro-tumbado-md.png',            
            },
            {
                userName: 'fakun',
                likes: '18.5k',
                comments: '4323',
                url: 'assets/estiramientos/4-gato-camello-md.png',
                userPic: 'assets/estiramientos/4-gato-camello-md.png',            
            },
            {
                userName: 'fakun',
                likes: '18.5k',
                comments: '4323',
                url: 'assets/estiramientos/5-estiramiento-de-psoas-md.png',
                userPic: 'assets/estiramientos/5-estiramiento-de-psoas-md.png',            
            },
            {
                userName: 'fakun',
                likes: '18.5k',
                comments: '4323',
                url: 'assets/estiramientos/6-estiramiento-piramidal-md.png',
                userPic: 'assets/estiramientos/6-estiramiento-piramidal-md.png',            
            },
            {
                userName: 'fakun',
                likes: '18.5k',
                comments: '4323',
                url: 'assets/estiramientos/7-estiramiento-de-isuiotibiales-md.png',
                userPic: 'assets/estiramientos/7-estiramiento-de-isuiotibiales-md.png',            
            },
            {
                userName: 'fakun',
                likes: '18.5k',
                comments: '4323',
                url: 'assets/estiramientos/8-estiramiento-de-isuiotibiales-tumbado-md.png',
                userPic: 'assets/estiramientos/8-estiramiento-de-isuiotibiales-tumbado-md.png',            
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
