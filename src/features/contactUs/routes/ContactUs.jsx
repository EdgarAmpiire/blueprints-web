import React from "react";
import { MainLayout } from "../../../components/layout/MainLayout";
import { Form } from "../components/Form";


export const ContactUs = () => {
  return (
    <div>
      <MainLayout page="contact-us">
      {/* <div className="flex flex-col  justify-center">
        <div className="lg:max-w-7xl max-w-4xl"> */}
        <Form />
        {/* </div>
        </div> */}
      </MainLayout>
    </div>
  );
};
