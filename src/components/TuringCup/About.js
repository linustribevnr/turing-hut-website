import React from "react";

export default function About() {
  return (
    <div>
      <h2
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        ABOUT
      </h2>
      <p
        style={{
          fontSize: "1.5rem",
          width: "70%",
          textAlign: "justify",
          margin: "auto"
        }}
      >
        <p>
          The Annual National level Flagship Coding Contest organized by Turing
          Hut, the programming club of VNR VJIET where college students across
          the nation participate in teams of 2, to win exciting cash prizes.
          <br />
          The shortlisted participants get to experience a visit to the
          institute where they again compete in an Off-site round under
          stipulated time limits.
          <br />
        </p>
      </p>
    </div>
  );
}
