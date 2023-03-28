import React from "react";
import Header from "./Header_2";
import Footer from "./Footer_2";

const About = () => {
  return (
    <>
      <Header />

      <div className="h-auto">
        <div className="text-center">
          <p className=" font-bold text-6xl my-16">About-Us</p>
        </div>

        <div className="grid grid-cols-2 mb-16">
          <div className="flex justify-center items-center">
            <img
              src="../images/Womens_Cover.jpg"
              alt="..."
              className="h-80 w-96"
            />
          </div>

          <div className="pr-16 pl-3">
            <div className="mb-6">
              <p className="font-semibold text-1xl">Introduction</p>
              <p className="text-xs">
                Welcome to our online store! We are thrilled to have you here.
                We have a wide variety of products to choose from, all carefully
                curated to bring you the best selection. Our team is dedicated
                to providing excellent customer service, fast shipping, and a
                seamless shopping experience. Thank you for choosing to shop
                with us and we hope you find everything you need. If you have
                any questions or concerns, please don't hesitate to reach out to
                us. We are always here to help.
              </p>
            </div>

            <div className="mb-6">
              <p className="font-semibold text-1xl">How We Can Help</p>
              <p className="text-xs">
                We provide high-quality products that meet the needs and
                expectations of our customers. This helps to ensure customer
                satisfaction and encourage repeat business. We also try to make
                sure that our website is user-friendly and easy to navigate, as
                this can make it easier for customers to find and purchase the
                products they are looking for. Providing excellent customer
                service is also crucial, as having a knowledgeable and helpful
                team can make a big difference in the shopping experience for
                our customers. We offer fast and reliable shipping options, as
                customers appreciate the convenience of having their orders
                delivered in a timely manner. Providing clear and detailed
                product information, including descriptions, images, and videos,
                also help customers make informed decisions about what to
                purchase. Finally, offering flexible payment options, such as
                credit cards and UPI, can make the checkout process smoother and
                more convenient for our customers.
              </p>
            </div>

            <div>
              <p className="font-semibold text-1xl">Address</p>
              <p className="text-xs">Warehouse No.5,</p>
              <p className="text-xs">Shivalik Properties,</p>
              <p className="text-xs">Ahmedabad, Gujarat- 380060</p>
              <p className="text-xs">M - 052555 / 448603</p>
              <p className="text-xs">Email - inf@onlineStore.com</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
