<!--demo-01a: Implementing and Adding a Message Feed Page Using Vue Router -->
<template>
  <div>
    <h1>Ihr sneaker wartet bei Uns</h1>
    <p v-for="(m, i) in messages" :key="i">
      {{ m }}
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      messages: [
        'Schuhe für jede Jahreszeit',
        'Wenn du schuhe suchst bis du hier  genau  richtig. Coole Sneaker für den Frühling, leichte Stoffschuhe für den Sommer, robuste Stiefel für den Herbst und ein gefüttertes Paar Schuhe für den Winter – egal, für welchen Anlass oder für welche Jahreszeit, hier findest du dein perfektes Paar Schuhe.',
      ]
    }
  }
}
</script>