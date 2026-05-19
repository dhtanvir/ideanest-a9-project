import { Button, Chip } from "@heroui/react";
import { BookOpen, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const IdeasCard = ({ idea }) => {
  if (!idea) return null;

  const {
    _id,
    ideaTitle,
    shortDescription,
    category,
    imageURL,
    estimatedBudget,
  } = idea;
  return (
    <div className="group flex flex-col bg-white rounded-4xl border border-slate-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden aspect-16/10">
        <Image
          alt="Course Image"
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          src={
            imageURL ||
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600"
          }
          fill
        />
        <div className="absolute top-4 right-4">
          <Chip
            color="primary"
            variant="solid"
            className="font-bold shadow-lg shadow-blue-600/20"
          >
            {category}
          </Chip>
        </div>
      </div>
      <div className="p-8 flex flex-col grow space-y-4">
        <div className="space-y-2">
          <Link href={`/ideas/${_id}`}>
            <h3 className="text-xl font-bold leading-tight line-clamp-2 hover:text-blue-600 transition-colors">
              {ideaTitle}
            </h3>
          </Link>
          
        </div>

        <div className="flex items-center gap-4 text-xs text-slate-500 font-bold">
          {shortDescription}
        </div>

        <div className="pt-6 mt-auto border-t border-slate-100 flex justify-between items-center">
          <span className="text-2xl font-black text-blue-600">
            {estimatedBudget}
          </span>

         <Link href={`/ideas/${_id}`}>
            <Button
              variant="outline"
              color="primary"
              className="font-bold rounded-full px-6 shadow-lg shadow-blue-600/20"
            >
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IdeasCard;
