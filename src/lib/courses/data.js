export const fetchCourses = async (searchTerm = '') => {


  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ideas?search=${searchTerm}`,
    {
      cache: "no-store",
    });
  const data = await res.json();
  console.log(data);

  return data || [];
};

// export const fetchCourses = async (searchTerm = "") => {

//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/ideas?search=${searchTerm}`,
//     {
//       cache: "no-store",
//     }
//   );

//   const data = await res.json();

//   return data || [];
// };


export const fetchFeaturedCourses = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ideas/featured`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data || [];
};