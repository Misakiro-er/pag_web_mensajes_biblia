export interface Message {
  id: number;
  verse: string;
  reference: string;
  reflection: string;
  category: Category;
}

export type Category = "Fuerza" | "Paz" | "Esperanza" | "Gratitud" | "Calma" | "Amor";

export const messages: Message[] = [
  {
    id: 1,
    verse: "No temas, porque yo estoy contigo.",
    reference: "Isaías 41:10",
    reflection: "Hoy no enfrentas nada sola; Dios camina contigo.",
    category: "Fuerza"
  },
  {
    id: 2,
    verse: "Mi paz les doy.",
    reference: "Juan 14:27",
    reflection: "Suelta lo que pesa y recibe calma.",
    category: "Paz"
  },
  {
    id: 3,
    verse: "Todo lo puedo en Cristo que me fortalece.",
    reference: "Filipenses 4:13",
    reflection: "Tu fuerza no viene de ti, viene de Él.",
    category: "Fuerza"
  },
  {
    id: 4,
    verse: "Porque yo sé los planes que tengo para ustedes.",
    reference: "Jeremías 29:11",
    reflection: "Aún en la incertidumbre, hay un propósito para ti.",
    category: "Esperanza"
  },
  {
    id: 5,
    verse: "Den gracias en toda circunstancia.",
    reference: "1 Tesalonicenses 5:18",
    reflection: "Agradece hoy, aunque sea solo por respirar.",
    category: "Gratitud"
  },
  {
    id: 6,
    verse: "Vengan a mí todos los que están cansados.",
    reference: "Mateo 11:28",
    reflection: "Está bien descansar. No tienes que hacerlo todo hoy.",
    category: "Calma"
  },
  {
    id: 7,
    verse: "El Señor es mi pastor, nada me falta.",
    reference: "Salmos 23:1",
    reflection: "Confía. Estás cuidada.",
    category: "Paz"
  },
  {
    id: 8,
    verse: "Más el que me escuche vivirá confiado.",
    reference: "Proverbios 1:33",
    reflection: "Escuchar a Dios te da paz en medio del ruido.",
    category: "Calma"
  },
  {
    id: 9,
    verse: "La esperanza no defrauda.",
    reference: "Romanos 5:5",
    reflection: "Esperar con fe es confiar antes de ver.",
    category: "Esperanza"
  },
  {
    id: 10,
    verse: "Por la mañana hazme saber de tu gran amor.",
    reference: "Salmos 143:8",
    reflection: "Cada amanecer es un nuevo abrazo de Dios.",
    category: "Gratitud"
  },
  {
    id: 11,
    verse: "Jehová peleará por vosotros, y vosotros estaréis tranquilos.",
    reference: "Éxodo 14:14",
    reflection: "No necesitas luchar sola. Dios pelea por ti.",
    category: "Fuerza"
  },
  {
    id: 12,
    verse: "En quietud y en confianza será vuestra fortaleza.",
    reference: "Isaías 30:15",
    reflection: "El descanso también es valentía.",
    category: "Calma"
  },
  {
    id: 13,
    verse: "Él da esfuerzo al cansado.",
    reference: "Isaías 40:29",
    reflection: "Cuando no puedas más, Él puede por ti.",
    category: "Fuerza"
  },
  {
    id: 14,
    verse: "Y la paz de Dios guardará vuestros corazones.",
    reference: "Filipenses 4:7",
    reflection: "Su paz protege lo que más te importa.",
    category: "Paz"
  },
  {
    id: 15,
    verse: "Él sana a los quebrantados de corazón.",
    reference: "Salmos 147:3",
    reflection: "Lo que está roto en ti, puede ser sanado.",
    category: "Esperanza"
  },
  {
    id: 16,
    verse: "Este es el día que hizo el Señor; regocijémonos.",
    reference: "Salmos 118:24",
    reflection: "Hoy es un regalo. Ábrelo con alegría.",
    category: "Gratitud"
  },
  {
    id: 17,
    verse: "Guarda tu corazón, porque de él mana la vida.",
    reference: "Proverbios 4:23",
    reflection: "Protege tu paz. No todo merece entrar.",
    category: "Calma"
  },
  {
    id: 18,
    verse: "El gozo del Señor es nuestra fuerza.",
    reference: "Nehemías 8:10",
    reflection: "No es fingir estar bien; es recordar quién te sostiene.",
    category: "Fuerza"
  },
  {
    id: 19,
    verse: "Confía en el Señor de todo corazón.",
    reference: "Proverbios 3:5",
    reflection: "Soltar el control es confiar en un amor más grande.",
    category: "Paz"
  },
  {
    id: 20,
    verse: "Grande es tu fidelidad.",
    reference: "Lamentaciones 3:23",
    reflection: "Cada día trae una nueva oportunidad de su gracia.",
    category: "Gratitud"
  },
  {
    id: 21,
    verse: "Dios es amor.",
    reference: "1 Juan 4:8",
    reflection: "Eres amada no por lo que haces, sino por quien eres.",
    category: "Amor"
  },
  {
    id: 22,
    verse: "Con amor eterno te he amado.",
    reference: "Jeremías 31:3",
    reflection: "Su amor por ti no tiene principio ni fin.",
    category: "Amor"
  },
  {
    id: 23,
    verse: "Nada nos podrá separar del amor de Dios.",
    reference: "Romanos 8:39",
    reflection: "Ni tus errores ni tus dudas pueden alejarte de su amor.",
    category: "Amor"
  },
  {
    id: 24,
    verse: "El amor es paciente, es bondadoso.",
    reference: "1 Corintios 13:4",
    reflection: "El amor verdadero no exige, no presiona. Simplemente es.",
    category: "Amor"
  },
  {
    id: 25,
    verse: "Ama a tu prójimo como a ti mismo.",
    reference: "Mateo 22:39",
    reflection: "Amarte a ti misma es parte de amar como Dios ama.",
    category: "Amor"
  },
  {
    id: 26,
    verse: "El amor todo lo cree, todo lo espera.",
    reference: "1 Corintios 13:7",
    reflection: "Amar es confiar en lo invisible y esperar lo imposible.",
    category: "Amor"
  },
  {
    id: 27,
    verse: "Nosotros amamos porque él nos amó primero.",
    reference: "1 Juan 4:19",
    reflection: "No tienes que ganarte su amor. Ya es tuyo.",
    category: "Amor"
  },
  {
    id: 28,
    verse: "El amor perfecto echa fuera el temor.",
    reference: "1 Juan 4:18",
    reflection: "Donde hay amor verdadero, el miedo no tiene lugar.",
    category: "Amor"
  }
];

export const categories: Category[] = ["Fuerza", "Paz", "Esperanza", "Gratitud", "Calma", "Amor"];

export function getRandomMessage(): Message {
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

export function getMessagesByCategory(category: Category): Message[] {
  return messages.filter(msg => msg.category === category);
}
