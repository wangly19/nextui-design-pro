export const Close = ({ height, width, size, ...props }: any) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size || width || 24}
      height={size || height || 24}
      {...props}
    >
      <path d="M18 6L6 18M6 6l12 12"></path>
    </svg>
  );
};
