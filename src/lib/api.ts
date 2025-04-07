import QLclient from "./GraphqlClient";
import {
  heroSectionQuery,
  clientLogoSection,
  worksQuery,
  testimonialsQuery,
  customProductQuery,
  eachWorkQuery,
} from "./queries";

async function getData(params: string) {
  return QLclient.request(params);
}

export async function getHeroSectionData() {
  const response: any = await getData(heroSectionQuery);

  return response.heroSectionCollection.items[0];
}

export async function getClientsLogos() {
  const response: any = await getData(clientLogoSection);
  return response.clientLogosSectionCollection.items;
}

export async function getWorkData() {
  const response: any = await getData(worksQuery);

  return response.projectCollection.items;
}
export async function getEachWork(id: string) {
  const response: any = await getData(eachWorkQuery(id));
  if (response.projectCollection.items.length <= 0) return {};
  return response.projectCollection.items[0];
}
export async function getTestimonialData() {
  const response: any = await getData(testimonialsQuery);

  return response.testimonialCollection.items;
}

export async function getCustomProductData() {
  const response: any = await getData(customProductQuery);

  return response.customProductCollection.items;
}
