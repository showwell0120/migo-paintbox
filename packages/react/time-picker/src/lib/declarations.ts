export interface ChangeHandlerParams<NameType = string> {
  valid: boolean;
  value: number | null;
  name: NameType;
}

export interface FormFieldBaseProps<NameType = string> {
  value: number | null;
  name: NameType;
  min?: number | null | undefined;

  onChange: (param: ChangeHandlerParams<NameType>) => void;
}
