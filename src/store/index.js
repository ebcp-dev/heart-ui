import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      attributes: {
        age: null,
        sex: null,
        cp: null,
        trestbps: null,
        chol: null,
        fbs: null,
        restecg: null,
        thalach: null,
        exang: null,
        oldpeak: null,
        slope: null,
        ca: null,
        thal: null
      },
      prediction: null
    }
  },
  getters: {},
  mutations: {
    SET_ATTRIBUTES(state, payload) {
      state.attributes = payload
    },
    SET_PREDICTION(state, payload) {
      state.prediction = payload
    }
  },
  actions: {
    saveAttributes({ commit }, data) {
      commit('SET_ATTRIBUTES', data)
    },
    savePrediction({ commit }, data) {
      commit('SET_PREDICTION', data)
    }
  }
})

export default store