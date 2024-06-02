import React from "react";

const RefundPolicy = () => {
  return (
    <div className="leading-10 p-4 max-w-lg mx-auto">
      <h1 className="text-center text-3xl font-semibold">Refund Policy for ClipperMaster</h1>

      <p>
        Thank you for using ClipperMaster, the Chrome extension for clipping web page content. We strive to provide a
        seamless experience and ensure customer satisfaction. This Refund Policy outlines the guidelines for requesting
        refunds for the paid features of ClipperMaster. Please read this policy carefully before making a purchase.
      </p>

      <h2 className="text-xl font-semibold">1. Eligibility for Refunds</h2>
      <ul>
        <li>1.1. Refunds are applicable only for the paid features of ClipperMaster.</li>
        <li>1.2. Free trial users are not eligible for refunds as they have not made a payment.</li>
        <li>1.3. Refund requests must be made within 7 days of the original purchase date.</li>
      </ul>

      <h2 className="text-xl font-semibold">2. Valid Reasons for Refunds</h2>
      <ul>
        <li>
          2.1. Technical Issues: If you encounter significant technical issues or malfunctions that prevent you from
          using the paid features of ClipperMaster, you may be eligible for a refund.
        </li>
        <li>
          2.2. Unmet Expectations: If the paid features of ClipperMaster do not meet your reasonable expectations as
          described in the product documentation or marketing materials, you may be eligible for a refund.
        </li>
      </ul>

      <h2 className="text-xl font-semibold">3. Non-Eligible Reasons for Refunds</h2>
      <ul>
        <li>
          3.1. Change of Mind: Refunds will not be provided for cases where the user simply changes their mind or no
          longer wishes to use the paid features of ClipperMaster.
        </li>
        <li>
          3.2. Unauthorized Usage: If the user violates the terms of service or engages in unauthorized usage of
          ClipperMaster, refunds will not be granted.
        </li>
      </ul>

      <h2 className="text-xl font-semibold">4. Refund Process</h2>
      <ul>
        <li>
          4.1. To request a refund, please email our support team at tony@clippermaster.com with the following
          information:
          <ul>
            <li>Your name and contact information</li>
            <li>The purchase details (order number, purchase date)</li>
            <li>Reason for the refund request</li>
          </ul>
        </li>
        <li>
          4.2. Our support team will review your request within 7 business days and notify you of the refund decision.
        </li>
        <li>
          4.3. If your refund request is approved, the refund will be processed using the original payment method.
          Please note that it may take several business days for the refunded amount to appear in your account.
        </li>
      </ul>

      <h2 className="text-xl font-semibold">5. Discontinuation of Service</h2>
      <ul>
        <li>
          5.1. In the event that ClipperMaster discontinues its services or ceases to operate, users will be notified in
          advance, and eligible customers may be offered refunds for any unused portion of their subscription.
        </li>
      </ul>

      <p>
        Please note that this refund policy is subject to change, and any updates will be communicated to users through
        appropriate channels. For any questions or concerns regarding refunds, please contact our support team at
        tony@clippermaster.com.
      </p>
    </div>
  );
};

export default RefundPolicy;
