/**
 * Shared type definitions for DadaRentCar
 */

export type GearboxType = "Automatic" | "Manual";
export type FuelType = "Diesel" | "Petrol" | "Hybrid" | "Electric";
export type VehicleStatus = "Available" | "Reserved" | "In Preparation";

export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  category: string;
  image: string;
  images?: string[];
  dailyPrice: number;
  monthlyPrice: number;
  gearbox: GearboxType;
  fuelType: FuelType;
  seats: number;
  status: VehicleStatus;
  badge?: string;
  description?: string;
  features?: string[];
}

export interface VehicleCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon?: string;
}

export interface BookingFormData {
  vehicleId: string;
  pickupDate: Date;
  returnDate: Date;
  pickupLocation: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  withInsurance: boolean;
  additionalNotes?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
