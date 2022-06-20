import React, { useState } from "react";
import { UnstyledList } from "./Holler.styles";

export default function LetsConnect() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end", zIndex: 1 }}>
        <ul>
          <UnstyledList>Let's connect!</UnstyledList>
          <div>
            <UnstyledList>
              <a href="shelikestocode@gmail.com">shelikestocode@gmail.com</a>
            </UnstyledList>
          </div>
          <div>
            <UnstyledList>
              <a href="https://www.linkedin.com/in/chelsswylie/">LINKEDIN</a>
            </UnstyledList>
          </div>
        </ul>
      </div>
      {/* <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div>
          <a href="https://www.linkedin.com/in/chelsswylie/">LINKEDIN</a>
        </div>
      </div> */}
    </>
  );
}
