<template>
  <div id="app">
    <b-container fluid>
      <b-card
          :title="this.infocard(sid)"
          img-src="https://picsum.photos/300/150/?image=1027"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 50rem;"
          class="mb-n4"
      >
        <b-card-text>
              <b-row class="my-1" v-for="(mod,i) in moduleList" :key="i">
                <b-col sm="7">
                  <label>{{ mod.title }}: </label>
                </b-col>
                <b-col sm="2">
                  <b-form-input :id="`${mod.mid}`" v-model:value="mod.mark"
                                @focusout="setMark(mod.mid,mod.mark)"></b-form-input>
                </b-col>
                <b-col sm="2">
                  <b-button variant="primary"
                            @click="setMark(mod.mid, mod.mark)">Update</b-button>
                </b-col>
              </b-row>
              <b-row class="my-1">Durchschnitt: {{ avg }}</b-row>
        </b-card-text>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'app',
  data() {
    return {
    }
  },
  created() {
    console.log('in created loadMarks')
    this.$store.dispatch('loadMarks');
  },
  computed: {
    // sid(){
    //   return this.$store.state.sid;
    // },
    // moduleList(){
    //   return this.$store.state.moduleList;
    // },
    // avg(){
    //   return this.$store.state.avg;
    // },
    //shorter with ...mapState
    ...mapState(['sid','moduleList','avg']),
  },
  methods: {
    setMark(mid,mark){
      if (mark){
        console.log(`in setMark: ${mid} ${mark}`);
        //Important: Only 1 payload parameter allowed
        this.$store.commit('updateMark',{"mid": mid, "mark": Number(mark).toFixed(2)});
      }
    },
    infocard(sid){
      return `Module Student id=${sid}`
    }
  }

}
</script>
