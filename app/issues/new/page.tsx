"use client";

import React from "react";
import SimpleMdeReact from "react-simplemde-editor";

import "easymde/dist/easymde.min.css";

import { TextField, Button } from "@radix-ui/themes";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-5">
      <TextField.Root>
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      <SimpleMdeReact> </SimpleMdeReact>
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
