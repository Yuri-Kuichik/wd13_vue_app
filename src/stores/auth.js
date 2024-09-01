import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state() {
        return {
            token: '',
            refresh: '',
            uid: 'ODYwNg',
            fromEmailToken: 'cc7ssy-2e57c372812800f94f919d0a2c4ef6a6',
            url: 'https://studapi.teachmeskills.by//activate/ODYwNw/ccdl27-bd7b740f22b991613865d1d739d5abba'
        }
    },

    actions: {
        setToken(newToken) {
        this.token = newToken;
        },

        setRefreshToken(newRefreshToken) {
        this.refresh = newRefreshToken
        },

        // этот метод для получения нашего uid и token в формате объекта из строки url (в satete)
        // этот url вам должет придти на почту после регистрации
        getDataUserFromUrl() {
        const str = this.url.split('activate/')[1]

        const uid = str.split('/')[0]
        const token = str.split('/')[1]

        return {uid, token}
        },

        async createUser(data) {
            return await fetch('https://studapi.teachmeskills.by/auth/users/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(data)
            })
        },

        // после регистрации и того, как пришло письмо с url на почту, и вы сохранили этот url здесь в state -> url, 
        // отправляем полученные данные на сервер для активации профиля
        async authUserActivation() {
        const data = this.getDataUserFromUrl()

        await fetch('https://studapi.teachmeskills.by/auth/users/activation/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        })
            
        },

        // если после регистрации, по какой-то причине, вам не приходит письмо на почту, 
        // можно снова запросить отправить письмо. Вы должны указать свой email в запросе. Тот email, который вы указали при регистрации
        async resendUserActivation(email) {
        const response = await fetch('https://studapi.teachmeskills.by/auth/users/resend_activation/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
            "email": email
            })
        })

        return response
            
        },

        // Если вы уже зарегистрировались и активировали профиль, то с помощью этого запроса можно авторизоваться и получить токены
        async signIn(data) {
            return await fetch('https://studapi.teachmeskills.by/auth/jwt/create/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(data)
            });
        },

        // с помощью этого запроса можно получить данные юзера, например его id
        async getAuthUsersMe() {
            return await fetch('https://studapi.teachmeskills.by/auth/users/me/', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${this.token}`,
                    'Content-Type': 'application/json;charset=utf-8'
                }
            });
        },

        // если запросы не проходят по причине 'протухшего' токена, нужно его обновить с помощью этого запроса
        async refreshToken() {
            console.log('refreshToken')

            try {
                const response = await fetch('https://studapi.teachmeskills.by/auth/jwt/refresh/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                'refresh': this.refresh
                })
                });

                if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                this.setToken(data.access)

                return data

            } catch(error) {
                console.log(error.message)
            }
        },

        // с помощью этого запроса можно проверить ваш токен
        async verifyToken() {
            return await fetch('https://studapi.teachmeskills.by/auth/jwt/verify/', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                'token': this.token
                })
            });
        },
    },
})
