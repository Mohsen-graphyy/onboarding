function Cards(baseAxios) {
  return {
    getCard() {
      return baseAxios.get("/jobs");
    },
  };
}

export { Cards }
