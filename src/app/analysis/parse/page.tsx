"use client";
import {
  Alert,
  Button,
  Flex,
  Form,
  Input,
  Space,
  Typography,
  Upload,
} from "antd";
import { FileUpload } from "@/ui/molecule/file-upload/fileUpload";
import { useState } from "react";
import { RcFile } from "antd/lib/upload";
import { Analysis } from "@/types";
import TextArea from "antd/es/input/TextArea";

export default function ParseAnalysisPage() {
  const [file, setFile] = useState<RcFile | undefined>(undefined);
  const [result, setResult] = useState<Analysis | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!file) {
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch("/api/analysis/parse", {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      const result = await response.json();
      setResult(result);
    } else {
      setError(await response.text());
    }
  };

  return (
    <Flex vertical gap={16}>
      <Typography.Title level={1}>Parse Analysis</Typography.Title>
      <Space direction={"vertical"}>
        <Typography.Text>
          Upload a file to get a parse analysis.
        </Typography.Text>
        <FileUpload value={file} onChange={setFile} />
        <Button
          onClick={handleSubmit}
          disabled={file === undefined}
          type={"primary"}
          style={{ alignSelf: "flex-start" }}
        >
          Parse
        </Button>
      </Space>
      {error && <Alert type={"error"} message={error} />}
      {result && (
        <Space direction={"vertical"}>
          <Typography.Text strong>Result</Typography.Text>
          <Input.TextArea rows={10} value={JSON.stringify(result, null, 2)} />
        </Space>
      )}
    </Flex>
  );
}
