/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control } from "react-hook-form";

export type InputProps = {
  control: Control | any;
  type: string;
  name: string;
  label: string;
  maxLength?: number;
  error: string | undefined;
};
