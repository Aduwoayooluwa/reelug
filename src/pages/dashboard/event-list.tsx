import React from "react";
import { List, Button } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { EventData } from "../../types/events.types";

const EventList: React.FC<{ eventData: EventData[] }> = ({ eventData }) => {
  const navigate = useNavigate();

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Events</h2>
        <Button
          type="primary"
          icon={<CalendarOutlined />}
          onClick={() => navigate("/interviews")}
        >
          Manage Interview
        </Button>
      </div>

      <List
        itemLayout="horizontal"
        dataSource={eventData}
        renderItem={(event: EventData) => (
          <List.Item>
            <List.Item.Meta
              title={<h3 className="text-lg font-semibold">{event.title}</h3>}
              description={
                <>
                  <p>
                    {event.description
                      ? event.description
                      : "No description provided"}
                  </p>
                  <p>Created by: {event.creator.email}</p>
                  <p>Organizer: {event.organizer.email}</p>
                  <p>Read Only: {event.read_only ? "Yes" : "No"}</p>
                  <p>Status: {event.status}</p>
                  <p>
                    Meeting Link:{" "}
                    <a
                      href={event.conferencing.details.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {event.conferencing.details.url}
                    </a>
                  </p>
                  <p>
                    Participants:{" "}
                    {event.participants.map((participant) => (
                      <span key={participant.email}>
                        {participant.email} ({participant.status}){" "}
                      </span>
                    ))}
                  </p>
                </>
              }
            />
            <div>
              <span className="inline-block w-4 h-4 bg-blue-500"></span>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default EventList;
