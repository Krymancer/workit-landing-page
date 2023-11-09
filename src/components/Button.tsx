import { Switch, type Component, Match } from "solid-js";

interface ButtonProps {
  label?: string;
  primary?: boolean;
  secondary?: boolean;
}

const Button : Component<ButtonProps> = (props) => {
  return (
    <Switch >
      <Match  when={props.secondary === true && !props.primary}>
        <button
         class="
          font-manrope font-bold text-body px-6 py-4 cursor-pointer transition-all
          decoration-eucaplyptus decoration-4 underline underline-offset-8 decoration-th
          hover:text-eucaplyptus
          "
        >{props.label}</button>
      </Match>
      <Match  when={props.primary === true || !props.primary}>
        <button 
          class="
          font-manrope font-bold text-body px-6 py-4 cursor-pointer transition-all
          bg-eucaplyptus text-dark-purple
          hover:bg-dark-purple hover:border-2 hover:border-eucaplyptus hover:text-eucaplyptus
          "
        >{props.label}</button>
      </Match>
    </Switch>
  );
};

export default Button;