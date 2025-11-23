/**
 * Re-export for backward compatibility
 * TODO: Update all imports to use @/data/vehicles
 */
export {
  vehicles,
  vehicles as cars,
  getCarById,
  getSimilarCars
} from "@/data/vehicles";

// Re-export types for backward compatibility
export type { Vehicle as Car } from "@/types";
