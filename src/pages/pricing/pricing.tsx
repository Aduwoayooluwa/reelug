import React from "react";
import { Row, Col, Card, Typography, List } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { PrimaryButton } from "../../components/button.components";

const { Title, Text } = Typography;

interface PricingPlan {
  title: string;
  price: string;
  features: string[];
  recommended?: boolean;
  backgroundColor?: string;
}

const pricingPlans: PricingPlan[] = [
  {
    title: "Free",
    price: "$0",
    features: ["Basic job tracking", "Limited applications", "Email support"],
    backgroundColor: "#f5daf6",
  },
  {
    title: "Pro",
    price: "$3",
    features: [
      "Unlimited applications",
      "Interview scheduler",
      "Priority support",
    ],
    recommended: true,
    backgroundColor: "#fee5cd",
  },
  {
    title: "Premium",
    price: "$5",
    features: [
      "All Pro features",
      "Analytics dashboard",
      "Document storage",
      "Custom reminders",
    ],
    backgroundColor: "#f9f5da",
  },
];

const PricingCard: React.FC<{ plan: PricingPlan }> = ({ plan }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="h-full"
  >
    <Card
      className={`h-full border-2 border-dark hover:shadow-xl transition-shadow duration-300 ${
        plan.recommended ? "ring-4 ring-[#b8f6b7]" : ""
      }`}
      bodyStyle={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: plan.backgroundColor,
      }}
    >
      {plan.recommended && (
        <div className="absolute top-0 right-0 bg-[#b8f6b7] text-dark px-2 py-1 rounded-bl-md font-semibold">
          Recommended
        </div>
      )}
      <Title level={2} className="text-center mb-4">
        {plan.title}
      </Title>
      <Title level={1} className="text-center mb-8">
        {plan.price}
        <Text className="text-base font-normal">/month</Text>
      </Title>
      <List
        dataSource={plan.features}
        renderItem={(item) => (
          <List.Item>
            <CheckOutlined className="text-green-500 mr-2" /> {item}
          </List.Item>
        )}
        className="flex-grow"
      />
      <div className="mt-8">
        <PrimaryButton block>Choose Plan</PrimaryButton>
      </div>
    </Card>
  </motion.div>
);

export const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen mt-20 py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <Title
          level={1}
          className="text-center mb-12 text-4xl sm:text-5xl font-bold"
        >
          Choose Your Plan
        </Title>
        <Row gutter={[24, 24]} justify="center" align="stretch">
          {pricingPlans.map((plan) => (
            <Col xs={24} sm={24} md={8} key={plan.title}>
              <PricingCard plan={plan} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
