<template>
  <div class="product">
    <div class="product-inner">
      <div class="product-inner__image">
        <img :src="require(`/src/assets/Products/${image}`)" alt="" />
      </div>
      <div class="product-inner__info">
        <h1>{{ name }}</h1>
        <div class="product-inner__price">
          <span>{{ price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product",
  props: {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.product {
  min-width: 25%;
  margin: 0px 14px;
}
.product-inner {
  padding: 0px 20px;
  &__image {
    display: flex;
    justify-content: center;
    align-items: center;
    // background-color: #ececec;
    transition: 0.3s ease-in-out;
    img {
      width: 320px;
      max-height: 400px;
      object-fit: cover;
    }
    :hover {
      cursor: pointer;
      transition: 0.3s ease;
      opacity: 0.7;
    }
  }

  &__info {
    flex-wrap: 900;
    font-size: 1rem;
    margin-top: 26px;
    text-align: center;
  }

  &__price {
    margin-top: 16px;
    color: #f6eae1;
  }
}
</style>
