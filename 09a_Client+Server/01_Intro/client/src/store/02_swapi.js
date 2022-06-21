import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const baseURL = "https://swapi.dev/api/";
export default new Vuex.Store({
    state: {
        films: [],
        ships: []
    },
    mutations: {
        setFilms(state, films) {
            state.films = films;
        },
        setShips(state, ships) {
            state.ships = ships;
        }
    },
    actions: {
        loadFilms(context) {
            fetch(baseURL + "films")
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                context.commit('setFilms', data.results);
            }).catch(error => {
                console.error(error);
            });
        },
        loadShips(context) {
            fetch(baseURL + "starships")
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                context.commit('setShips', data.results);
            }).catch(error => {
                console.error(error);
            });
        }
    },
    modules: {}
})
