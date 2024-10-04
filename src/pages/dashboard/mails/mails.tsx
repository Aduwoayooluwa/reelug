import MailLayout from "./mail-layout";

const Mails = () => {

  const mailContent = {
    content: '',
    title: '',
    sender: '',
    recipients: [],
    subject: '',
    date: new Date(),
    attachments: [],
  }

  return (
    <div>
        <MailLayout content={mailContent} />
    </div>
  )
}

export default Mails;