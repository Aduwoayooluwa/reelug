import { Button, ButtonProps } from "antd";

interface PrimaryButtonProps extends ButtonProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function PrimaryButton({
  children,
  icon,
  ...props
}: PrimaryButtonProps) {
  return (
    <div className="relative group w-[171.5px] h-[53px]">
      <Button
        type="primary"
        className="z-10 text-[18px] font-[500] w-full h-full"
        icon={icon}
        {...props}
      >
        {children}
      </Button>

      <button
        className="absolute h-full w-full -bottom-1 -right-1 border rounded border-black 
        transition-all ease-linear duration-300 group-hover:opacity-0 group-hover:translate-y-2 group-hover:border-transparent"
      ></button>
    </div>
  );
}
