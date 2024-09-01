/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from "react";
import { Table, Button, Modal } from "antd";

import { Contact, Email } from "../../types/contact.types";
import ContactDetailView from "./contact-view";

interface ContactSummaryTableProps {
  contacts: Contact[];
}

const ContactSummaryTable: React.FC<ContactSummaryTableProps> = ({
  contacts,
}) => {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (contact: Contact) => {
    setSelectedContact(contact);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setSelectedContact(null);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedContact(null);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "given_name",
      key: "given_name",
      render: (_: string, contact: Contact) =>
        `${contact.given_name} ${contact.surname}`,
    },
    {
      title: "Email",
      dataIndex: "emails",
      key: "emails",
      render: (emails: Email[]) =>
        emails.map((email) => email.email).join(", "),
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, contact: Contact) => (
        <Button type="primary" onClick={() => showModal(contact)}>
          View Details
        </Button>
      ),
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={contacts}
        rowKey="id"
        pagination={{ pageSize: 5 }}
        scroll={{ x: "max-content" }}
      />

      <Modal
        title="Contact Details"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        {selectedContact && <ContactDetailView contact={selectedContact} />}
      </Modal>
    </>
  );
};

export default ContactSummaryTable;
