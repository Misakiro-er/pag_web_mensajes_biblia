import { motion } from "framer-motion";
import { Message } from "@/data/messages";

interface MessageCardProps {
  message: Message;
}

export default function MessageCard({ message }: MessageCardProps) {
  return (
    <motion.div
      key={message.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="verse-card max-w-2xl w-full mx-auto"
    >
      <div className="space-y-6">
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-foreground leading-relaxed text-center"
        >
          "{message.verse}"
        </motion.blockquote>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-base md:text-lg text-muted-foreground font-medium text-center"
        >
          {message.reference}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="pt-4 border-t border-border/30"
        >
          <p className="text-base md:text-lg text-foreground/80 text-center italic">
            {message.reflection}
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex justify-center pt-2"
        >
          <span className="px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium">
            {message.category}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
