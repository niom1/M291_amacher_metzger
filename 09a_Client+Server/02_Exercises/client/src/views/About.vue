<template>
  <div class="about">
    <h1>Unsere Partner </h1>
    <!--
  Vue Directives: Basic Directives (v-text, v-once, v-html, v-bind, v-if, v-show)
  -->
    <div>
      <h2 v-if="true" v-text="text">Wait..</h2>

      <h4 v-if="true" v-html="html">Wait..</h4>
      <h3 v-else-if="true" v-html="html">Wait..</h3>
      <a
          v-if="true"
          :href="link.url"
          :target="link.target"
          :tabindex="link.tabindex"
          v-text="link.title"
      />
    </div>

  </div>
</template>


<script>
export default {
  data() {
    return {
      // v-text
      text: 'Wir präsentieren Snipes unseren Partner.',
      // v-html
      html: 'Beim Partner snipes findet ihr alles was ihr rund um die Schuh Welt braucht.',
      // v-bind
      link: {
        url: 'https://www.snipes.com/',
        target: '_blank',
        tabindex: '0',
        title: 'Hier geht es zur offiziellen Snipes Seite',
      },
    }
  },
}

</script>