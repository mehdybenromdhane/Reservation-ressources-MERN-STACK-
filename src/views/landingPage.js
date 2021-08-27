import React, { useContext, useEffect, useState } from "react";

export default function Landing() {
  return (
    <>
      <div class="container">
        <section class="screen left">
          <h1>Mens Fashion</h1>
          <button>
            <a href="#" class="button">
              Learn More
            </a>
          </button>
        </section>

        <section class="screen right">
          <h1>Womens Fashion</h1>
          <button>
            <a href="#" class="button">
              Learn More
            </a>
          </button>
        </section>
      </div>
      ›
    </>
  );
}
