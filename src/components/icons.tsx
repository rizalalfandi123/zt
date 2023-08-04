import { cn } from "@/lib";

export type Icon = React.FunctionComponent<React.ComponentProps<"svg">>;

export const InboxIcon: Icon = ({ className, ...iconProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(["h-6 w-6", className])}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...iconProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
      <path d="M4 13h3l3 3h4l3 -3h3"></path>
    </svg>
  );
};

export const CalendarIcon: Icon = ({ className, ...iconProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(["h-6 w-6", className])}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...iconProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
      <path d="M16 3l0 4"></path>
      <path d="M8 3l0 4"></path>
      <path d="M4 11l16 0"></path>
      <path d="M8 15h2v2h-2z"></path>
    </svg>
  );
};

export const CalendarUpIcon: Icon = ({ className, ...iconProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(["h-6 w-6", className])}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...iconProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12.5 21h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v5"></path>
      <path d="M16 3v4"></path>
      <path d="M8 3v4"></path>
      <path d="M4 11h16"></path>
      <path d="M19 22v-6"></path>
      <path d="M22 19l-3 -3l-3 3"></path>
    </svg>
  );
};

export const CategoryIcon: Icon = ({ className, ...iconProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(["h-6 w-6", className])}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...iconProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M4 4h6v6h-6z"></path>
      <path d="M14 4h6v6h-6z"></path>
      <path d="M4 14h6v6h-6z"></path>
      <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
    </svg>
  );
};

export const ChevronDown: Icon = ({ className, ...iconProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(["h-6 w-6", className])}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...iconProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M6 9l6 6l6 -6"></path>
    </svg>
  );
};

export const ChevronUp: Icon = ({ className, ...iconProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(["h-6 w-6", className])}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...iconProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M6 15l6 -6l6 6"></path>
    </svg>
  );
};

export const PlusIcon: Icon = ({ className, ...iconProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(["h-6 w-6", className])}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...iconProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 5l0 14"></path>
      <path d="M5 12l14 0"></path>
    </svg>
  );
};

export const PointIcon: Icon = ({ className, ...iconProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(["h-6 w-6", className])}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...iconProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"
        strokeWidth="0"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export const DotsIcon: Icon = ({ className, ...iconProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(["h-6 w-6", className])}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...iconProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
      <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
      <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
    </svg>
  );
};

export const LoaderIcon: Icon = ({ className, ...iconProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(["h-6 w-6", className])}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...iconProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 3a9 9 0 1 0 9 9"></path>
    </svg>
  );
};

export const XIcon: Icon = ({ className, ...iconProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(["h-6 w-6", className])}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...iconProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M18 6l-12 12"></path>
      <path d="M6 6l12 12"></path>
    </svg>
  );
};

export const IconDeviceFloppy: Icon = ({ className, ...iconProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(["h-6 w-6", className])}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...iconProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M18 6l-12 12"></path>
      <path d="M6 6l12 12"></path>
    </svg>
  );
};

export const IconStrikethrough: Icon = ({ className, ...iconProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(["h-6 w-6", className])}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...iconProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M18 6l-12 12"></path>
      <path d="M6 6l12 12"></path>
    </svg>
  );
};

export const IconUnderline: Icon = ({ className, ...iconProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(["h-6 w-6", className])}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...iconProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M18 6l-12 12"></path>
      <path d="M6 6l12 12"></path>
    </svg>
  );
};

export const IconItalic: Icon = ({ className, ...iconProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(["h-6 w-6", className])}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...iconProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M18 6l-12 12"></path>
      <path d="M6 6l12 12"></path>
    </svg>
  );
};

export const IconBold: Icon = ({ className, ...iconProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(["h-6 w-6", className])}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...iconProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M18 6l-12 12"></path>
      <path d="M6 6l12 12"></path>
    </svg>
  );
};
