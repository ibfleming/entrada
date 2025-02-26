import React, { type HTMLAttributes } from "react";
import { Button } from "@/ui/button";
import { cn } from "~/lib/utils";

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  icon?: React.ComponentType<React.SVGAttributes<SVGElement>>;
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  position?: "left" | "right";
  disabled?: boolean;
};

const PrimaryButton = ({
  className,
  size = "default",
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <Button
      size={size}
      type={type}
      variant="default"
      className={cn("font-inter hover:bg-hover", className)}
      {...props}
    >
      {props.children}
    </Button>
  );
};

const SecondaryButton = ({
  className,
  size = "default",
  ...props
}: ButtonProps) => {
  return (
    <Button
      size={size}
      variant="secondary"
      className={cn(
        "font-inter hover:bg-primary hover:text-background",
        className,
      )}
      {...props}
    >
      {props.children}
    </Button>
  );
};

const DestructiveButton = ({
  className,
  size = "default",
  ...props
}: ButtonProps) => {
  return (
    <Button
      size={size}
      variant="destructive"
      className={cn("font-inter", className)}
      {...props}
    >
      {props.children}
    </Button>
  );
};

const OutlineButton = ({
  className,
  size = "default",
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <Button
      size={size}
      variant="outline"
      className={cn("font-inter text-primary hover:text-primary", className)}
      disabled={disabled}
      {...props}
    >
      {props.children}
    </Button>
  );
};

const GhostButton = ({
  className,
  size = "default",
  ...props
}: ButtonProps) => {
  return (
    <Button
      size={size}
      variant="ghost"
      className={cn("font-inter text-primary hover:text-primary", className)}
      {...props}
    >
      {props.children}
    </Button>
  );
};

const LinkButton = ({ className, size = "default", ...props }: ButtonProps) => {
  return (
    <Button
      size={size}
      variant="link"
      className={cn("font-inter text-primary hover:text-primary", className)}
      {...props}
    >
      {props.children}
    </Button>
  );
};

const IconButton = ({ className, ...props }: ButtonProps) => {
  return (
    <Button
      variant="outline"
      className={cn("font-inter text-primary hover:text-primary", className)}
      size="icon"
      {...props}
    >
      {props.children}
    </Button>
  );
};

const ButtonIconText = ({
  icon: IconComponent,
  children,
  className,
  size = "default",
  position = "left",
}: ButtonProps) => {
  return (
    <Button size={size} className={cn("font-inter hover:bg-hover", className)}>
      {IconComponent && position === "left" ? (
        <>
          <IconComponent className="mr-2 h-4 w-4" />
          {children}
        </>
      ) : (
        <>
          {children}
          {IconComponent && <IconComponent className="ml-2 h-4 w-4" />}
        </>
      )}
    </Button>
  );
};

export {
  PrimaryButton,
  SecondaryButton,
  DestructiveButton,
  OutlineButton,
  GhostButton,
  LinkButton,
  IconButton,
  ButtonIconText,
};

/* const ButtonSecondary = () => {};
const ButtonDestructive = () => {};
const ButtonOutline = () => {};
const ButtonGhost = () => {};
const ButtonLink = () => {};
const ButtonIcon = () => {};
const ButtonIconText = () => {};
 */
