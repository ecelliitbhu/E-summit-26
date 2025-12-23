import React, { FunctionComponent } from "react";
import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { book_data } from "./book_data";
import BookCard from "../../components/BookCard";

export const metadata: Metadata = {
  referrer: "origin-when-cross-origin",
  title: {
    default: "Book Recommendations | E-Summit'26 IIT BHU",
    template: "%s | Book Recommendations | E-Summit'26 IIT BHU",
  },
};

const RecommendationsPage: FunctionComponent = () => {
  return (
    <section>
      <div className="pt-24 w-full min-h-screen flex flex-col items-center">
        <h1 className="text-6xl m-4 font-semibold">Book Recommendations</h1>
            <div className="flex flex-wrap justify-center">
              {book_data.map((book, index) => (
                <BookCard
                  title={book.title}
                  author={book.author}
                  imgURL={book.imgURL}
                  reviews={book.reviews}
                  index={index} // Passing the index prop
                  key={index}
                />
              ))}
            </div>
      </div>
    </section>
  );
};

export default RecommendationsPage;
