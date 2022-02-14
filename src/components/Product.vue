<template>
  <div class="featured__item">
    <div class="featured-image">
      <img :src="require(`/src/assets/images/prod/${img}.png`)" alt="" />
    </div>
    <div class="featured-name">{{ name }}</div>
    <div class="featured-price">${{ price }}</div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    }
  }
  //find sort an array of objects my a value js.
  // Source: https://stackoverflow.com/a/10542368 .
  // var objs = [
  //   { first_nom: 'Lazslo',last_nom: 'Jamf' },
  //   { first_nom: 'Pig', last_nom: 'Bodine'  },
  //   { first_nom: 'Pirate', last_nom: 'Prentice' }
  // ];

  // var sortedObjs = _.sortBy( objs, 'first_nom' );
}
</script>

<style></style>
