<template>
  <div class="container">
    <h1>Aufgaben liste</h1>
    <div class="user-input">
      <input
          placeholder="Ihre aufgbe..."
          v-model="input"
          @keyup.enter="addItem"
          ref="input"
      /><button @click="addItem">Objekt hinzufügen</button>
    </div>

    <ul v-if="shoppingList">
      <li v-for="item in shoppingList" :key="item" class="item"
      ><span>{{ item }}</span>
        <button class="button--remove" @click="deleteItem(item)">Entfernen</button>
      </li>
    </ul>
  
    <br />
    <button class="button--delete" @click="deleteItem()">Alles löschen</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      shoppingList: [],
    }
  },
  methods: {
    addItem() {
      if (!this.input) return
      this.shoppingList.push(this.input)
      
      this.input = ''
  
      this.$refs.input.focus()
    },
    deleteItem(item) {
      
      let index = this.shoppingList.indexOf(item);
      console.log(`item: ${item} at index: ${index}`);
      //no parameter provided ..
      if (item == null){
        //.. deleteAll has been pressed
        this.shoppingList = [];
      } else {
        //assign filtered shopping list without deleted item
        this.shoppingList = this.shoppingList.filter(el => el !== item);
      }
    },
    deleteItem_v2(i) {
      if (i == null) {
        this.shoppingList = []
      } else {
        this.shoppingList = this.shoppingList.filter((item,el) => el !== i);
      }
      //Verkürzte Variante von deleteItem(i)
      // this.shoppingList = i
      //     ? this.shoppingList.filter((item, x) => x !== i)
      //     : []
    },
  },
}
</script>

<style lang="scss">
$color-green: #1111;
$color-grey: #2c3e50;

.container {
  max-width: 600px;
  margin: 80px auto;
}

.item {
  display: flex;
  justify-content: space-between;
}

// Type
.h2 {
  font-size: 21px;
}

.user-input {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  input {
    width: 100%;
    padding: 10px 6px;
    margin-right: 10px;
  }
}

.item {
  display: flex;
  align-items: center;
}

// Buttons
button {
  appearance: none;
  padding: 10px;

  font-weight: bold;
  border-radius: 10px;
  border: none;
  background: $color-grey;
  color: white;
  white-space: nowrap;

  + button {
    margin-left: 10px;
  }
}

.button--delete {
  display: block;
  margin: 0 auto;
  background: darkorange;
}

.button--remove {
  background: none;
  color: red;
  text-transform: uppercase;
  font-size: 11px;
  align-self: flex-end;
}

ul {
  display: block;
  margin: 0 auto;
  padding: 30px;
  border: 1px solid rgba(107, 91, 0, 0.25);

  > li {
    color: $color-grey;
    margin-bottom: 4px;
  }
}
</style>

