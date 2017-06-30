import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        verttles: [],
        currentVerttle: {},
        currentUser: {},
        links: []
    },
    getters: {
        currentUser: function (state) {
            if (state.currentUser) {
                return state.currentUser = firebase.auth().currentUser;
            }
            else {
                return null;
            }
        }
    },
    mutations: {
        addLink: function () {
        },
        showVerttle: function (state, verttle) {
            state.currentVerttle = verttle;
        },
        getLinks: function (state, payload) {
            state.links = payload.links;
        },
        updateVerttles: function (state, verttles) {
            state.verttles = verttles;
        },
        signin: function (state, user) {
            state.currentUser = user;
        }
    },
    actions: {
        createVerttle: function (_a, verttle) {
            var commit = _a.commit;
            var db = firebase.database();
            var verttles = db.ref().child('verttles');
            var newItem = verttles.push(verttle);
            return newItem;
        },
        showVerttle: function (_a, payload) {
            var commit = _a.commit;
            var db = firebase.database();
            db.ref().child('verttles/' + payload.key).once('value', function (snapshot) {
                //console.log(snapshot.val()) ;
                commit('showVerttle', snapshot.val());
            });
        },
        fetchVerttles: function (_a, payload) {
            var commit = _a.commit;
            var db = firebase.database();
            db.ref().child('verttles').on('value', function (snapshot) {
                var verttles = [];
                snapshot.forEach(function (eachSnapshot) {
                    var verttle = eachSnapshot.val();
                    verttle.getKey = function () {
                        return eachSnapshot.key;
                    };
                    verttles.push(verttle);
                    return false;
                });
                commit('updateVerttles', verttles);
            });
        },
        addLink: function (context, payload) {
            var db = firebase.database();
            var itemsInVerttle = db.ref().child("itemsInVerttle/" + payload.verttleKey);
            var newItem = itemsInVerttle.push(payload.newLink);
            //payload.uid = newItem.key ;
            return newItem;
        },
        fetchLinks: function (_a, payload) {
            var commit = _a.commit;
            var db = firebase.database();
            db.ref().child("itemsInVerttle/" + payload.key).on('value', function (snapshot) {
                commit('getLinks', {
                    links: snapshot.val()
                });
            });
        },
        signin: function (_a, user) {
            var commit = _a.commit;
            commit('signin', user);
        }
    }
});
