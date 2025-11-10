"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { vehicleCategories } from "@/lib/constants";

interface NavbarDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NavbarDropdown = ({ isOpen, onClose }: NavbarDropdownProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 mt-1 bg-[#0066FF] rounded-lg shadow-lg overflow-hidden z-50 min-w-[200px]"
        >
          {vehicleCategories.map((category) => (
            <Link
              key={category.id}
              href={`/vehicles/category/${category.slug}`}
              onClick={onClose}
              className="block px-6 py-3 text-white hover:bg-white hover:text-[#0066FF] transition-colors text-sm font-semibold"
            >
              {category.name}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
