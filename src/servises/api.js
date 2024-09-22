import axios from "axios";

export const fetchImages = async (query, page = 1) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      client_id: "_FGiO_vXXvx1ShKCkjhTMxThVvtc1JA7tmR_UezrG3U",
      query: query,
      page: page,
      per_page: 16,
    },
  });
  return response.data;
};
