import { PARTNERS } from "../../app/shared/PARTNERS";

export const selectAllPartners = (id) => {
  return PARTNERS;
};

export const selectFeaturedPartner = () => {
  return PARTNERS.find((partner) => partner.featured);
};
