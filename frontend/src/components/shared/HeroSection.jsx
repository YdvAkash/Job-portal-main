import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setHomeSearchJobByText } from "../../store/jobSlice";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const [query, setQuery] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    dispatch(setHomeSearchJobByText(query));
    navigate("/browse");
  };

  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium">
          No.1 Job Hunt Website
        </span>
        <h1 className="font-bold text-5xl">
          Search, Apply & <br /> Get Your{" "}
          <span className="text-[#6a38c2]">Dream Jobs</span>
        </h1>
        <p className="text-gray-700">
          Unlock endless career opportunities with just a click. Discover roles that match your passion, skills, and ambition.
        </p>
        <form
          onSubmit={searchJobHandler}
          className="flex gap-2 mx-auto w-1/3 p-2 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white items-center"
        >
          <Input
            type="text"
            placeholder="Find Your Dream Job."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 border-none focus:ring-0"
          />
          <Button
            type="submit" // Set button type to "submit"
            className="bg-[#6a38c2] hover:bg-[#522b95] text-white px-4 py-2"
          >
            <Search />
          </Button>
        </form>
      </div>
    </div>
  );
}

export default HeroSection;
