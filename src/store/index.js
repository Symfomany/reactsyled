const Store = {
  data: {
    title: "Je suis Julien",
    subtitle: "Je suis un soustitre du Store"
  },
  get(key) {
    return this.data[key];
  },
  register(key, value) {
    this.data[key] = value;
  }
};

export default Store;
