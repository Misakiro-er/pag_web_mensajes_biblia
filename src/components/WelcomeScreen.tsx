import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WelcomeScreenProps {
  onStart: () => void;
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center px-4 relative z-10"
    >
      <div className="text-center space-y-8 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-10 h-10 icon-white" />
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl title-chewy font-semibold">
            Palabra Diaria
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Un mensaje de paz y esperanza para tu día
          </p>
        </motion.div>

        <div className="relative z-20">
          <Button
            onClick={() => {
              console.log("Click detectado en botón Comenzar");
              onStart();
            }}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-10 py-7 text-lg rounded-full shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:scale-105 group cursor-pointer"
          >
            Comenzar
            <ArrowRight className="ml-2 w-5 h-5 icon-white group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
