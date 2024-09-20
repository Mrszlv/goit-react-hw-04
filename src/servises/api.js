import axios from "axios";

export const fetchImages = async (query, page = 1) => {
  const { data } = await axios.get("https://api.unsplash.com/photos", {
    params: {
      client_id: "_FGiO_vXXvx1ShKCkjhTMxThVvtc1JA7tmR_UezrG3U",
      query: query,
      page: page,
      per_page: 10,
    },
  });
  return data.results;
};
