import React, { useState } from "react";
import { Stepper } from "./components";
import logo from "../src/assets/img/facebook-5.svg";
import OnboardingOne from "./pages/OnboardingOne";
import OnboardingTwo from "./pages/OnboardingTwo";
import OnboardingThree from "./pages/OnboardingThree";
import OnboardingFour from "./pages/OnboardingFour";

function App() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState({
    user: {},
    workspace: {},
    setup: {},
  });

  const goNextPage = () => {
    if (page === 4) return;
    setPage((page) => page + 1);
  }

  const updateData = (type, newData) => {
    setData((data) => {
      return { ...data, [type]: newData };
    });
  }

  const submit = () => {
    console.log(data)
  }

  return (
    <div className="container">
      <div className="form__wrapper">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <Stepper value={page} numberSteps={4} />
        <div className="mt-4">
          {page === 1 && (
            <OnboardingOne
              data={data.user}
              update={updateData}
              onClick={goNextPage}
            />
          )}
          {page === 2 && (
            <OnboardingTwo
              data={data.workspace}
              update={updateData}
              onClick={goNextPage}
            />
          )}
          {page === 3 && (
            <OnboardingThree
              data={data.setup}
              update={updateData}
              onClick={goNextPage}
            />
          )}
          {page === 4 && <OnboardingFour data={data} />}
        </div>

        {page === 4 && (
          <button className="big__btn" type="submit" onClick={submit}>
            Launch Eden
          </button>
        )}
      </div>
    </div>
  );
}

export default App;



