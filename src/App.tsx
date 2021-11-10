import React from "react";
import * as GS from "./global-styles";
import Providers from "./providers";
import GridSection from "./sections/GridSection";
import InputSection from "./sections/InputSection";
function App() {
  return (
    <GS.App>
      <Providers>
        <InputSection />
        <GS.StyledFlexContainer>
          <GridSection />
        </GS.StyledFlexContainer>
      </Providers>
    </GS.App>
  );
}

export default App;
