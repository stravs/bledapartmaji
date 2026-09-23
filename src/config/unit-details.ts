// Verified against each unit's page at https://www.bledapartmaji.si/.
// Source paths match the unit IDs below. Breakfast is listed, not stated to be included.
const common = {
  bedrooms: 1,
  bathrooms: 1,
  wifi: true,
  airConditioning: true,
  refrigerator: true,
  satelliteTv: true,
  petsAllowed: false,
  smokingOnTerrace: true,
  touristTaxListed: true,
};
const vista = { ...common, property: 'vista', floor: 1, sharedEntrance: false, sharedTerrace: true, kitchen: true, cot: true, extraBed: false, breakfast: false, standardTv: true };
const sova = { ...common, property: 'sova', floor: 0, sharedEntrance: false, sharedTerrace: false, balcony: false, breakfast: true, standardTv: true };
export const unitDetails = {
  'bled-vista-apartma-1': { ...vista, area: 29, outdoorArea: 5, capacity: '2+0', balcony: true },
  'bled-vista-apartma-2': { ...vista, area: 37, outdoorArea: 10, capacity: '3+0', balcony: true },
  'bled-vista-apartma-3': { ...vista, area: 37, outdoorArea: 7, capacity: '3+0', balcony: true },
  'bled-vista-apartma-4': { ...vista, area: 23, outdoorArea: 12, capacity: '2+0', balcony: false },
  'nastanitev-soba-b': { ...vista, floor: 0, sharedEntrance: true, kitchen: false, cot: false, standardTv: false, area: 12, outdoorArea: 16, capacity: '2+0', balcony: false },
  'apartma-sova': { ...sova, area: 24, outdoorArea: 15, capacity: '2+1', kitchen: true, cot: true, extraBed: true },
  'deluxe-soba-33': { ...sova, area: 11, outdoorArea: 4, capacity: '2+0', kitchen: false, cot: false, extraBed: false },
};
