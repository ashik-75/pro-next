import { fetchData } from "@/lib/data";
import CategoryList from "./category-list";

const Category = async () => {
  const categories = await fetchData<string[]>({
    url: "products/categories",
    query: {},
  });

  return <CategoryList categories={categories} />;
};

export default Category;
