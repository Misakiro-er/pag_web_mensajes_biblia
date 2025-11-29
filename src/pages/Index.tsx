import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RefreshCw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import WelcomeScreen from "@/components/WelcomeScreen";
import MessageCard from "@/components/MessageCard";
import CategoryMenu from "@/components/CategoryMenu";
import { messages, getRandomMessage, getMessagesByCategory, Category, Message } from "@/data/messages";

export default function Index() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentMessage, setCurrentMessage] = useState<Message>(getRandomMessage());
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const handleStart = () => {
    console.log("Botón Comenzar presionado");
    setShowWelcome(false);
  };

  const handleBackToWelcome = () => {
    setShowWelcome(true);
    setSelectedCategory(null);
  };

  const handleNextMessage = () => {
    let newMessage: Message;
    
    if (selectedCategory) {
      const categoryMessages = getMessagesByCategory(selectedCategory);
      const filteredMessages = categoryMessages.filter(msg => msg.id !== currentMessage.id);
      
      if (filteredMessages.length > 0) {
        newMessage = filteredMessages[Math.floor(Math.random() * filteredMessages.length)];
      } else {
        newMessage = categoryMessages[0];
      }
    } else {
      const filteredMessages = messages.filter(msg => msg.id !== currentMessage.id);
      newMessage = filteredMessages[Math.floor(Math.random() * filteredMessages.length)];
    }
    
    setCurrentMessage(newMessage);
  };

  const handleSelectCategory = (category: Category | null) => {
    setSelectedCategory(category);
    
    if (category) {
      const categoryMessages = getMessagesByCategory(category);
      setCurrentMessage(categoryMessages[Math.floor(Math.random() * categoryMessages.length)]);
    } else {
      setCurrentMessage(getRandomMessage());
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fondo con gradiente suave */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-primary/10" />
      
      {/* Textura sutil */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      {/* Contenido */}
      <AnimatePresence mode="wait">
        {showWelcome ? (
          <WelcomeScreen key="welcome" onStart={handleStart} />
        ) : (
          <motion.main
            key="message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 gap-8"
          >
            {/* Botón de regreso a inicio */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="absolute top-6 left-6"
            >
              <Button
                onClick={handleBackToWelcome}
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-secondary/50 transition-colors"
              >
                <Home className="w-5 h-5" />
              </Button>
            </motion.div>

            {/* Tarjeta del mensaje */}
            <AnimatePresence mode="wait">
              <MessageCard message={currentMessage} />
            </AnimatePresence>

            {/* Botones de acción */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex items-center gap-4 flex-wrap justify-center"
            >
              <Button
                onClick={handleNextMessage}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 text-base rounded-full shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:scale-105 group"
              >
                <RefreshCw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-500" />
                Siguiente Mensaje
              </Button>

              <CategoryMenu 
                onSelectCategory={handleSelectCategory}
                selectedCategory={selectedCategory}
              />
            </motion.div>

            {/* Footer */}
            <motion.footer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-6 text-center"
            >
              <p className="text-sm text-muted-foreground">
                Encuentra paz en cada palabra
              </p>
            </motion.footer>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
