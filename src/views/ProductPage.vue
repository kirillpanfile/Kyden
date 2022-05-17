<template>
  <ul class="breadcrumbs__list breadcrumbs__container">
    <li class="breadcrumbs__item">
      <a href="/" class="breadcrumbs__link"> Home </a>
    </li>

    <li class="breadcrumbs__item">
      <a href="" class="breadcrumbs__link"> Store </a>
    </li>

    <li class="breadcrumbs__item">
      <span class="breadcrumbs__current"> {{ prodItem.name }} </span>
    </li>
  </ul>
  <div class="card card__container">
    <div class="card__wrapper">
      <div class="card__image">
        <img :src="`/src/assets/Products/${prodItem.image}`" alt="product" />
      </div>
      <div class="card__info">
        <h1 class="card__name">{{ prodItem.name }}</h1>
        <div class="card__price">
          <span>{{ prodItem.price }}</span>
        </div>
        <div class="card__description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            assumenda possimus ex in aspernatur quo fugiat numquam qui
            cupiditate placeat obcaecati debitis.
          </p>
        </div>
        <div class="card__sizes">
          <span>SELECT SIZE:</span>
          <div class="card__sizes-buttons">
            <div
              class="card__sizes-button"
              v-for="(size, index) in this.sizes"
              :key="size.key"
              @click="select(size.key, size.isSelected)"
              :class="{
                selected: size.isSelected,
                notselected: !size.isSelected,
              }"
            >
              <button>
                {{ size.value }}
              </button>
            </div>
          </div>
        </div>
        <app-line></app-line>
        <div class="card__count">
          <select name="count" v-model="count">
            <option v-for="i in 5" :key="i">{{ i }}</option>
          </select>
          <app-button @click="addToCart" class="card__button" type="primary">
            ADD TO CART
          </app-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductPage",
  data() {
    return {
      count: 1,
      sizes: [],
      currentSize: "",
    };
  },
  computed: {
    prodItem() {
      return this.$store.state.products.filter(
        (el) => el.id == this.$route.params.id
      )[0];
    },
  },
  methods: {
    select(key) {
      for (let i = 0; i < this.sizes.length; i++) {
        if (this.sizes[i].key !== key) {
          this.sizes[i].isSelected = false;
        }
      }

      this.toggleSelection(key);
    },
    toggleSelection(key) {
      const stepsItem = this.sizes.find((item) => item.key === key);
      this.currentSize = stepsItem.value;
      if (stepsItem) {
        stepsItem.isSelected = !stepsItem.isSelected;
      }
    },
    addToCart() {
      this.$store.dispatch("addToCart", {
        id: this.prodItem.id,
        name: this.prodItem.name,
        price: this.prodItem.price,
        count: this.count,
        size: this.currentSize,
      });
    },
  },
  mounted() {
    this.currentSize = this.prodItem.sizes[0];
    let data = [];
    for (let index = 0; index < this.prodItem.sizes.length; index++) {
      data.push({
        key: index,
        value: this.prodItem.sizes[index],
        isSelected: false,
      });
    }
    this.sizes = data;
    console.log(data);
  },
};
</script>

<style></style>
