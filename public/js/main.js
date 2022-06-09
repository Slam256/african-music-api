// eslint-disable-next-line no-unused-vars
async function addHeart(title) {
  try {
    const response = await fetch("addOneHeart", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        titleS: title,
      }),
    });
    const data = await response.json();
    // eslint-disable-next-line no-restricted-globals
    location.reload();
    return (data);
  } catch (err) {
    return (err);
  }
}
