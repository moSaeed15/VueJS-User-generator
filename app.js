const app = Vue.createApp({
  data() {
    return {
      firstName: 'Mohammed',
      lastName: 'El Saeed',
      email: 'Mohammed@gmail.com',
      gender: 'male',
      picture:
        'https://scontent.fcai22-2.fna.fbcdn.net/v/t1.6435-9/53192490_2088728661242653_758699534682423296_n.jpg?_nc_cat=109&ccb=1-6&_nc_sid=174925&_nc_ohc=TrIHemGYMJwAX90EZia&_nc_ht=scontent.fcai22-2.fna&oh=00_AT-Pq9HQvdbc-PBRbuwoCDgw4nu414_zXnuZZapqYOyvgg&oe=629FC9B2',
    };
  },
  methods: {
    async getUser() {
      const res = await fetch('https://randomUser.me/api');
      const { results } = await res.json();
      this.firstName = results[0].name.first;
      (this.lastName = results[0].name.last),
        (this.email = results[0].email),
        (this.gender = results[0].gender),
        (this.picture = results[0].picture.large);
    },
  },
});

app.mount('#app');
