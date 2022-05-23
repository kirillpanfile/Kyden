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
        <img
          :src="require(`/src/assets/Products/${prodItem.image}`)"
          alt="product"
        />
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
              v-for="size in this.sizes"
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
          <div
            class="select-field select-field--quantity select-field--transparent select-field--base select-field--cart-item"
          >
            <select name="count" v-model="count" class="select-field__select">
              <option v-for="i in 5" :key="i">{{ i }}</option>
            </select>
            <div class="select-field__dropdown-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
                ></path>
              </svg>
            </div>
          </div>
          <app-button @click="addToCart" class="card__button" type="primary">
            ADD TO CART
          </app-button>
        </div>
      </div>
    </div>
  </div>
  <div class="featured-section">
    <div class="featured__container featured-section__wrapper">
      <div class="featured__data">
        <h1 class="featured__title">YOU MAY ALSO LIKE</h1>
      </div>
      <div class="featured-row">
        <div v-for="item in products" :key="item.id">
          <product
            :image="item.image"
            :name="item.name"
            :price="item.price"
            :id="item.id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import product from "/src/components/myProduct.vue";
export default {
  name: "ProductPage",
  components: {
    product,
  },
  data() {
    return {
      count: 1,
      sizes: [],
      currentSize: "S" || "M",
    };
  },
  computed: {
    prodItem() {
      return this.$store.state.products.filter(
        (el) => el.id == this.$route.params.id
      )[0];
    },
    products() {
      try {
        let tmp = this.$store.state.products;
        return Object.values(tmp)
          .map((el) => (el = JSON.parse(JSON.stringify(el))))
          .sort((a, b) => b.stars - a.stars)
          .slice(0, 4);
      } catch (error) {
        console.table(error);
      }
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
        image: this.prodItem.image,
        count: this.count,
        size: this.currentSize,
      });
      this.$swal("Item added to cart", "", "success");
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
    this.select(0);
  },
};
</script>

<style></style>
