import { useState } from "preact/hooks";

interface BouncyCardProps {
  emoji: string;
  title: string;
  description: string;
  color: string;
}

export default function BouncyCard({ emoji, title, description, color }: BouncyCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const colorClasses = {
    orange: 'bg-gradient-to-br from-orange-100/70 to-amber-100/50 border-orange-200/60 hover:from-orange-200/80 hover:to-amber-200/60',
    green: 'bg-gradient-to-br from-emerald-100/70 to-teal-100/50 border-emerald-200/60 hover:from-emerald-200/80 hover:to-teal-200/60',
    blue: 'bg-gradient-to-br from-blue-100/70 to-purple-100/50 border-blue-200/60 hover:from-blue-200/80 hover:to-purple-200/60',
    red: 'bg-gradient-to-br from-rose-100/70 to-pink-100/50 border-rose-200/60 hover:from-rose-200/80 hover:to-pink-200/60'
  };
  
  return (
    <div 
      class={`p-8 backdrop-blur-md rounded-[2rem] shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] transition-all duration-300 cursor-pointer border-2 shadow-inner ${
        colorClasses[color as keyof typeof colorClasses] || colorClasses.orange
      } ${
        isHovered 
          ? 'scale-108 shadow-[0_16px_48px_0_rgba(31,38,135,0.15)] translate-y-[-2px]' 
          : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div class={`text-4xl mb-5 transition-transform duration-300 ${
        isHovered ? 'scale-125 rotate-12' : ''
      }`}>
        {emoji}
      </div>
      <h3 class="text-xl font-bold mb-3 text-black">{title}</h3>
      <p class="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}