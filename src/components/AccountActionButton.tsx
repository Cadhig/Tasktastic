
export default function AccountActionButton(props: any) {
    return ( 
      <button className="p-3 w-80 rounded-lg bg-tasktastic-base hover:bg-tasktastic-hover active:bg-tasktastic-active text-xl text-white" onClick={props.onClick}>{props.type}</button>
    )
}