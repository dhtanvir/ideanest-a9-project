import { auth } from "@/lib/auth";
import { Chip } from "@heroui/react";
import { BookOpen, Clock, BarChart, Users } from "lucide-react";
import { headers } from "next/headers";
import Image from "next/image";

const fetchSingleCourse = async (id, token) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ideas/${id}`, {
    // headers: {
    //     authorization: `Bearer ${token}` || ""
    // }
  });
  const data = res.json();
  return data || {};
};

export default async function IdeasDetails({ params }) {
  const { id } = await params;
  // const { token } = await auth.api.getToken({
  //     headers: await headers(),
  // });

  //   const ideas = await fetchSingleCourse(id);
  //   const course = await fetchSingleCourse(id, token);
  const idea = await fetchSingleCourse(id);

  if (!idea) {
    return (
      <div className="text-center py-20 text-red-500 font-bold">
        Idea not found
      </div>
    );
  }

  const {
    ideaTitle,
    shortDescription,
    detailedDescription,
    category,
    imageURL,
    estimatedBudget,
    targetAudience,
    problemStatement,
    proposedSolution,
    tags = [],
  } = idea;

  console.log(idea, "this is single idea details");

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-8">
          {/* IMAGE */}
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl">
            <Image
              src={
                imageURL ||
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600"
              }
              alt="Course Image"
              height={400}
              width={640}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />

            <div className="absolute top-4 left-4">
              <Chip color="primary">{category}</Chip>
            </div>
          </div>

          {/* TITLE */}
          <div>
            <h1 className="text-4xl font-black">{ideaTitle}</h1>
            <p className="text-gray-500 mt-2">{shortDescription}</p>
          </div>

          {/* DESCRIPTION */}
          <div className="space-y-4">
            <p>
              <strong>Description:</strong> {detailedDescription}
            </p>
            <p>
              <strong>Problem:</strong> {problemStatement}
            </p>
            <p>
              <strong>Solution:</strong> {proposedSolution}
            </p>
            <p>
              <strong>Target Audience:</strong> {targetAudience}
            </p>
          </div>

          {/* TAGS FIXED */}
          <div className="flex flex-wrap gap-3">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-slate-100 rounded-full text-sm font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white p-6 rounded-2xl shadow-lg space-y-6">
          <div>
            <p className="text-sm text-gray-500">Budget</p>
            <h2 className="text-3xl font-black text-blue-600">
              {estimatedBudget}
            </h2>
          </div>

          <div>
            <p className="text-sm text-gray-500">Category</p>
            <p className="font-bold">{category}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Target Audience</p>
            <p className="font-medium">{targetAudience}</p>
          </div>
          {/* comments  */}
          <div></div>
        </div>
      </div>
    </div>
  );
}

// const NotFound = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 py-24 text-center">
//       <h2 className="text-2xl font-bold text-red-500">Course not found</h2>
//       <p className="text-muted-foreground mt-2">
//         Please log in to view protected course details.
//       </p>
//     </div>
//   );
// };
