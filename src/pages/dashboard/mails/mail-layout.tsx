import { Divider, Flex, Space } from "antd";
import EmptyImage from "../../../assets/imgs/empty_mail.gif";
import { useState } from "react";

const MailLayout = ({ content }: { content: Record<string, unknown> }) => {
  const isContentEmpty = content?.message;

  return (
    <div className="flex items-center w-full min-h-screen bg-white ">
      <div></div>

      <div>{isContentEmpty ? <EmptyMail /> : <MailContent />}</div>
    </div>
  );
};
const EmailItem = ({
  avatar,
  senderName,
  subject,
  preview,
  time,
}: {
  avatar: string;
  senderName: string;
  subject: string;
  preview: string;
  time: string;
}) => (
  <div className="flex items-center p-3 bg-gray-100 rounded-md hover:bg-gray-200 cursor-pointer w-full">
    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
      {avatar}
    </div>
    <div className="flex-grow min-w-0">
      <h3 className="font-[600] text-sm text-gray-800 truncate">
        {senderName}
      </h3>
      <p className="text-sm text-gray-600 truncate">
        {subject}: {preview}
      </p>
    </div>
    <div className="text-xs text-gray-500 ml-2 flex-shrink-0">{time}</div>
  </div>
);

function EmptyMail() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center bg-white p-10 rounded-lg shadow-lg">
        <img
          src={EmptyImage}
          alt="no mail"
          className="w-40 h-40 mx-auto mb-4"
        />
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          No mail content
        </h2>
        <p className="text-gray-600 mb-4">Select a mail to view its content.</p>
      </div>
    </div>
  );
}

function MailContent() {
  const [selectedEmail, setSelectedEmail] = useState<
    (typeof emailData)[0] | null
  >(null);

  return (
    <div className="p-6 w-full h-[90vh] overflow-hidden">
      <div className="mb-4 mt-8">
        <h2 className="font-[600] text-gray-800">Inbox</h2>
      </div>
      <Flex className="h-[calc(90vh-80px)]">
        <Space
          className="w-[340px] overflow-y-auto"
          direction="vertical"
          size={8}
        >
          {emailData.map((email, index) => (
            <div key={index} onClick={() => setSelectedEmail(email)}>
              <EmailItem
                avatar={email.avatar}
                senderName={email.senderName}
                subject={email.subject}
                preview={email.preview}
                time={email.time}
              />
            </div>
          ))}
        </Space>

        <Divider type="vertical" className="h-full" />

        <div className="flex-1 overflow-y-auto pl-4">
          {selectedEmail ? (
            <EmailContent email={selectedEmail} />
          ) : (
            <p className="text-gray-500 text-center mt-8">
              Select an email to view its content.
            </p>
          )}
        </div>
      </Flex>
    </div>
  );
}

const EmailContent = ({ email }: { email: (typeof emailData)[0] }) => (
  <div className="p-4">
    <h2 className="text-lg font-[600] mb-4">{email.subject}</h2>
    <div className="flex items-center mb-4">
      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
        {email.avatar}
      </div>
      <div>
        <h3 className="font-[500]">{email.senderName}</h3>
        <p className="text-sm text-gray-500">{email.time}</p>
      </div>
    </div>
    <p className="text-gray-700">{email.preview}</p>
    {/* Add more content here as needed */}
  </div>
);

export default MailLayout;

const emailData = [
  {
    avatar: "JD",
    senderName: "Jane Doe",
    subject: "Weekly team sync-up",
    preview: "Hi team, just a reminder about our weekly...",
    time: "11:45 AM",
  },
  {
    avatar: "JS",
    senderName: "John Smith",
    subject: "Project update",
    preview: "I've completed the first phase of the project...",
    time: "10:30 AM",
  },
  {
    avatar: "AS",
    senderName: "Alice Sanders",
    subject: "Client meeting",
    preview: "The client has requested a meeting to discuss...",
    time: "Yesterday",
  },
  {
    avatar: "MB",
    senderName: "Mike Brown",
    subject: "New feature proposal",
    preview: "I have an idea for a new feature that could...",
    time: "2 days ago",
  },
  {
    avatar: "ET",
    senderName: "Emma Thompson",
    subject: "Vacation request",
    preview: "I'd like to request time off from July 15th to...",
    time: "3 days ago",
  },
];
