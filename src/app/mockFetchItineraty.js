function mockFetchItineraty() {
  return new Promise((resolve, reject) => {
    if (localStorage.getItem("itinerary")) {
      return setTimeout(
        () => resolve({ data: localStorage.getItem("itinerary") }),
        500
      );
    }
    return reject({ data: [] });
  });
}

export default mockFetchItineraty;
