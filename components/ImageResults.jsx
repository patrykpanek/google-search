import React from 'react';
import PaginationButtons from './PaginationButtons';

export default function ImageResults({ results }) {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 ">
        {results.items.map((result) => {
          return (
            <div className="p-5" key={result.link}>
              <div className="group">
                <a href={result.image.contextLink}>
                  <img
                    className="group-hover:shadow-xl w-full h-60 object-contain"
                    src={result.link}
                    alt={result.title}
                  />
                </a>
                <a
                  className="group-hover:underline"
                  href={result.image.contextLink}
                >
                  <h2 className="truncate text-xl">{result.title}</h2>
                </a>
                <a
                  className="group-hover:underline"
                  href={result.image.contextLink}
                >
                  <p>{result.displayLink}</p>
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <PaginationButtons />
    </div>
  );
}