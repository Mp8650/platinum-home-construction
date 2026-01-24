export async function getSeoData() {
  try {
    const res = await fetch("/seo.json");

    if (!res.ok) {
      throw new Error("Failed to fetch SEO data");
    }
    const data=await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("SEO fetch error:", error);
    return null;
  }
}
