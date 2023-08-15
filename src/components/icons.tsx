import { cn } from "@/lib";

export type Icon = React.FunctionComponent<React.ComponentProps<"svg">>;

export const InboxIcon: Icon = ({ className, ...iconProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(["h-6 w-6", className])}
      viewBox="0 0 24 24"
      strokeWidth="1.25"
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
      strokeWidth="1.25"
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
      strokeWidth="1.25"
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
      strokeWidth="1.25"
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

export const ChevronDownIcon: Icon = ({ className, ...iconProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(["h-6 w-6", className])}
      viewBox="0 0 24 24"
      strokeWidth="1.25"
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

export const ChevronUpIcon: Icon = ({ className, ...iconProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(["h-6 w-6", className])}
      viewBox="0 0 24 24"
      strokeWidth="1.25"
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
      strokeWidth="1.25"
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

export const DotsIcon: Icon = ({ className, ...iconProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(["h-6 w-6", className])}
      viewBox="0 0 24 24"
      strokeWidth="1.25"
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
      strokeWidth="1.25"
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
      strokeWidth="1.25"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...iconProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M18 6l-12 12"></path>
      <path d="M6 6l12 12"></path>
    </svg>
  );
};

export const SendIcon: Icon = ({ className, ...iconProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(["h-6 w-6", className])}
      viewBox="0 0 24 24"
      strokeWidth="1.25"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...iconProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M10 14l11 -11"></path>
      <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
    </svg>
  );
};

export const StrikethroughIcon: Icon = ({ className, ...iconProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(["h-6 w-6", className])}
      viewBox="0 0 24 24"
      strokeWidth="1.25"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...iconProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M5 12l14 0"></path>
      <path d="M16 6.5a4 2 0 0 0 -4 -1.5h-1a3.5 3.5 0 0 0 0 7h2a3.5 3.5 0 0 1 0 7h-1.5a4 2 0 0 1 -4 -1.5"></path>
    </svg>
  );
};

export const UnderlineIcon: Icon = ({ className, ...iconProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(["h-6 w-6", className])}
      viewBox="0 0 24 24"
      strokeWidth="1.25"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...iconProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M7 5v5a5 5 0 0 0 10 0v-5"></path>
      <path d="M5 19h14"></path>
    </svg>
  );
};

export const ItalicIcon: Icon = ({ className, ...iconProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(["h-6 w-6", className])}
      viewBox="0 0 24 24"
      strokeWidth="1.25"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...iconProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M11 5l6 0"></path>
      <path d="M7 19l6 0"></path>
      <path d="M14 5l-4 14"></path>
    </svg>
  );
};

export const BoldIcon: Icon = ({ className, ...iconProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(["h-6 w-6", className])}
      viewBox="0 0 24 24"
      strokeWidth="1.25"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...iconProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M7 5h6a3.5 3.5 0 0 1 0 7h-6z"></path>
      <path d="M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7"></path>
    </svg>
  );
};

export const TrashIcon: Icon = ({ className, ...iconProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(["h-6 w-6", className])}
      viewBox="0 0 24 24"
      strokeWidth="1.25"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...iconProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M4 7l16 0"></path>
      <path d="M10 11l0 6"></path>
      <path d="M14 11l0 6"></path>
      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
    </svg>
  );
};

export const EditIcon: Icon = ({ className, ...iconProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(["h-6 w-6", className])}
      viewBox="0 0 24 24"
      strokeWidth="1.25"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...iconProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
      <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
      <path d="M16 5l3 3"></path>
    </svg>
  );
};

export const ArrowUpIcon: Icon = ({ className, ...iconProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(["h-6 w-6", className])}
      viewBox="0 0 24 24"
      strokeWidth="1.25"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...iconProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 5l0 14"></path>
      <path d="M18 11l-6 -6"></path>
      <path d="M6 11l6 -6"></path>
    </svg>
  );
};

export const ArrowDownIcon: Icon = ({ className, ...iconProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(["h-6 w-6", className])}
      viewBox="0 0 24 24"
      strokeWidth="1.25"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...iconProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 5l0 14"></path>
      <path d="M18 13l-6 6"></path>
      <path d="M6 13l6 6"></path>
    </svg>
  );
};

export const ArrowSortIcon: Icon = ({ className, ...iconProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(["h-6 w-6", className])}
      viewBox="0 0 24 24"
      strokeWidth="1.25"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...iconProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M3 9l4 -4l4 4m-4 -4v14"></path>
      <path d="M21 15l-4 4l-4 -4m4 4v-14"></path>
    </svg>
  );
};

export const HeartIcon: Icon = ({ className, ...iconProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(["h-6 w-6", className])}
      viewBox="0 0 24 24"
      strokeWidth="1.25"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...iconProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
    </svg>
  );
};

export const HeartOffIcon: Icon = ({ className, ...iconProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(["h-6 w-6", className])}
      viewBox="0 0 24 24"
      strokeWidth="1.25"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...iconProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M3 3l18 18"></path>
      <path d="M19.5 12.572l-1.5 1.428m-2 2l-4 4l-7.5 -7.428a5 5 0 0 1 -1.288 -5.068a4.976 4.976 0 0 1 1.788 -2.504m3 -1c1.56 0 3.05 .727 4 2a5 5 0 1 1 7.5 6.572"></path>
    </svg>
  );
};

export const PointIcon: Icon = ({ className, ...iconProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(["h-6 w-6", className])}
      viewBox="0 0 24 24"
      strokeWidth="1.25"
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

export const ArchiveIcon: Icon = ({ className, ...iconProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(["h-6 w-6", className])}
      viewBox="0 0 24 24"
      strokeWidth="1.25"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...iconProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
      <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10"></path>
      <path d="M10 12l4 0"></path>
    </svg>
  );
};

export const SettingsIcon: Icon = ({ className, ...iconProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(["h-6 w-6", className])}
      viewBox="0 0 24 24"
      strokeWidth="1.25"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...iconProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
    </svg>
  );
};

export const ArchiveOffIcon: Icon = ({ className, ...iconProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(["h-6 w-6", className])}
      viewBox="0 0 24 24"
      strokeWidth="1"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...iconProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M8 4h11a2 2 0 1 1 0 4h-7m-4 0h-3a2 2 0 0 1 -.826 -3.822"></path>
      <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 1.824 -1.18m.176 -3.82v-7"></path>
      <path d="M10 12h2"></path>
      <path d="M3 3l18 18"></path>
    </svg>
  );
};

export const AdjustmentIcon: Icon = ({ className, ...iconProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(["h-6 w-6", className])}
      viewBox="0 0 24 24"
      strokeWidth="1.25"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...iconProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
      <path d="M4 6l8 0"></path>
      <path d="M16 6l4 0"></path>
      <path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
      <path d="M4 12l2 0"></path>
      <path d="M10 12l10 0"></path>
      <path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
      <path d="M4 18l11 0"></path>
      <path d="M19 18l1 0"></path>
    </svg>
  );
};

export const LayoutIcon: Icon = ({ className, ...iconProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(["h-6 w-6", className])}
      viewBox="0 0 24 24"
      strokeWidth="1.25"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...iconProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M3 3m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v16a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1zm6 -1v18m6 -18v18"></path>
    </svg>
  );
};

export const BoxMultipleIcon: Icon = ({ className, ...iconProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(["h-6 w-6", className])}
      viewBox="0 0 24 24"
      strokeWidth="1.25"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...iconProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M7 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"></path>
      <path d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2"></path>
    </svg>
  );
};
