import axios from "axios";

export const fetchImages = async ({ query, page = 1 }) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query: query,
      page: page,
      client_id: "_FGiO_vXXvx1ShKCkjhTMxThVvtc1JA7tmR_UezrG3U",
    },
  });
  return response.data;
};
