import { useQuery } from "@tanstack/react-query";
import { Table, Tag, Alert, Input, Select, Space, Button, Modal } from "antd";
import axios from "axios";
import { useMemo, useState, useCallback } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import AddJob from "./add-job";

const { Option } = Select;

interface DataType {
  key: string;
  email: string;
  jobTitle: string;
  companyName: string;
  status: string;
  dateApplied: string;
}

const columns = [
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Job Title",
    dataIndex: "jobTitle",
    key: "jobTitle",
  },
  {
    title: "Company Name",
    dataIndex: "companyName",
    key: "companyName",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status: string) => {
      let color = "geekblue";
      if (status === "Pending") {
        color = "volcano";
      } else if (status === "Accepted") {
        color = "green";
      } else if (status === "Rejected") {
        color = "red";
      }
      return <Tag color={color}>{status.toUpperCase()}</Tag>;
    },
  },
  {
    title: "Date Applied",
    dataIndex: "dateApplied",
    key: "dateApplied",
  },
];

const fetchJobApplications = async (): Promise<DataType[]> => {
  const response = await axios.get<DataType[]>("/data/jobs.json");
  return response.data;
};

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const [searchParams] = useSearchParams("");
  const addModalOpen = Boolean(searchParams.get("add-job"));

  const router = useNavigate();

  console.log(addModalOpen, "addjob modal popen");

  const { data, isLoading, isError, error } = useQuery<DataType[], Error>({
    queryKey: ["jobApplications"],
    queryFn: fetchJobApplications,
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });

  const filteredData = useMemo(() => {
    if (!data) return [];
    return data.filter((item) => {
      const matchesSearch =
        searchTerm === "" ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.jobTitle.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus =
        statusFilter === "" ||
        statusFilter === "All" ||
        item.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [data, searchTerm, statusFilter]);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    },
    []
  );

  const handleStatusChange = useCallback((value: string) => {
    setStatusFilter(value);
  }, []);

  function onClose() {
    router("/dashboard");
  }

  if (isError) {
    return (
      <div className="container grid place-items-center">
        <Alert
          message="Error"
          description={`There was an error fetching the data: ${error.message}`}
          type="error"
          showIcon
        />
      </div>
    );
  }

  return (
    <div className="mt-20 max-w-full relative px-10 2xl:px-6 mx-auto space-y-5">
      <header className="flex items-center space-x-4 justify-between">
        <h2 className="font-[500] text-xl">Your Applied Jobs</h2>

        <Button type="primary">
          <Link to="?add-job=true">Add a Job</Link>
        </Button>
      </header>
      <Space size={16}>
        <Input
          placeholder="Search by Email, Company Name, or Job Title"
          onChange={handleSearchChange}
          style={{ width: 300 }}
        />

        {/* Status Filter */}
        <Select
          placeholder="Filter by Status"
          onChange={handleStatusChange}
          style={{ width: 200 }}
          allowClear
          defaultValue="All"
        >
          <Option value="All">All</Option>
          <Option value="Pending">Pending</Option>
          <Option value="Accepted">Accepted</Option>
          <Option value="Rejected">Rejected</Option>
        </Select>
      </Space>
      <Table
        loading={isLoading}
        columns={columns}
        dataSource={filteredData}
        pagination={{ pageSize: 5 }}
      />

      <Modal closable={false} open={addModalOpen} onClose={onClose}>
        <AddJob />
      </Modal>
    </div>
  );
}
