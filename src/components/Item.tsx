import { Component } from "solid-js";

interface ItemProps {
  number: number;
  title: string;
  content: string;
}

const Item : Component<ItemProps> = (props) => {
  return (
    <div class="flex flex-col gap-6 justify-center items-center md:flex-row md:px-24 md:gap-8 lg:flex-col lg:px-0">
    <div class="font-fraunces flex items-center justify-center rounded-full border w-12 h-12 border-black text-xl">{props.number}</div>
    <div class="flex flex-col gap-4 items-center text-center px-4 md:text-start md:items-start md:px-0 lg:items-center lg:text-center">
      <h2 class="font-bold font-fraunces text-[1.75rem]">{props.title}</h2>
      <p class="text-davys-grey font-manrope md:w-[30rem]">{props.content}</p>
    </div>
  </div>
  )
}

export default Item;