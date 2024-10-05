import React from "react";
import { Typography, Layout, Space } from "antd";
import { motion } from "framer-motion";

const { Title, Paragraph } = Typography;
const { Content } = Layout;

const PrivacyPolicy: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Layout className="min-h-screen mt-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100" />
        <svg
          className="absolute bottom-0 left-0 right-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <Content className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <Title level={2} className="text-center mb-8">
            Privacy Policy
          </Title>
          <Space direction="vertical" size="middle" className="w-full">
            <motion.section variants={sectionVariants}>
              <Title level={4}>1. Introduction</Title>
              <Paragraph>
                This Privacy Policy explains how we collect, use, and protect
                your personal information when you use our website or services.
              </Paragraph>
            </motion.section>

            <motion.section variants={sectionVariants}>
              <Title level={4}>2. Information We Collect</Title>
              <Paragraph>
                We may collect personal information such as your name, email
                address, and other details you provide when using our services.
              </Paragraph>
            </motion.section>

            <motion.section variants={sectionVariants}>
              <Title level={4}>3. How We Use Your Information</Title>
              <Paragraph>
                We use your information to provide and improve our services,
                communicate with you, and comply with legal obligations.
              </Paragraph>
            </motion.section>

            <motion.section variants={sectionVariants}>
              <Title level={4}>4. Data Security</Title>
              <Paragraph>
                We implement appropriate security measures to protect your
                personal information from unauthorized access or disclosure.
              </Paragraph>
            </motion.section>

            <motion.section variants={sectionVariants}>
              <Title level={4}>5. Your Rights</Title>
              <Paragraph>
                You have the right to access, correct, or delete your personal
                information. Contact us to exercise these rights.
              </Paragraph>
            </motion.section>

            <motion.section variants={sectionVariants}>
              <Title level={4}>6. Changes to This Policy</Title>
              <Paragraph>
                We may update this Privacy Policy from time to time. We will
                notify you of any significant changes.
              </Paragraph>
            </motion.section>

            <motion.section variants={sectionVariants}>
              <Title level={4}>7. Contact Us</Title>
              <Paragraph>
                If you have any questions about this Privacy Policy, please
                contact us at privacy@example.com.
              </Paragraph>
            </motion.section>
          </Space>
        </motion.div>
      </Content>
    </Layout>
  );
};

export default PrivacyPolicy;
