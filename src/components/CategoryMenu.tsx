import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { categories, Category } from "@/data/messages";

interface CategoryMenuProps {
  onSelectCategory: (category: Category | null) => void;
  selectedCategory: Category | null;
}

export default function CategoryMenu({ onSelectCategory, selectedCategory }: CategoryMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.4 }}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-6 py-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-105 border-2"
          >
            <Filter className="w-5 h-5 mr-2" />
            {selectedCategory || "Categorías"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align="center" 
          className="w-48 mt-2 rounded-2xl p-2 shadow-[var(--shadow-medium)]"
        >
          <DropdownMenuItem
            onClick={() => onSelectCategory(null)}
            className={`rounded-xl px-4 py-3 cursor-pointer transition-colors ${
              selectedCategory === null ? "bg-primary text-primary-foreground" : ""
            }`}
          >
            Todas
          </DropdownMenuItem>
          {categories.map((category) => (
            <DropdownMenuItem
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`rounded-xl px-4 py-3 cursor-pointer transition-colors ${
                selectedCategory === category ? "bg-primary text-primary-foreground" : ""
              }`}
            >
              {category}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </motion.div>
  );
}
