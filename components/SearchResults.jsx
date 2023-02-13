import React from 'react';
import Parser from 'html-react-parser';

export default function SearchResults({ results }) {
  return (
    <div className="w-full mx-auto px-3 sm:pl-[5%] md:pl-[15%] lg:pl-52">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {results.searchInformation.formattedTotalResults} results (
        {results.searchInformation.formattedSearchTime} seconds)
      </p>
      {results.items.map((item) => {
        return (
          <div key={item.link} className="max-w-xl mb-8">
            <div className="group">
              <a className="text-sm truncate" href={item.link}>
                {item.formattedUrl}
              </a>
              <a
                className="group-hover:underline decoration-blue-800"
                href={item.link}
              >
                <h2 className="truncate text-xl font-medium text-blue-800">
                  {item.title}
                </h2>
              </a>
            </div>
            <p>{Parser(item.htmlSnippet)}</p>
          </div>
        );
      })}
    </div>
  );
}
