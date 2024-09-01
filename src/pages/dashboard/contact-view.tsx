import React from "react";
import { Card, List } from "antd";
import { Contact } from "../../types/contact.types";

interface ContactDetailViewProps {
  contact: Contact;
}

const ContactDetailView: React.FC<ContactDetailViewProps> = ({ contact }) => {
  return (
    <Card
      title={`${contact.given_name} ${contact.surname}`}
      style={{ marginBottom: "20px" }}
    >
      <p>
        <strong>Email(s):</strong>
      </p>
      <List
        dataSource={contact.emails}
        renderItem={(email) => <List.Item>{email.email}</List.Item>}
      />
      {contact.company_name && (
        <p>
          <strong>Company:</strong> {contact.company_name}
        </p>
      )}
      {contact.job_title && (
        <p>
          <strong>Job Title:</strong> {contact.job_title}
        </p>
      )}
      {contact.manager_name && (
        <p>
          <strong>Manager:</strong> {contact.manager_name}
        </p>
      )}
      {contact.office_location && (
        <p>
          <strong>Office Location:</strong> {contact.office_location}
        </p>
      )}
      {contact.phone_numbers && (
        <p>
          <strong>Phone Numbers:</strong> {contact.phone_numbers.join(", ")}
        </p>
      )}
      {contact.physical_addresses && (
        <p>
          <strong>Physical Addresses:</strong>{" "}
          {contact.physical_addresses.join(", ")}
        </p>
      )}
      {contact.notes && (
        <p>
          <strong>Notes:</strong> {contact.notes}
        </p>
      )}
      {contact.picture_url && (
        <img
          src={contact.picture_url}
          alt={`${contact.given_name} ${contact.surname}`}
          style={{ width: "100px", height: "100px" }}
        />
      )}
    </Card>
  );
};

export default ContactDetailView;
