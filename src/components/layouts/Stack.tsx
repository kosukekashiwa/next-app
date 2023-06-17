import React from 'react';

type StackProps = {
  children: React.ReactNode;
  direction?: keyof typeof directionStyle;
  alignItems?: keyof typeof alignItemsStyle;
  justifyContent?: keyof typeof justifyContentStyle;
  space?: keyof typeof spaceStyle;
  // ToDo: divider props and Divider Component.
  // divider: React.ReactNode;
};

const Stack: React.FC<StackProps> = ({
  children,
  direction = 'row',
  alignItems = 'center',
  justifyContent = 'center',
  space = '1',
}) => {
  const childrenArray = React.Children.toArray(children).filter(Boolean);

  return (
    <div
      className={`flex ${directionStyle[direction]} ${alignItemsStyle[alignItems]} ${justifyContentStyle[justifyContent]} ${spaceStyle[space]}`}
    >
      {childrenArray.map((item) => {
        return item;
      })}
    </div>
  );
};

const directionStyle = {
  row: 'flex-row',
  rowReverse: 'flex-row-reverse',
  column: 'flex-col',
  columnReverse: 'flex-col-reverse',
};

const alignItemsStyle = {
  flexStart: 'items-start',
  center: 'items-center',
  flexEnd: 'items-end',
  stretch: 'stretch',
  baseline: 'baseline',
};

const justifyContentStyle = {
  flexStart: 'justify-start',
  center: 'justify-center',
  flexEnd: 'justify-end',
  spaceBetween: 'justify-between',
};
const spaceStyle = {
  '0': 'gap-0',
  '0.5': 'gap-[4px]',
  '1': 'gap-[8px]',
  '2': 'gap-[16px]',
  '3': 'gap-[24px]',
  '4': 'gap-[32px]',
  '8': 'gap-[64px]',
  '12': 'gap-[96px]',
};

export default Stack;
