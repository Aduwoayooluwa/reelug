import React from "react";
import { Typography, Layout, Space } from "antd";
import { motion } from "framer-motion";

const { Title, Paragraph } = Typography;
const { Content } = Layout;

const TermsAndConditions: React.FC = () => {
  return (
    <Layout className="min-h-screen mt-20 bg-gradient-to-br from-blue-500 to-green-600">
      <Content className="p-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto"
        >
          {/* Clip-art decoration */}
          <motion.div
            className="absolute -top-16 -left-16 w-32 h-32"
            initial={{ rotate: -45, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-green-400 fill-current"
            >
              <path d="M50 0 L100 50 L50 100 L0 50 Z" />
            </svg>
          </motion.div>

          <Space direction="vertical" size="middle" className="w-full">
            <Title level={2} className="text-center text-3xl font-bold mb-8">
              Terms and Conditions
            </Title>

            <Paragraph>
              Welcome to our website. If you continue to browse and use this
              website, you are agreeing to comply with and be bound by the
              following terms and conditions of use.
            </Paragraph>

            <Title level={4} className="text-xl font-semibold mt-6">
              1. Use of Website
            </Title>
            <Paragraph>
              The content of the pages of this website is for your general
              information and use only. It is subject to change without notice.
            </Paragraph>

            <Title level={4} className="text-xl font-semibold mt-6">
              2. Intellectual Property
            </Title>
            <Paragraph>
              This website contains material which is owned by or licensed to
              us. This material includes, but is not limited to, the design,
              layout, look, appearance and graphics. Reproduction is prohibited
              other than in accordance with the copyright notice.
            </Paragraph>

            <Title level={4} className="text-xl font-semibold mt-6">
              3. Limitations of Liability
            </Title>
            <Paragraph>
              Your use of any information or materials on this website is
              entirely at your own risk, for which we shall not be liable. It
              shall be your own responsibility to ensure that any products,
              services or information available through this website meet your
              specific requirements.
            </Paragraph>

            {/* Add more sections as needed */}

            <Paragraph className="text-sm text-gray-600 mt-8">
              Last updated: {new Date().toLocaleDateString()}
            </Paragraph>
          </Space>
        </motion.div>
      </Content>
    </Layout>
  );
};

export default TermsAndConditions;
