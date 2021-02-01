import React, { useState, useEffect } from "react";
import { GifGridItem } from "./GifGridItem";

import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);


  return (
    <>
      <h3>{category}</h3>
      {loading && <h3 className="animate__animated animate__flash">Cargando...</h3>}
      <ol className="card-grid">
        {images.map((img) => {
          {
            return <GifGridItem key={img.id} {...img} />;
          }
        })}
      </ol>
    </>
  );
};


