"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Input,
  TextArea,
  Select,
  SelectTrigger,
  SelectValue,
  SelectIndicator,
  SelectPopover,
  ListBox,
  ListBoxItem,
} from "@heroui/react";

import { BookPlus } from "lucide-react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const CATEGORIES = [
  "Tech",
  "Education",
  "Health",
  "AI",
  "Travel",
  "E-commerce",
  "Food",
  "Finance",
];

const AddIdeaPage = () => {
  const handelSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const addData = Object.fromEntries(formData.entries());

    // tags string → array
    addData.tags = addData.tags
      ? addData.tags.split(",").map((tag) => tag.trim())
      : [];

    // userId add
    const session = await authClient.getSession(); 
    addData.userId = session?.user?.id;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ideas`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        
      },
      body: JSON.stringify(addData),
    });

    const ideasData = await res.json();

    toast.success('Successfully Add your Ideas!')
    redirect('/ideas')


    // console.log("add Data", ideasData);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-2xl space-y-10">
        <div className="space-y-2 text-center">
          <div className="mx-auto w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-600 mb-4">
            <BookPlus className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-black text-slate-900">
            Create New{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-blue-800">
              Idea
            </span>
          </h1>
          <p className="text-slate-500 font-medium">
            Share your idea with the world
          </p>
        </div>
        <form
          onSubmit={handelSubmit}
          className="space-y-8 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Idea Title */}
            <div className="space-y-2">
              <label
                htmlFor="title"
                className="text-sm font-bold text-slate-700 ml-1"
              >
                Idea Title <span className="text-red-500">*</span>
              </label>
              <Input
                id="ideaTitle"
                name="ideaTitle"
                required
                placeholder="E.g., Next-gen AI Assistant"
                className="w-full h-12 border-2 border-slate-200 focus-within:border-indigo-600 rounded-xl bg-white transition-all duration-300 shadow-none"
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">
                Category <span className="text-red-500">*</span>
              </label>
              <Select
                id="category"
                name="category"
                required
                placeholder="Select a category"
                className="w-full"
              >
                <SelectTrigger className="h-12 border-2 border-slate-200 data-[focus-within=true]:border-indigo-600 rounded-xl bg-white transition-all duration-300 flex items-center px-4 shadow-none outline-none group">
                  <div className="flex items-center gap-3 w-full">
                    <SelectValue className="font-medium text-slate-600" />
                  </div>
                </SelectTrigger>
                <SelectPopover className="bg-white border border-slate-200 shadow-2xl rounded-xl p-2 mt-2">
                  <ListBox>
                    {CATEGORIES.map((cat) => (
                      <ListBoxItem
                        key={cat}
                        id={cat}
                        className="px-4 py-2 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg cursor-pointer transition-colors font-medium"
                      >
                        {cat}
                      </ListBoxItem>
                    ))}
                  </ListBox>
                </SelectPopover>
              </Select>
            </div>

            {/* Short Description */}
            <div className="md:col-span-2 space-y-2">
              <label
                htmlFor="shortDescription"
                className="text-sm font-bold text-slate-700 ml-1"
              >
                Short Description <span className="text-red-500">*</span>
              </label>
              <Input
                id="shortDescription"
                name="shortDescription"
                required
                placeholder="A one-sentence summary of your idea"
                className="w-full h-12 border-2 border-slate-200 focus-within:border-indigo-600 rounded-xl bg-white transition-all duration-300 shadow-none"
              />
            </div>

            {/* Detailed Description */}
            <div className="md:col-span-2 space-y-2">
              <label
                htmlFor="description"
                className="text-sm font-bold text-slate-700 ml-1"
              >
                Detailed Description <span className="text-red-500">*</span>
              </label>
              <TextArea
                id="detailedDescription"
                name="detailedDescription"
                required
                placeholder="Explain how your idea works in detail..."
                className="w-full h-36 border-2 border-slate-200 focus-within:border-indigo-600 rounded-xl bg-white transition-all duration-300 shadow-none resize-y p-3"
              />
            </div>

            {/* Tags */}
            <div className="space-y-2">
              <label
                htmlFor="tags"
                className="text-sm font-bold text-slate-700 ml-1"
              >
                Tags
              </label>
              <Input
                id="tags"
                name="tags"
                placeholder="innovation, tech, startup (comma-separated)"
                className="w-full h-12 border-2 border-slate-200 focus-within:border-indigo-600 rounded-xl bg-white transition-all duration-300 shadow-none"
              />
            </div>

            {/* Image URL */}
            <div className="space-y-2">
              <label
                htmlFor="thumbnail"
                className="text-sm font-bold text-slate-700 ml-1"
              >
                Image URL
              </label>
              <Input
                id="imageURL"
                name="imageURL"
                type="url"
                placeholder="https://example.com/image.jpg"
                className="w-full h-12 border-2 border-slate-200 focus-within:border-indigo-600 rounded-xl bg-white transition-all duration-300 shadow-none"
              />
            </div>

            {/* Estimated Budget */}
            <div className="space-y-2">
              <label
                htmlFor="budget"
                className="text-sm font-bold text-slate-700 ml-1"
              >
                Estimated Budget
              </label>
              <Input
                id="estimatedBudget"
                name="estimatedBudget"
                placeholder="10k - 50k"
                startContent={<span className="text-slate-500 text-sm">$</span>}
                className="w-full h-12 border-2 border-slate-200 focus-within:border-indigo-600 rounded-xl bg-white transition-all duration-300 shadow-none"
              />
            </div>

            {/* Target Audience */}
            <div className="space-y-2">
              <label
                htmlFor="targetAudience"
                className="text-sm font-bold text-slate-700 ml-1"
              >
                Target Audience
              </label>
              <Input
                id="targetAudience"
                name="targetAudience"
                placeholder="Who is this for?"
                className="w-full h-12 border-2 border-slate-200 focus-within:border-indigo-600 rounded-xl bg-white transition-all duration-300 shadow-none"
              />
            </div>

            {/* Problem Statement */}
            <div className="space-y-2">
              <label
                htmlFor="problemStatement"
                className="text-sm font-bold text-slate-700 ml-1"
              >
                Problem Statement
              </label>
              <TextArea
                id="problemStatement"
                name="problemStatement"
                placeholder="What problem are you solving?"
                className="w-full h-28 border-2 border-slate-200 focus-within:border-indigo-600 rounded-xl bg-white transition-all duration-300 shadow-none resize-y p-3"
              />
            </div>

            {/* Proposed Solution */}
            <div className="space-y-2">
              <label
                htmlFor="proposedSolution"
                className="text-sm font-bold text-slate-700 ml-1"
              >
                Proposed Solution
              </label>
              <TextArea
                id="proposedSolution"
                name="proposedSolution"
                placeholder="How does your idea solve this problem?"
                className="w-full h-28 border-2 border-slate-200 focus-within:border-indigo-600 rounded-xl bg-white transition-all duration-300 shadow-none resize-y p-3"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              color="primary"
              type="submit"
              size="lg"
              className="font-bold rounded-xl h-12 px-6 bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-md"
            >
              Submit Idea to Vault
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddIdeaPage;
