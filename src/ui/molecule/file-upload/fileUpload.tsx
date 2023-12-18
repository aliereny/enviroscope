"use client";
import React, { useState } from "react";
import { Button, Upload } from "antd";
import { RcFile } from "antd/lib/upload";
import { UploadOutlined } from "@ant-design/icons";

type FileUploadProps = {
  value?: RcFile;
  onChange?: (file?: RcFile) => void;
};

export const FileUpload: React.FC<FileUploadProps> = (props) => {
  const { value, onChange } = props;
  const [file, setFile] = useState<RcFile | undefined>(value);

  const handleFileChange = (info: any) => {
    const fileList = info.fileList;
    const latestFile = fileList[fileList.length - 1]?.originFileObj;

    if (latestFile) {
      setFile(latestFile);
      if (onChange) {
        onChange(latestFile);
      }
    }
  };

  const uploadButton = (
    <Button>
      <UploadOutlined /> Click to Upload
    </Button>
  );

  const handleRemove = () => {
    setFile(undefined);
    if (onChange) {
      onChange(undefined);
    }
  };

  return (
    <Upload
      name="file"
      listType="text"
      fileList={file ? [file] : []}
      beforeUpload={() => false} // Prevent automatic upload
      onChange={handleFileChange}
      showUploadList={{ showRemoveIcon: true, showPreviewIcon: false }}
      onRemove={handleRemove}
    >
      {file ? null : uploadButton}
    </Upload>
  );
};
