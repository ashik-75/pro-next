import { fetchData } from "./data";

export interface Root {
  images: Images;
  change_keys: string[];
}

export interface Images {
  base_url: string;
  secure_base_url: string;
  backdrop_sizes: string[];
  logo_sizes: string[];
  poster_sizes: string[];
  profile_sizes: string[];
  still_sizes: string[];
}

const fetchApiConfig = async () => {
  fetchData<Root>({ url: "/configuration", query: {} }).then((res) => {
    const baseUrl = res?.images?.secure_base_url;
    const url = {
      backdrop_w1280: baseUrl + "w1280",
      backdrop_w780: baseUrl + "w780",
      backdrop_w300: baseUrl + "w300",
      poster: baseUrl + "w342",
      poster_w342: baseUrl + "w342",
      profile: baseUrl + "w185",
    };
  });
};
